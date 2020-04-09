import { Component, OnInit } from '@angular/core';
import { Constants } from '../../constants/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerText = Constants.header;

  constructor() { }

  ngOnInit(): void {
  }

}
