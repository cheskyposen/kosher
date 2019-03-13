import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /*title = 'kosher';*/
  cardTitle = 'This is a simple card';
  cardSubtitle = 'Dog Breed';
  cardBody = 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.';

  ngOnInit(): void {
    this.cardTitle = 'WORD!!!';
  }
}
