import {Component, OnInit} from '@angular/core';
import {DUMMIES} from './models/Dummies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  restaurants = DUMMIES;
  /*title = 'kosher';*/

  ngOnInit(): void {
    /*this.cardTitle = 'WORD!!!';*/
  }
}
