import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  /*
  {
  "firstName": "Tom",
  "lastName": "Brady",
  "team": "New England Patriots",
  "position": "QB",
  "overall": "97", 
  "awareness": "99", 
  "speed": "60", 
  "acceleration": "66", 
  "agility": "70", 
  "strength": "64"
  },
  {
  "firstName": "Patrick",
  "lastName": "Mahomes",
  "team": "Kansas City Chiefs",
  "position": "QB",
  "overall": "98", 
  "awareness": "94", 
  "speed": "81", 
  "acceleration": "87", 
  "agility": "88", 
  "strength": "69"
  },
  {
  "firstName": "Ezekiel",
  "lastName":"Elliott",
  "team":"Dallas Cowboys",
  "position":"HB",
  "":"94","98","90","91","95","81
  },
  {
  "firstName": "Stephon",
  "lastName":"Gilmore",
  "team":"New England Patriots",
  "position":"CB",
  "":"94","95","91","94","94","62
  },
  {
  "firstName": "Tyreek",
  "lastName":"Hill",
  "team":"Kansas City Chiefs",
  "position":"WR",
  "":"94","85","99","99","98","64
  }
  */

  player: Player = {
      firstName: "Patrick",
      lastName: "Mahomes",
      team: "Kansas City Chiefs",
      position: "QB",
      overall: 98, 
      awareness: 94, 
      speed: 81, 
      acceleration: 87, 
      agility: 88, 
      strength: 69
  };

  constructor() { }

  ngOnInit() {
  }

}
