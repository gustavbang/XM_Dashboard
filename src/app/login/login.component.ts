import { URL } from './../auth/auth.guard';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, 
    private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.minLength(5)] ],
        password: ['', Validators.required] 
      }
    )
  }

  onSubmit(loginForm: FormGroup) {
    if (loginForm.valid) {
      this.authService.login()
      .subscribe(result => {
        console.log("2");
        this.router.navigate([URL]);  
      });
      console.log("1");
    } else {
      console.log("Error: Fields not filled out")
    }
  }
}
