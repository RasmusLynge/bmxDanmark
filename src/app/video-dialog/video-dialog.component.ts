import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Video } from '../interfaces/class';

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.scss']
})
export class VideoDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public video: Video, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  updateVideo(url: string): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getId(str: string): string {
    return str.split("/").pop()
  }

}
