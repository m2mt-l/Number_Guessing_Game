import { Injectable } from '@angular/core';
import { Player } from './player';
@Injectable({
    providedIn: 'root',
})
export class PlayerService {
    players: Player[] = [];

    add(id: number, n: number): void {
        let player: Player = { id: id, guessingNumber: n };
        this.players.push(player);
    }

    getPlayerOneNumber(): number {
        return this.players[0].guessingNumber;
    }

    getPlayerTwoNumber(): number {
        return this.players[1].guessingNumber;
    }

    setPlayerTwoNumber(n: number): void {
        this.players[1].guessingNumber = n;
    }

    clear(): void {
        this.players = [];
    }

    constructor() {}
}
