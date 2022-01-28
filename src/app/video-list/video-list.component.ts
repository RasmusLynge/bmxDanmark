import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Video } from '../interfaces/class';
import { VimeoService } from '../services/vimeo.service';
import { VideoDialogComponent } from '../video-dialog/video-dialog.component';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  constructor(public dialog: MatDialog, private vimeoService: VimeoService) { }



  @Input() videos: Video[] = [];
  vimeoThumbnails: Map<string, string> = new Map<string, string>([])


  ngOnInit(): void {

    this.videos.forEach(video => {
      if (video.videoUrl.includes('vimeo')) {
        this.vimeoService.getVimeoVideoThumbnailUrl(video.videoUrl.split("/").pop()).subscribe(res => {
          this.vimeoThumbnails.set(video.videoUrl, res)
        })
      }
    });
  }


  getYoutubeThumbnailUrl(videoUrl: string): string {
    return "https://img.youtube.com/vi/" + videoUrl.split("/").pop() + "/mqdefault.jpg"
  }


  chooseDialogHeight(): string {
    const maxHeight = 800
    if (window.innerHeight - 20 > maxHeight) return "800px"
    else return window.innerHeight - 20 + "px"
  }

  chooseDialogWidth(): string {
    return window.innerWidth +100 + 'px'
    
  }

  openVideoDialog(video: Video) {
    const dialogRef = this.dialog.open(VideoDialogComponent, {
      panelClass: 'app-full-bleed-dialog',
      width: this.chooseDialogWidth(),
      maxHeight: this.chooseDialogHeight(),
      autoFocus: false,
      data: video

    });
  }

  ngOnChanges(changes: any) {
  }



}
