import { Component } from '@angular/core';
import {Cols, User} from "./app.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table';
  formatedCollection: any;
  //this users can be a collection and when you subscribe you should select which prop you need to show and append to this users array, I mean just values
  users: any;
  cols: any;
  constructor() {
    this.cols = ['Name', 'Email', 'Phone'];
    this.users = [
      ['Raul', 'raul@uab.com', '43452211'],
      ['Karla', 'karla@uab.com', '43452211']
    ]

    this.formatedCollection = [
      {Cols: this.cols},
      {Fields: this.users}
    ]
  }
}
