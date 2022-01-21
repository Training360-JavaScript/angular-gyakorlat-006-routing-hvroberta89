import { Injectable } from '@angular/core';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  eventList: Event[]=[
    {
      name: 'Budapest Park Jégvilág',
      date: '2022. november 2.',
      time: '17:00',
      location: {
        address: 'Budapest Park',
        city: 'Budapest',
        country: 'Hungary'
      }
    },
    {
      name: '25th World Scout Jamboree',
      date: '2023. august 1-12.',
      time: '08:00',
      location: {
        address: 'Saemangeum',
        city: 'Buan-gun',
        country: 'South Korea'
      }
    },
    {
      name: 'Társasjátékok Ünnepe',
      date: '2022. november 12-13.',
      time: '9:00',
      location: {
        address: 'Könyves Kálmán krt. 12-14',
        city: 'Budapest',
        country: 'Hungary'
      }
    }
  ];

  getAll(): Event[] {
    return this.eventList;
  }
}
