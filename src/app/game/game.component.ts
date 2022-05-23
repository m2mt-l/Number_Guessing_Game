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
    constructor(private playerService: PlayerService, private guessService: GuessService) {}

    rateControl: FormControl = new FormControl('', [Validators.min(1), Validators.max(100)]);

    ngOnInit(): void {}

    onSelect(n: string): void {
        const isPlayerOne: boolean = this.playerService.isPlayerOne;
        if (isPlayerOne) {
            this.playerService.changePlayerTwo();
            this.playerService.add(1, Number(n));
            this.rateControl.reset();
        } else if (this.playerService.players.length < 2) {
            this.playerService.add(2, Number(n));
            this.playerService.setDistance();
            this.playerService.addCounter();
            this.setGuessService(Number(n), this.getCounter() - 1, this.getDistance());
            this.rateControl.reset();
        } else if (this.playerService.players.length == 2 && this.getDistance() != 0) {
            this.playerService.setPlayerTwoNumber(Number(n));
            this.playerService.setDistance();
            this.playerService.addCounter();
            this.setGuessService(Number(n), this.getCounter() - 1, this.getDistance());
            this.rateControl.reset();
        }
        else {
            this.rateControl.reset();
        }
    }

    isValidNumber(n: string): boolean {
        let changedN = Number(n);
        return changedN > 0 && changedN <= 100;
    }

    isPlayerOne(): boolean {
        return this.playerService.isPlayerOne;
    }

    isPerfect(): boolean {
        return this.playerService.isPerfect();
    }

    getCounter(): number {
        return this.playerService.counter;
    }

    getDistance(): number {
        return this.playerService.distance;
    }

    resetGame(): void {
        this.playerService.clear();
        this.playerService.changePlayerOne();
        this.playerService.changeCounterZero();
        this.playerService.changeDistanceDefault();
        this.guessService.clear();
        this.guessService.initialGuessServices();
        this.guessService.changeDeviationZero();
    }

    getDeviation(): number {
        return this.guessService.deviation;
    }

    getSentencePlayerOne(): string {
        return this.playerService.generateSentencePlayerOne();
    }

    getSentencePlayerTwo(): string {
        return this.playerService.generateSentencePlayerTwo();
    }

    setGuessService(guessNumber: number, counter: number, distance: number): void {
        this.guessService.setGuessNumber(guessNumber, counter);
        this.guessService.setDistanceRange(distance, counter);
        this.guessService.setImgUrl(distance, counter);
        this.guessService.addDeviation(distance);
    }
}
