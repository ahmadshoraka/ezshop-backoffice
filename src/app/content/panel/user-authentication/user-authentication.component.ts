import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthenticationService } from './shared/user-authentication.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.scss']
})
export class UserAuthenticationComponent implements OnInit {

  authForm!: FormGroup;
  spinner: boolean = false;

  constructor(
    private router: Router,
    private userAuthenticationService: UserAuthenticationService
  ) { }

  ngOnInit(): void {
    this.createauthForm();
  }

  createauthForm() {
    this.authForm = new FormGroup({
      nationalCode: new FormControl(),
      year: new FormControl(),
      month: new FormControl(),
      day: new FormControl(),
    });
  }

  add() {
    const formData = this.authForm.getRawValue();
    const birthdate = `${formData.year}` + `${formData.month}` + `${formData.day}`;
    const nationalCode = formData.nationalCode;

    this.userAuthenticationService.addUserProfile(birthdate, nationalCode).pipe(
      untilDestroyed(this)
    ).subscribe({
      next: (value) => {
        this.return();

      }, error(err) {
        console.log(err);
      }, complete() {

      },
    })

  }

  return() {
    this.router.navigate([`./panel/dashboard`])
  }
}
