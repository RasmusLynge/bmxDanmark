import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Video } from '../interfaces/class';
import { VideoDialogComponent } from '../video-dialog/video-dialog.component';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() videos: Video[] = [];

  ngOnInit(): void {
  }


  
  getVideoId(videoUrl: string): string {
    if(videoUrl.includes("youtube")) {
      return "https://img.youtube.com/vi/"+videoUrl.split("/").pop()+ "/mqdefault.jpg"
    } else if(videoUrl.includes("vimeo")) {
      return "https://i.vimeocdn.com/video/"+videoUrl.split("/").pop()+ "_295x166"
    }

    return videoUrl;
  }

  chooseDialogHeight(): string {
    const maxHeight = 800
    if (window.innerHeight-20 > maxHeight) return "800px"
    else return window.innerHeight - 20 + "px"
  }

  openVideoDialog(video: Video) {
    const dialogRef = this.dialog.open(VideoDialogComponent, {
      panelClass: 'app-full-bleed-dialog',
      width: "1200px",
      height: this.chooseDialogHeight(),
      autoFocus: false,
      data: video
      
    });
  }

}
