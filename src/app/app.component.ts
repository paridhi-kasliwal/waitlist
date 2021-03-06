import { Component, AfterViewInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { HelperService } from './shared/services/helper.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'waitlist';
  unsubscribeAll = new Subject();
  isLoading = false;

  constructor(private _helperService: HelperService) {}

  ngAfterViewInit() {
    this._helperService.loadingPropertyChanged$
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe(
        showLoader => {
          this.isLoading = showLoader;
        }
      );
  }
}
