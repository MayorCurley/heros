import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeros(): Observable<Hero[]> {
    console.log('HeroService.getHeros(): message service add method');
    this.messageService.add('HeroService: fetched heros');
    return of(HEROS);
  }
}
