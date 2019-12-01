
import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.css']
})
export class MainInfoComponent implements OnInit {

  @Input() user;

  @Input() counter;

  @Output() count = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
}


