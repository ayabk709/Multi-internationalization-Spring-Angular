import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  formLogin! : FormGroup;

  constructor(private db:FormBuilder, private authService:AuthService,private router:Router) {
  }

  ngOnInit() {
    this.formLogin = this.db.group({
      username: this.db.control(''),
      password: this.db.control('')

    });
  }
  handleLogin(){
let username= this.formLogin.value.username;
let password= this.formLogin.value.password;
this.authService.login(username,password).subscribe({
  next:(data)=>{
    this.authService.loadProfile(data);
this.router.navigateByUrl('/admin');
  },
  error:(error)=>{
    console.log(error);
  }
})
  }
}

