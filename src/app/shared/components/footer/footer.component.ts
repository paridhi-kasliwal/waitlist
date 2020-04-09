import { Component, OnInit } from '@angular/core';
import { Constants } from '../../constants/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerText = Constants.footer;

  constructor() { }

  ngOnInit(): void {
  }

}
