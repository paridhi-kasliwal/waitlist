import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/constants/constants';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WelcomeService } from 'src/app/shared/services/welcome.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  msg = Constants.welcome_screen;
  subscribeForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private _welcomeService: WelcomeService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubscribe() {
    if(this.subscribeForm.valid) {
      let obj = {
        email: this.subscribeForm.value.email
      }
      this._welcomeService.onSubscribe(obj)
      .subscribe(
        (data) => {
          console.log('on succees', data);
          this.getUser();
          this.router.navigate(['/thankyou']);
        },
        (error) => {
          console.log('error');
        }
      );
    }
  }

  getUser() {
    console.log('***');
    this._welcomeService.getUsers()
    .subscribe(
      (data) => {
        console.log('on succees', data);
      },
      (error) => {
        console.log('error');
      }
    );
  }
}
