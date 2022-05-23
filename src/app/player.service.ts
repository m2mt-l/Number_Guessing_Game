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

    clear(): void {
        this.players = [];
    }

    constructor() {}
}
