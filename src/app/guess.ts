interface Guess {
    distance: {
        [key: string]: string;
    }
}

export const guess: Guess = {
    distance: {
        perfect: "0",
        fine: "1-2",
        sad: "3-4",
        upset: "5-9",
        mad: "10-24",
        angry: "25-49",
        furious: "50+"
    }
};
