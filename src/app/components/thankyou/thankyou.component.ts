import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/shared/constants/constants';
import { HelperService } from 'src/app/shared/services/helper.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeService } from 'src/app/shared/services/welcome.service';

declare var particlesJS: any;

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  msg = Constants.thankyou_screen;
  referral_link: string;
  user_detail: any;
  current_position: any;
  leaders: any;

  constructor(private _helperService: HelperService, private modalService: NgbModal, private _welcomeService: WelcomeService) { }

  ngOnInit(): void {
    particlesJS.load('particles-js', 'assets/particlesjs-config.json', () => {});
    this.user_detail = this._helperService.getStorage('userInfo');
    this.referral_link = 'localhost:4200?id=' + this.user_detail.result.result._id;
    this.current_position = this.user_detail.result.result.position;
    this.getLeaders();
  }

  copyLink(val) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  openLeaderBoard(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  getLeaders() {
    this._welcomeService.getLeader()
    .subscribe(
      (data) => {
        this.leaders = data;
      },
      (error) => {
        console.log('error');
      }
    );
  }
}
