import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { GuessService } from '../guess.service';
@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
    constructor(private playerService: PlayerService, public guessService: GuessService) {}

    sentencePlayerOne: string = 'Player one enter a value between 1 and 100 to be guessed';
    sentencePlayerTwo: string = 'Player two enter a value between 1 and 100 to be guessed';
    isPlayerOne: boolean = true;
    counter: number = 0;
    rateControl: FormControl = new FormControl('', [Validators.min(1), Validators.max(100)]);
    playerOneNumber?: number;
    playerTwoNumber?: number;
    distance?: number;

    ngOnInit(): void {}

    onSelect(n: string): void {
        if (this.isPlayerOne) {
            this.isPlayerOne = false;
            this.playerService.add(1, Number(n));
            this.playerOneNumber = this.playerService.getPlayerOneNumber();
            this.rateControl.reset();
        } else if (this.playerService.players.length < 2) {
            this.playerService.add(2, Number(n));
            this.playerTwoNumber = this.playerService.getPlayerTwoNumber();
            this.distance = this.getDistance();
            this.counter++;
            this.setGuessService(Number(n), this.counter - 1, this.distance);
            this.rateControl.reset();
        } else if (this.playerService.players.length == 2 && this.getDistance() != 0) {
            this.playerService.setPlayerTwoNumber(Number(n));
            this.playerTwoNumber = this.playerService.getPlayerTwoNumber();
            this.distance = this.getDistance();
            this.counter++;
            this.setGuessService(Number(n), this.counter - 1, this.distance);
            this.rateControl.reset();
        }
        console.log(this.playerService.players);
        console.log(this.counter);
    }

    getDistance(): number {
        return this.playerOneNumber != undefined && this.playerTwoNumber != undefined
            ? Math.abs(this.playerOneNumber - this.playerTwoNumber)
            : -1;
    }

    isValidNumber(n: string): boolean {
        let changedN = Number(n);
        return changedN > 0 && changedN <= 100;
    }

    resetGame(): void {
        this.playerService.clear();
        this.guessService.clear();
        this.guessService.initialGuessServices();
        this.isPlayerOne = true;
        this.counter = 0;
        this.playerOneNumber = -1;
        this.playerTwoNumber = -1;
        this.distance = -1;
    }

    setGuessService(guessNumber: number, counter: number, distance: number): void {
        this.guessService.setGuessNumber(guessNumber, counter);
        this.guessService.setDistanceRange(distance, counter);
        this.guessService.setImgUrl(distance, counter);
        this.guessService.addDeviation(distance);
    }
}
