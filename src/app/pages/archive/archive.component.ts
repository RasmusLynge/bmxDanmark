import { Component, OnInit } from '@angular/core';
import { EVENTS } from 'src/app/data/data';
import { Event, Video } from "src/app/interfaces/class";


interface Food {
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


  sorting: Food[] = [
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
    this.videos = this.filterList(this.allVideos, "*" + searchStr + "*")

  }

  filterList(items: Video[], str: string) {
    const filterBy = items.filter(
      item => {
        if (new RegExp('^' + str.toLowerCase().replace(/\*/g, '.*') + '$').test(item.name.toLowerCase())) {
          return true
        } else if (new RegExp('^' + str.toLowerCase().replace(/\*/g, '.*') + '$').test(item.desc.toLowerCase())) {
          return true
        }  else if (new RegExp('^' + str.toLowerCase().replace(/\*/g, '.*') + '$').test(item.date+"")) {
          return true
        } 
        
        
        
        else return false
      }
    );
    console.log(filterBy)
    return filterBy
  }

}
