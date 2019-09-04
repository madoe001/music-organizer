import { Track } from './../../core/server-mock/track';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-music-overview-list-item]',
  templateUrl: './music-overview-list-item.component.html',
  styleUrls: ['./music-overview-list-item.component.css']
})
export class MusicOverviewListItemComponent implements OnInit {

  @Input() track: Track;

  constructor() { }

  ngOnInit() {
  }

}
