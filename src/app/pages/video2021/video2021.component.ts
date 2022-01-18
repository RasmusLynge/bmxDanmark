import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/interfaces/class';
import {VVK2021} from '../../data/data'

@Component({
  selector: 'app-video2021',
  templateUrl: './video2021.component.html',
  styleUrls: ['./video2021.component.scss']
})
export class Video2021Component implements OnInit {

  constructor() { }

  videos: Video[] = VVK2021;

  ngOnInit(): void {
  }

}
