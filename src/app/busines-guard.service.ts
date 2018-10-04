import { CanActivate } from "@angular/router";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class BusinesGuardService implements CanActivate{
  constructor(private router: Router){}
  canActivate(): boolean {
    let token = localStorage.getItem('Authorization')
    let role = localStorage.getItem('role')
    if (!token && role!=="Busines") {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
