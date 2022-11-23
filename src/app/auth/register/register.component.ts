import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { AuthenticationService } from '../../common/services/autentication.service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isLoading = false;

  constructor(
    private authenticationService: AuthenticationService,
    private sweetAlert: NbToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email : new FormControl('' , [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        control => {
          const password = control.parent?.get('password').value;
          const rePassword = control.value;

          return rePassword === password ? null : { notMatch: true };
        }]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        control => {
          const password = control.parent?.get('password').value;
          const rePassword = control.value;

          return rePassword === password ? null : { notMatch: true };
        }]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    });

    // this.checkAuth();
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  register() {
    // this.authenticationService.signup(
    //   this.email.value,
    //   this.password.value,
    //   this.confirmPassword.value,
    //   this.firstName.value,
    //   this.lastName.value,
    // ).subscribe(res => {
    //   if (res && res._id) {
    //     this.router.navigate([URL_LOGIN]);
    //   }
    // });
  }

}
