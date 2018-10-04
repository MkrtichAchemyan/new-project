import {AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  value;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let arr = window.location.href.split('/')
    this.value = arr[arr.length-1]
    console.log(this.value,"--------------------------------");
    let token = localStorage.getItem('Authorization');
    let role = localStorage.getItem('role');
        if (token) {
          switch (role) {
            case 'Rector':
              if (this.value !== 'students' && this.value !== 'lecturers') {
                console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq")
                this.value=""
              }
              this.router.navigate([`/educationcenter/${this.value}`]);
              break;
            case 'Busines':
              this.router.navigate(['/busines']);
              break;
          }
        }
        else {
          this.router.navigate(['/']);
        }
  }
}

