import { Component, OnInit, AfterViewInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { HelperService } from '../../services/helper.service';
import { Constants } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, AfterViewInit {
  msg = Constants.timer;
  enddate = '2020-04-19';
  _diff: number;
  _days: number;
  _hours: number;
  _minutes: number;
  _seconds: number;

  constructor(private _helperService: HelperService) { }

  ngOnInit() {
    this._helperService.showLoader(true);
    interval(1000).pipe(
      map((x) => {
        this._diff = Date.parse(this.enddate) - Date.parse(new Date().toString());
      })).subscribe((x) => {
        this._days = this.getDays(this._diff);
        this._hours = this.getHours(this._diff);
        this._minutes = this.getMinutes(this._diff);
        this._seconds = this.getSeconds(this._diff);
      });
  }

  ngAfterViewInit() {
    this._helperService.showLoader(false);
  }

  getDays(t) {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }

  getHours(t) {
    return Math.floor((t / (1000 * 60 * 60)) % 24);
  }

  getMinutes(t) {
    return Math.floor((t / 1000 / 60) % 60);
  }

  getSeconds(t) {
    return Math.floor((t / 1000) % 60);
  }
}
