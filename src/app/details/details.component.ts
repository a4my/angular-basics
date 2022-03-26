import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  displayDetails = false;
  clicks: string[] = [];
  timestamp = Date();

  constructor() {}

  ngOnInit(): void {}

  onDisplayClick() {
    this.displayDetails = !this.displayDetails;
    this.clicks.push(this.timestamp);
  }

  getColor() {
    return this.clicks.length > 3 ? 'lightskyblue' : 'transparent';
  }
}
