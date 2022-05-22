import { Injectable } from '@angular/core';
import { Guess } from './guess';

@Injectable({
  providedIn: 'root'
})
export class GuessService {
  guessServices: Guess[] = [];
  
  constructor() { }

  initialGuessServices(): void {
    const guessLimit: number = 5;
    const defaultGuess: Guess = {
      guessNumber: -1,
      imageUrl: "",
      distanceRange: ""
    };  
    for(let i: number = 1; i <= guessLimit; i++) {
      this.guessServices.push(defaultGuess)
    };
  }
}
