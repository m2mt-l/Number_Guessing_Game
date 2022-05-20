import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    rateControl: FormControl = new FormControl('', [Validators.min(1), Validators.max(100)]);

    ngOnInit(): void {}

    onSelect(n: string): void {
        this.isPlayerOne = false;
        console.log(n);
    }

    isValidNumber(n: string): boolean {
        let changedN = Number(n);
        return changedN > 0 && changedN <= 100;
    }
}
