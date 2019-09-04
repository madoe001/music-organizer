import {  InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService  {

  constructor() { }

  createDb() {
    const tracks =  [
      { id: 0, title: 'Redemption Song', interpreter: 'Bob Marley' },
      { id: 0, title: 'Redemption Song', interpreter: 'Bob Marley' },
      { id: 0, title: 'Redemption Song', interpreter: 'Bob Marley' }
    ];
    return {tracks};
  }

}
