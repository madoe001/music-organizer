import { TrackService } from './../shared/track.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from 'src/app/core/server-mock/track';

@Component({
  selector: 'app-music-overview-list',
  templateUrl: './music-overview-list.component.html',
  styleUrls: ['./music-overview-list.component.css']
})
export class MusicOverviewListComponent implements OnInit {

  tracks$: Observable<Track>;

  constructor(private trackService: TrackService) { }

  ngOnInit() {
    this.tracks$ = this.trackService.getTracks();
  }

}
