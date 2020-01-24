import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSuccessMessage:boolean;
  serverErrorMessage:string;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const test = this.userService.postUser(form.value).subscribe(
      res =>{
        this.showSuccessMessage =true;
        setTimeout(() => this.showSuccessMessage =false,4000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422 ){
            this.serverErrorMessage = err.error.join('</br>');
        }
        else{
          this.serverErrorMessage = 'Something went wrong please Contact admin';
        }

      }
    );
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      userName: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessage = '';
  }

}
