import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../player';
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
    //offBy = Guess.distance[this.checkGuessNumber()];
    @Input() playerOneNumber?: number;
    @Input() playerTwoNumber?: number;
    @Input() distance?: number;
    @Input() counter?: number;

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
