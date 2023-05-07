import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { Consts } from '../shared/models/const.model';
import { AuthService } from './services/auth.service';
import { ValidationCode } from './models/validation-code.model';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  phoneNumber!: string;
  password!: string;
  loading!: boolean;
  error!: boolean;
  validationMessage?: string;
  errorMessage!: string;
  counter!: number;
  timer!: Subscription;
  getValidationCode!: ValidationCode;

  disabled = true;
  spinner = false;
  phoneNumberPattern = Consts.Regex.phoneNumberMask;
  mood = 'register' || 'verify';

  constructor(
    private authenticationService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['./panel']);
    }

    this.counter = 120;
    this.timer = interval(1000).subscribe((x => {
      if (this.counter < 1) {
        this.validationMessage = 'زمان اعتبار کد تایید به پایان رسید';
      } else {
        this.counter--;
      }
    }));
  }

  onValidateNumber() {
    this.disabled = true;
    this.error = false;

    if (this.mood === 'register') {

      this.phoneNumber.length === 11 ? this.disabled = false : this.disabled = true;
      return;
    }
    this.disabled = true;
    this.spinner = true;
    this.password.length === 0 ? this.spinner = false : null;
    if (this.password.length === 4) {
      this.loading = true;
      this.authenticationService.loginPassword(this.phoneNumber, this.password).subscribe(
        data => {
          this.router.navigateByUrl('/panel');
          this.error = false;
          this.loading = false;
          this.spinner = false;
          this.disabled = false;
        },
        error => {
          this.error = true;
          this.validationMessage = error.error.message;
          this.errorMessage = error.error.message;
          this.loading = false;
          this.disabled = true;
          this.spinner = false;
        },
      );
    }
  }

  verifications(mood: string) {
    this.error = false;
    if (mood === 'register') {
      this.loading = true;
      this.spinner = true;
      this.disabled = true;
      this.getValidationCode = new ValidationCode();
      this.getValidationCode.phoneNumber = this.phoneNumber;
      // this.getValidationCode.browser = 'string';
      // this.getValidationCode.browserVersion = 'string';
      // this.getValidationCode.device = 'string';
      // this.getValidationCode.os = 'string';
      // this.getValidationCode.osVersion = 'string';
      this.authenticationService.loginValidation(this.getValidationCode).subscribe(
        data => {
          this.mood = 'verify';
          this.counter = 120;
          this.error = false;
        },
        error => {
          this.error = true;
          this.errorMessage = error.error.message;
          // this.onError(error);
        },
        () => {
          this.loading = false;
          this.spinner = false;
        });
    }
  }

  submit() {
    this.error = false;

    if (this.password.length === 4) {
      this.loading = true;

      this.authenticationService.loginPassword(this.phoneNumber, this.password).subscribe(
        data => {
          this.loading = false;
          this.error = false;
          this.router.navigateByUrl('/panel');
        },
        error => {
          this.error = true;
          this.validationMessage = error.error.message;
          this.errorMessage = error.error.message;
          this.loading = false;
        },
      );
    }
  }

  editPhone() {
    this.phoneNumber = '';
    this.password = '';
    this.mood = 'register';
    this.disabled = true;
  }

  onResendClick() {
    this.loading = true;
    this.error = false;
    this.getValidationCode = new ValidationCode();
    this.getValidationCode.phoneNumber = this.phoneNumber;
    // this.getValidationCode.browser = 'string';
    // this.getValidationCode.browserVersion = 'string';
    // this.getValidationCode.device = 'string';
    // this.getValidationCode.os = 'string';
    // this.getValidationCode.osVersion = 'string';
    this.authenticationService.loginValidation(this.getValidationCode).subscribe(
      data => {
        this.counter = 120;
        this.validationMessage = undefined;
        this.error = false;
        //  this.ezpToastService.show('کد ورود برای شما ارسال شد ');
      },
      error => {
        this.error = true;
        this.validationMessage = 'خطا در ارسال کد';
        this.errorMessage = error.error.message;
      },
      () => {
        this.loading = false;
      },
    );
  }

}
