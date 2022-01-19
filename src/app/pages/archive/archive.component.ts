import { Component, OnInit } from '@angular/core';
import { EVENTS } from 'src/app/data/data';
import { Event } from "src/app/interfaces/class";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor() { }

  events:Event[] = EVENTS


  ngOnInit(): void {
  }

}
