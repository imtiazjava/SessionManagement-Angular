import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable,of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 name:string;
  constructor(private route:Router) { }

  setToken(token:string):void{
      localStorage.setItem('token',token);
  }
  getToken():string|null{
          return localStorage.getItem('token');
  }

  isLoggedIn(){
    return this.getToken()==null;
  }
  getName(){
    return "IMTIAZ";
  }
  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['login']);
  }
  loginA(email:any,password:any):Observable<any>{
     if(email=='admin@gmail.com' && password=='admin123'){
       this.setToken('abc');
       return of({name:this.getName(),email:'admin@gmail.com'});
     }
     return throwError(new Error("Failed to login"));
  }
}
