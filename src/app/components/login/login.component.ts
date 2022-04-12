import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 myform:FormGroup;
 
 constructor(private route:Router,private service:AuthService) {
   
  }

  ngOnInit() {
    this.myform=new FormGroup({
      email:new FormControl("",[Validators.required]),
      pwd:new FormControl("",[Validators.required])
     });
  }

  loginApp(){
   if(this.myform.valid){
    this.service.loginA(this.myform.value.email,this.myform.value.pwd).subscribe((res)=>{
        alert('success')
        this.route.navigate(['dashboard']);
         
    },(err:Error)=>{
       alert(err.message)
    })
   }
    
    

  }

}
