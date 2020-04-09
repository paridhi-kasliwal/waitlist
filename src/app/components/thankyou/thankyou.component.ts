import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  msg = Constants.thankyou_screen;
  referral_link: string;

  constructor() { }

  ngOnInit(): void {
  }

  openLeaderBoard() {
    console.log('openLeaderBoard');
  }
}
