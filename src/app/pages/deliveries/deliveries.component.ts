import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.css']
})
export class DeliveriesComponent implements OnInit {
  lat = -33.9249;
  lng = 18.4241;

  constructor() { }

  ngOnInit(): void {
  }

}
