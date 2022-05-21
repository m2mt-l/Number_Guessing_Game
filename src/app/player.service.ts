import { Injectable } from '@angular/core';
import { Player } from './player';
@Injectable({
    providedIn: 'root',
})
export class PlayerService {
    players: Player[] = [];

    add(id: number, n: number) {
        let player: Player = {id: id, guessingNumber: n};
        this.players.push(player);
    }
    constructor() {}
}
