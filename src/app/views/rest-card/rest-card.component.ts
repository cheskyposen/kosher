import { Component, Input, OnInit } from '@angular/core';
import {DUMMIES} from '../../models/Dummies';

@Component({
  selector: 'app-rest-card',
  templateUrl: './rest-card.component.html',
  styleUrls: ['./rest-card.component.scss']
})
export class RestCardComponent implements OnInit {
  @Input() restaurants = DUMMIES;
  now = new Date();

  constructor() {

  }

  ngOnInit() {
  }

}
