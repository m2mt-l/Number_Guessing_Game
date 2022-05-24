import { Injectable } from '@angular/core';
import { Player } from './player';
@Injectable({
    providedIn: 'root',
})
export class PlayerService {
    players: Player[] = [];
    isPlayerOne: boolean = true;
    counter: number = 0;
    distance: number = -1;
    minimumNumber: number = 1;
    maximumNumber: number = 100;
    playerOneName: string = 'Player 1';
    playerTwoName: string = 'Player 2';

    add(id: number, n: number): void {
        let player: Player = { id: id, guessNumber: n };
        this.players.push(player);
    }

    getPlayerOneNumber(): number {
        return this.players[0].guessNumber;
    }

    getPlayerTwoNumber(): number {
        return this.players[1].guessNumber;
    }

    setPlayerTwoNumber(n: number): void {
        this.players[1].guessNumber = n;
    }

    changeCounterZero(): void {
        this.counter = 0;
    }

    changePlayerOne(): void {
        if (this.isPlayerOne) {
            console.log('isPlayerOne is false and this is not supposed to call');
            return;
        }
        this.isPlayerOne = true;
    }

    changePlayerTwo(): void {
        if (!this.isPlayerOne) {
            console.log('isPlayerOne is true and this is not supposed to call');
            return;
        }
        this.isPlayerOne = false;
    }

    setDistance(): void {
        const playerOneNumber: number = this.getPlayerOneNumber();
        const playerTwoNumber: number = this.getPlayerTwoNumber();
        this.distance = Math.abs(playerOneNumber - playerTwoNumber);
    }

    changeDistanceDefault(): void {
        this.distance = -1;
    }

    isPerfect(): boolean {
        return this.distance === 0;
    }

    addCounter(): void {
        this.counter++;
    }

    clear(): void {
        this.players = [];
    }

    generateSentencePlayerOne(): string {
        return `${this.playerOneName}: enter a value between ${this.minimumNumber} and ${this.maximumNumber} to be guessed`;
    }

    generateSentencePlayerTwo(): string {
        return `${this.playerTwoName}: enter a value between ${this.minimumNumber} and ${this.maximumNumber} to be guessed`;
    }

    constructor() {}
}
