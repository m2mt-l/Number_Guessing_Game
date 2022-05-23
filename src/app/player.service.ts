import { Injectable } from '@angular/core';
import { Player } from './player';
@Injectable({
    providedIn: 'root',
})
export class PlayerService {
    players: Player[] = [];
    isPlayerOne: boolean = true;

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

    changePlayerOne(): void {
        if(this.isPlayerOne) {
            console.log("isPlayerOne is false and this is not supposed to call")
            return;
        }
        this.isPlayerOne = true;
    }

    changePlayerTwo(): void {
        if(!this.isPlayerOne) {
            console.log("isPlayerOne is true and this is not supposed to call")
            return;
        }
        this.isPlayerOne = false;
    }

    clear(): void {
        this.players = [];
    }

    constructor() {}
}
