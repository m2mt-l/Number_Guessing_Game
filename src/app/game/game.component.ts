import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Player } from '../player';
import { PlayerService } from '../player.service';
@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
    constructor(private playerService: PlayerService) {}

    sentencePlayerOne: string = 'Player one enter a value between 1 and 100 to be guessed';
    sentencePlayerTwo: string = 'Player two enter a value between 1 and 100 to be guessed';
    isPlayerOne: boolean = true;
    counter: number = 1;
    rateControl: FormControl = new FormControl('', [Validators.min(1), Validators.max(100)]);
    playerOneNumber?: number;
    playerTwoNumber?: number;

    ngOnInit(): void {}

    onSelect(n: string): void {
        if (this.isPlayerOne) {
            this.isPlayerOne = false;
            this.playerService.add(1, Number(n));
            this.playerOneNumber = this.playerService.getPlayerOneNumber();
            this.rateControl.reset();
            
        } else if(this.playerService.players.length < 2){
            this.playerService.add(2, Number(n));
            this.playerTwoNumber = this.playerService.getPlayerTwoNumber();
            this.counter++;
            this.rateControl.reset();
        } else if(this.playerService.players.length == 2){
            this.playerService.setPlayerTwoNumber(Number(n));
            this.playerTwoNumber = this.playerService.getPlayerTwoNumber();
            this.counter++;
            this.rateControl.reset();
        }
        console.log(this.playerService.players)
    }

    isValidNumber(n: string): boolean {
        let changedN = Number(n);
        return changedN > 0 && changedN <= 100;
    }
}
