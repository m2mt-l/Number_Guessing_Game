import { Injectable } from '@angular/core';
import { Guess } from './guess';

@Injectable({
    providedIn: 'root',
})
export class GuessService {
    guesses: Guess[] = [];
    distanceHashmap: { [key: string]: string } = {
        perfect: '0',
        fine: '1-2',
        sad: '3-4',
        upset: '5-9',
        mad: '10-24',
        angry: '25-49',
        furious: '50+',
    };

    constructor() {}

    initialGuessServices(): void {
        const guessLimit: number = 5;
        const defaultGuess: Guess = {
            guessNumber: -1,
            imageUrl: '',
            distanceRange: '',
        };
        for (let i: number = 1; i <= guessLimit; i++) {
            let defaultGuessCopy = Object.assign({},defaultGuess)
            this.guesses.push(defaultGuessCopy);
        }
    }

    setGuessNumber(guessNumber: number, distance: number, counter: number): void{
        this.guesses[counter].guessNumber = guessNumber;
    }

    setDistanceRange(distance: number, counter: number): void{
        const distanceRange: string = this.distanceHashmap[this.checkGuessNumber(distance)];
        this.guesses[counter].distanceRange = distanceRange;      
    }
  
    getGuessNumber(counter: number): number{
        return this.guesses[counter].guessNumber;
    }

    getDistanceRange(counter: number): string{
      return this.guesses[counter].distanceRange;
    }

    checkGuessNumber(distance: number): string {
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
}
