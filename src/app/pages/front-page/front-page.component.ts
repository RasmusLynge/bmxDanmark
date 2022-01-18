import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EVENTS } from '../../data/data';
import { Event, Video } from "../../interfaces/class";
import { VideoDialogComponent } from '../../video-dialog/video-dialog.component';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {

  constructor() { }



  events: Event[] = [];



  ngOnInit(): void {
    this.events = EVENTS;
  }

  


}
