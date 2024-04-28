import {ErrorStateMatcher} from "@angular/material/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {Component, OnInit} from "@angular/core";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatSnackBar} from "@angular/material/snack-bar";
import {LoginModel} from "@infrastructure/auth/login.model";
import {AuthService} from "@infrastructure/auth/auth.service";
import {TokenService} from "@infrastructure/auth/token.service";
import {Router} from "@angular/router";


export class ErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl, form: FormGroupDirective | NgForm): boolean {
    const isSubmitted = form && form.submitted;
    return (control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatButton,
    MatError,
    MatProgressBar
  ],
  templateUrl: '../../presentation/login.component.html',
  styleUrl: '../../presentation/login.component.scss'
})
export class LoginComponent implements OnInit {

  isLoading: boolean = false;
  errorMatcher: ErrorMatcher = new ErrorMatcher();
  loginModel: LoginModel = new LoginModel();

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private notification: MatSnackBar,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get userLoginFormControl(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.loginModel = new LoginModel(this.loginForm.value);
      this.authService.login(this.loginModel).subscribe({
        complete: () => {
          this.isLoading = false;
        },
        error: (error) => {
          this.isLoading = false;
          this.notification.open(`Login failed \n ${error.message}`, 'Dismiss', {
            duration: 20000,
          });
        },
        next: (response) => {
          if (response && response.token) {
            this.router.navigate(['/home']);
            this.tokenService.saveToken(response.token);
            this.notification.open(`Login successful`, 'Dismiss', {
              duration: 20000,
            });
          } else {
            // handle this response in backend
            this.notification.open(`Wrong Username or Password`, 'Dismiss', {
              duration: 20000,
            });
          }
        }
      });
    }
  }

}
