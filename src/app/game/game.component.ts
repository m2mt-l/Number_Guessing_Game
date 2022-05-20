import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
    constructor() {}

    sentencePlayerOne: string = 'Player one enter a value between 1 and 100 to be guessed';
    sentencePlayerTwo: string = 'Player two enter a value between 1 and 100 to be guessed';
    isPlayerOne: boolean = true;
    counter: number = 1;

    ngOnInit(): void {}

    onSelect(n: string): void {
        this.isPlayerOne = false;
        console.log(n);
    }
}
