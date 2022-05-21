import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
@Component({
  selector: 'app-guess',
  templateUrl: './guess.component.html',
  styleUrls: ['./guess.component.css']
})
export class GuessComponent implements OnInit {

  constructor(public playerService: PlayerService) { }

  ngOnInit(): void {
  }
  
}
