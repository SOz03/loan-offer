import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-register',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
})
export class RegComponent implements OnInit {
  form: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) {
    this.form = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit(): void {}

  onSubmit(event: Event): void {
    event.preventDefault();

    const { username, email, password } = this.form.value;

    this.authService.register({ username, email, password }).subscribe({
      complete: () => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: (err) => {
        this.errorMessage = err.message || '';
        this.isSignUpFailed = true;
      },
    });
  }
}
