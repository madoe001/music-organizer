import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Track } from 'src/app/core/server-mock/track';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private stackUrl = 'api/tracks';

  constructor(private httpClient: HttpClient) {}

  getTracks(): Observable<Track> {
    return this.httpClient.get<Track>(this.stackUrl);
  }
}
