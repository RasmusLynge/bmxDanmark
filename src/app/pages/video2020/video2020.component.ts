import { Component, OnInit } from '@angular/core';
import { VVK2020 } from 'src/app/data/data';
import { Video } from 'src/app/interfaces/class';

@Component({
  selector: 'app-video2020',
  templateUrl: './video2020.component.html',
  styleUrls: ['./video2020.component.scss']
})
export class Video2020Component implements OnInit {

  constructor() { }

  videos: Video[] = VVK2020;

  ngOnInit(): void {
  }

}
