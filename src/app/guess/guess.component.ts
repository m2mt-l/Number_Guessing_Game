import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
@Component({
    selector: 'app-guess',
    templateUrl: './guess.component.html',
    styleUrls: ['./guess.component.css'],
})
export class GuessComponent implements OnInit {
    constructor(public playerService: PlayerService) {}
    //offBy = Guess.distance[this.checkGuessNumber()];
    @Input() playerOneNumber?: number;
    @Input() playerTwoNumber?: number;


    distanceHashmap: {[key: string]: string} = {
        perfect: "0",
        fine: "1-2",
        sad: "3-4",
        upset: "5-9",
        mad: "10-24",
        angry: "25-49",
        furious: "50+"
    }

    ngOnInit(): void { }

    getDistance(): number {
        return this.playerOneNumber != undefined && this.playerTwoNumber != undefined ? Math.abs(this.playerOneNumber - this.playerTwoNumber) : 0
    }

    checkGuessNumber(): string {
        let distance = this.getDistance();
        if (distance == 0) {
            return "perfect";
        }
        else if (distance >= 1 && distance <= 2) {
            return "fine";
        }
        else if (distance >= 3 && distance <= 4) {
            return "sad";
        }
        else if (distance >= 5 && distance <= 9) {
            return "upset"
        }
        else if (distance >= 10 && distance <= 24) {
            return "mad"
        }
        else if (distance >= 25 && distance <= 49) {
            return "angry"
        }
        else {
            return "furious"
        }
    }
}
