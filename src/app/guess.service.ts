import { Injectable } from '@angular/core';
import { Guess } from './guess';

@Injectable({
    providedIn: 'root',
})
export class GuessService {
    guesses: Guess[] = [];
    guessLimit: number = 5;
    deviation: number = 0;
    distanceHashmap: { [key: string]: string } = {
        perfect: '0',
        fine: '1-2',
        sad: '3-4',
        upset: '5-9',
        mad: '10-24',
        angry: '25-49',
        furious: '50+',
    };

    imgHashmap: { [key: string]: string } = {
        first: './assets/first.jpg',
        perfect: './assets/perfect.jpg',
        fine: './assets/fine.jpg',
        sad: './assets/sad.jpg',
        upset: './assets/upset.jpg',
        mad: './assets/mad.jpg',
        angry: './assets/angry.jpg',
        furious: './assets/furious.jpg',
    }

    constructor() {}

    initialGuessServices(): void {

        const defaultGuess: Guess = {
            guessNumber: -1,
            imageUrl: this.imgHashmap["first"],
            distanceRange: '?',
        };
        for (let i: number = 1; i <= this.guessLimit; i++) {
            let defaultGuessCopy = Object.assign({},defaultGuess)
            this.guesses.push(defaultGuessCopy);
        }
    }

    setGuessNumber(guessNumber: number, counter: number): void{
        this.guesses[counter].guessNumber = guessNumber;
    }

    setDistanceRange(distance: number, counter: number): void{
        const distanceRange: string = this.distanceHashmap[this.checkGuessNumber(distance)];
        this.guesses[counter].distanceRange = distanceRange;      
    }

    setImgUrl(distance: number, counter: number): void{
        const imgUrl: string = this.imgHashmap[this.checkGuessNumber(distance)];
        this.guesses[counter].imageUrl = imgUrl;
    }
  
    getGuessNumber(counter: number): number{
        return this.guesses[counter].guessNumber;
    }

    getDistanceRange(counter: number): string{
      return this.guesses[counter].distanceRange;
    }

    addDeviation(distance: number): void{
        this.deviation+= distance;
    }

    clear(): void {
        this.guesses = [];
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
