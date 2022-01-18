import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

import { EVENTS } from '../data/data';
import { Event, Video } from "../interfaces/class";
import {MatDialog} from '@angular/material/dialog';
import { VideoDialogComponent } from '../video-dialog/video-dialog.component';


export interface nav {
  name: string;
  link: string;
}

const NAVLIST: nav[] = [
  {name: "Hjem", link: "/"},
  {name: "Vinter Video Konkurrence 2021", link: "/VVK2021"},
  {name: "Vinter Video Konkurrence 2020", link: "/VVK2020"},
  {name: "Video Arkiv", link: "/arkiv"},
  {name: "Kontakt", link: "/kontakt"},
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  navlist: nav[] = NAVLIST;


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  
  ngOnInit(): void {
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}
