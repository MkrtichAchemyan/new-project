import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../http.service';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  name;
  lastname;
  email;
  username;
  password;
  confirm_password;
  phone;
  facultet = "Facultet";
  branch = "Branch";
  ind;
  idU;
  studentLIst;
  facultetList;
  branchList;
  user;
  roleVal = "Student";
  nameU;
  lastnameU;
  emailU;
  phoneU;

  errorUsernameSpan;
  errorFirstnameSpan;
  errorLastnameSpan;
  errorEmailSpan;
  errorPhoneSpan;
  errorPasswordSpan;
  errorFacultetSpan;
  errorBranchSpan;

  api_token = localStorage.getItem("token");
  session_id = localStorage.getItem("Authorization");

  constructor(private postService: HttpService, config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  openA(content) {
    this.modalService.open(content, { size: 'lg' });
    let data = {
      session_id: this.session_id,
      api_token: this.api_token
    }
    this.postService.getFacultet(data).subscribe(data => {
      this.facultetList = data;
      console.log(this.facultetList)
    },error => {
      console.log(error)
    })
    this.branch = "Branch"
    this.facultet = "Facultet"
  }
  openU(content,ind) {
    this.modalService.open(content);
    this.idU = this.studentLIst[ind].id;
    this.nameU = this.studentLIst[ind].first_name;
    this.lastnameU = this.studentLIst[ind].last_name;
    this.phoneU = this.studentLIst[ind].phone;
    this.emailU = this.studentLIst[ind].email;
    this.ind = ind;
  }
  ngOnInit() {
    let sessionId = localStorage.getItem('Authorization');
    let token = localStorage.getItem('token');
    let person = {
      list_name: 'Student',
      session_id: sessionId,
      api_token: token
    };
    this.postService.getUser(person).subscribe(data => {
      this.studentLIst = data;
      console.log(this.studentLIst)
    }, error => {
      console.log(error);
    });
  }

  save(name, lastname, email, username, password, confirm_password, phone, close) {
    if (password === confirm_password) {
      this.user = {
        first_name: name,
        last_name: lastname,
        email: email,
        username: username,
        password: password,
        phone: phone,
        faculties: this.facultet,
        branch: this.branch,
        role: this.roleVal,
        api_token: this.api_token,
        session_id: this.session_id
      };
      console.log(this.user);
      this.postService.addStudent(this.user).subscribe(data => {
        console.log(data, 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
        this.studentLIst.push(data)
        close();
        this.name ='';
        this.lastname ='';
        this.email ='';
        this.username ='';
        this.password ='';
        this.confirm_password ='';
        this.phone ='';
        this.facultet= '';
        this.branch= '';
      }, error => {
        if (error.error.email) {
          this.errorEmailSpan = error.error.email[0]
          this.password ='';
          this.confirm_password ='';
        }
        else{
          this.errorEmailSpan = ''
        }
        if (error.error.first_name) {
          this.errorFirstnameSpan = error.error.first_name[0]
          this.password ='';
          this.confirm_password ='';
        }
        else{
          this.errorFirstnameSpan = ''
        }
        if (error.error.last_name) {
          this.errorLastnameSpan = error.error.last_name[0]
          this.password ='';
          this.confirm_password ='';
        }
        else{
          this.errorLastnameSpan = ''
        }
        if (error.error.password) {
          this.errorPasswordSpan = error.error.password[0]
          this.password ='';
          this.confirm_password ='';
        }
        else{
          this.errorPasswordSpan = ''
        }
        if (error.error.phone) {
          this.errorPhoneSpan = error.error.phone[0]
          this.password ='';
          this.confirm_password ='';
        }
        else{
          this.errorPhoneSpan = ''
        }
        if (error.error.username) {
          this.errorUsernameSpan = error.error.username[0]
          this.password ='';
          this.confirm_password ='';
        }
        else{
          this.errorUsernameSpan = ''
        }
        if (error.error.faculties) {
          this.errorFacultetSpan = error.error.faculties[0]
          this.password ='';
          this.confirm_password ='';
        }
        else{
          this.errorFacultetSpan = ''
        }
        if (error.error.branch) {
          this.errorBranchSpan = error.error.branch[0]
          this.password ='';
          this.confirm_password ='';
        }
        else{
          this.errorBranchSpan = ''
        }
        console.log(error);
      });
    }
    else{
      this.errorPasswordSpan = 'The passwords do not and then retype the password.'
      this.password ='';
      this.confirm_password ='';
    }
  }
  deleteUser(i){
    let user = {
      user_id: this.studentLIst[i].id,
      api_token: this.api_token,
      session_id: this.session_id
    };
    this.postService.delete_user(user).subscribe(data=>{
      console.log(data);
    }, error =>{
      console.log(error)
    });
    this.studentLIst.splice(i,1)
  }
  update(name, lastname, email, phone, close){
      let user = {
        api_token: this.api_token,
        session_id: this.session_id,
        user_id: this.idU,
        fields:[
          {first_name: name},
          {last_name: lastname},
          {email: email},
          {phone: phone},
        ]
      };
      this.postService.update_user(user).subscribe(data =>{
        console.log(data, 'ggggggggggggggggggggggggggggggggg');
        this.studentLIst.splice(this.ind,1 , data);
        close();
      },error => {
        console.log(error)
      })
  }
  facultetValue(){
    let data = {
      faculties: this.facultet,
      session_id: this.session_id,
      api_token: this.api_token
    }
    this.postService.getBranch(data).subscribe(data => {
      this.branchList = data
      this.branch = "Branch"
    },error => {
      console.log(error)
    })
  }
  branchValue(val){
    console.log(this.branch)
  }
}
