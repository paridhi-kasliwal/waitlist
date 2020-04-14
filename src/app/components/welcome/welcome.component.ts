import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/constants/constants';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WelcomeService } from 'src/app/shared/services/welcome.service';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  msg = Constants.welcome_screen;
  subscribeForm: FormGroup;
  referralId: any;

  constructor(private router: Router, private fb: FormBuilder, private _welcomeService: WelcomeService, private _helperService: HelperService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm();
    this.route.queryParams
    .subscribe(params => {
      if(params.id) {
        this.referralId = params.id;
      }
    });
  }

  createForm() {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubscribe() {
    if(this.subscribeForm.valid) {
      const obj = {
        email: this.subscribeForm.value.email,
        referralId: this.referralId
      }
      this._welcomeService.onSubscribe(obj)
      .subscribe(
        (data) => {
          this._helperService.setStorage('userInfo', JSON.stringify(data));
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

  deleteUser() {
    this._welcomeService.deleteUsers()
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
