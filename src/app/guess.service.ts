import { Injectable } from '@angular/core';
import { Guess } from './guess';

@Injectable({
    providedIn: 'root',
})
export class GuessService {
    guesses: Guess[] = [];

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

    setGuessNumber(guessNumber: number, counter: number): void{
        this.guesses[counter].guessNumber = guessNumber;
    }

    setDistanceRange(distanceRange: string, counter: number): void{
      this.guesses[counter].distanceRange = distanceRange;      
    }
  
    getGuessNumber(counter: number): number{
        return this.guesses[counter].guessNumber;
    }

    getDistanceRange(counter: number): string{
      return this.guesses[counter].distanceRange;
    }

}
