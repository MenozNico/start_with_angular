import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isClicked: boolean = true;

  users: any;

  counter: number = 0;

  hide() {
    this.isClicked = false;
  }

  onCount() {
    return this.counter += 1;
  }

  constructor(private userService: UserService) { }
  ngOnInit() {
    this.userService.getUsers().subscribe(
      response => {
        this.users = response;
      }
    )
  }

}


