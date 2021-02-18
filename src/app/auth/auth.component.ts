import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  title: String = '';
  authType: String = '';
  authForm: FormGroup;
  isSubmitting = false;

 constructor(private route: ActivatedRoute,private userService: UserService,
    private router: Router,private fb: FormBuilder) { 
      this.authForm = this.fb.group({
        'email': ['', [Validators.required,Validators.email]],
        'password': ['', [Validators.required, Validators.minLength(6)]]
      });

    }

    // convenience getter for easy access to form fields
    get f() { return this.authForm.controls; }


  ngOnInit(): void {
    this.route.url.subscribe(data => {
      this.authType = data[data.length - 1].path;

      this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';

      if (this.authType === 'register') {
        this.authForm.addControl('name', new FormControl('', Validators.required));
        this.authForm.addControl('gender', new FormControl('', Validators.required));
        this.authForm.addControl('dob', new FormControl('', Validators.required));
      }

    })
  }

  gender:any;
  changeGender(e:any) {
    this.gender = e.target.value;
  }

  submitForm() {

    this.isSubmitting = true;
    const credentials = this.authForm.value;
    credentials['gender'] = this.gender;

    this.userService
    .attemptAuth(this.authType, credentials)
    .subscribe(
      data => this.router.navigateByUrl('/country'),
      err => {
        this.isSubmitting = false;
      }
    );      
  }

}
