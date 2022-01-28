import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, concatMap, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VimeoService {

  constructor(
    private http: HttpClient

  ) { }


  getVimeoThumbnailImg(videoId: string): Observable<Blob> {
    return this.getVimeoVideoThumbnailUrl(videoId).pipe(
      concatMap((imageUrl) => this.getVideoThumbnail(imageUrl))
    )
  }

  getVimeoVideoThumbnailUrl(videoId): Observable<string> {
    return this.http
      .get<any>("http://vimeo.com/api/v2/video/" + videoId + ".json").pipe(
        map((res) => res[0].thumbnail_medium)
      )
  }

  getVideoThumbnail(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }




}
