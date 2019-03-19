import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  logs: string[];
  constructor() {
    this.logs = [];
  }

  log(obj: string) {
    this.logs.push('Object of class ' + obj + ' has been constructed!');
    console.log(this.logs);
  }
}
