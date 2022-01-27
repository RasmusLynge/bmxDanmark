import { Component, OnInit } from '@angular/core';
import { EVENTS } from 'src/app/data/data';
import { Event, Video } from "src/app/interfaces/class";


interface SortValue {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor() { }


  sorting: SortValue[] = [
    { value: 'old', viewValue: 'Ældste først' },
    { value: 'new', viewValue: 'Nyeste først' },
  ];

  allVideos: Video[] = [];
  videos: Video[] = [];


  ngOnInit(): void {

    var ALLVIDEOS: Video[] = []

    EVENTS.forEach(event => {
      event.videos.forEach(video => {
        ALLVIDEOS.push(video)
      })
    });

    this.allVideos = ALLVIDEOS;
    this.videos = ALLVIDEOS;
    this.videos.sort((a, b) => a.date?.getTime() - b.date?.getTime())
  }

  onSearchChange(searchStr) {
    this.videos = this.filterVideos(this.allVideos, "*" + searchStr + "*")
  }

  filterVideos(items: Video[], searchStr: string) {
    const filterBy = items.filter(
      item => {
        // Title
        if (new RegExp('^' + searchStr.toLowerCase().replace(/\*/g, '.*') + '$').test(item.name.toLowerCase())) {
          return true
        } // Description
        else if (new RegExp('^' + searchStr.toLowerCase().replace(/\*/g, '.*') + '$').test(item.desc.toLowerCase())) {
          return true
        } // Date
        else if (new RegExp('^' + searchStr.toLowerCase().replace(/\*/g, '.*') + '$').test(item.date + "")) {
          return true
        } // Riders
        else if (this.filterLists(searchStr, item.riders)) {
          return true
        } // Tags
        else if (this.filterLists(searchStr, item.tags)) {
          return true
        }
        else return false
      }
    );
    return filterBy
  }


  filterLists(searchStr: string, params: string[]): boolean {
    console.log("serach", searchStr, params)
    var matches = false;
    params.filter(
      item => {

        if (new RegExp('^' + searchStr.toLowerCase().replace(/\*/g, '.*') + '$').test(item.toLowerCase())) {
          matches = true
        }
      }
    )
    return matches;
  }

  sort(value: string) {
    if (value === 'old') this.videos.sort((a, b) => a.date?.getTime() - b.date?.getTime())
    if (value === 'new') this.videos.sort((a, b) => b.date?.getTime() - a.date?.getTime())
  }

}
