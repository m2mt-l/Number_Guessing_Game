import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { GuessService } from '../guess.service';
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

    distanceHashmap: { [key: string]: string } = {
        perfect: '0',
        fine: '1-2',
        sad: '3-4',
        upset: '5-9',
        mad: '10-24',
        angry: '25-49',
        furious: '50+',
    };

    ngOnInit(): void {
        this.initialGuess();
    }

    checkGuessNumber(): string {
        const distance: number = this.distance != undefined ? this.distance : -1;
        if (distance == 0) {
            return 'perfect';
        } else if (distance >= 1 && distance <= 2) {
            return 'fine';
        } else if (distance >= 3 && distance <= 4) {
            return 'sad';
        } else if (distance >= 5 && distance <= 9) {
            return 'upset';
        } else if (distance >= 10 && distance <= 24) {
            return 'mad';
        } else if (distance >= 25 && distance <= 49) {
            return 'angry';
        } else {
            return 'furious';
        }
    }

    initialGuess(): void {
        this.guessService.initialGuessServices();
    }
}
