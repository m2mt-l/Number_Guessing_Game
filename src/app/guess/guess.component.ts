import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { GuessService } from '../guess.service';
import { Guess } from '../guess';
@Component({
    selector: 'app-guess',
    templateUrl: './guess.component.html',
    styleUrls: ['./guess.component.css'],
})
export class GuessComponent implements OnInit {
    constructor(public playerService: PlayerService, public guessService: GuessService) {}

    ngOnInit(): void {
        this.initialGuess();
    }

    initialGuess(): void {
        this.guessService.initialGuessServices();
    }

    getGuessNumber(guess: Guess): string {
        const guessNumber: number = guess.guessNumber;
        return guessNumber === -1 ? '?' : String(guessNumber);
    }
}
