import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from '../player.service';
import { GuessService } from '../guess.service';
@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
    constructor(private playerService: PlayerService, public guessService: GuessService) {}

    sentencePlayerOne: string = 'Player 1: enter a value between 1 and 100 to be guessed';
    sentencePlayerTwo: string = 'Player 2: enter a value between 1 and 100 to be guessed';
    isPlayerOne: boolean = true;
    counter: number = 0;
    rateControl: FormControl = new FormControl('', [Validators.min(1), Validators.max(100)]);
    distance?: number;

    ngOnInit(): void {}

    onSelect(n: string): void {
        if (this.isPlayerOne) {
            this.isPlayerOne = false;
            this.playerService.add(1, Number(n));
            this.rateControl.reset();
        } else if (this.playerService.players.length < 2) {
            this.playerService.add(2, Number(n));
            this.distance = this.getDistance();
            this.counter++;
            this.setGuessService(Number(n), this.counter - 1, this.distance);
            this.rateControl.reset();
        } else if (this.playerService.players.length == 2 && this.getDistance() != 0) {
            this.playerService.setPlayerTwoNumber(Number(n));
            this.distance = this.getDistance();
            this.counter++;
            this.setGuessService(Number(n), this.counter - 1, this.distance);
            this.rateControl.reset();
        }
        else {
            this.rateControl.reset();
        }
    }

    getDistance(): number {
        const playerOneNumber: number = this.playerService.getPlayerOneNumber();
        const playerTwoNumber: number = this.playerService.getPlayerTwoNumber()
        return Math.abs(playerOneNumber - playerTwoNumber)
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
        this.distance = -1;
    }

    setGuessService(guessNumber: number, counter: number, distance: number): void {
        this.guessService.setGuessNumber(guessNumber, counter);
        this.guessService.setDistanceRange(distance, counter);
        this.guessService.setImgUrl(distance, counter);
        this.guessService.addDeviation(distance);
    }
}
