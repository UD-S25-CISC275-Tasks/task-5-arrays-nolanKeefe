/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers[0]) {
        return [numbers[0], numbers[numbers.length - 1]];
    }
    return [];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let tripled: number[] = numbers.map((amount: number): number => amount * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let integers: number[] = numbers.map((numeral: string): number =>
        isNaN(+numeral) ? 0 : +numeral,
    );
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let integers: number[] = amounts.map((amount: string): number =>
        amount[0] === "$" ?
            isNaN(+amount.slice(1)) ? 0
            :   +amount.slice(1)
        : isNaN(+amount) ? 0
        : +amount,
    );
    return integers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let exclaimed: string[] = messages.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message,
    );
    exclaimed = exclaimed.filter(
        (message: string): boolean => message[message.length - 1] !== "?",
    );

    return exclaimed;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let short: string[] = words.filter(
        (word: string): boolean => word.length < 4,
    );
    return short.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let RGB: string[] = colors.filter(
        (color: string): boolean =>
            color === "red" || color === "green" || color === "blue",
    );
    return colors.length === RGB.length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum: number = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0,
    );
    if (sum === 0) {
        return "0=0";
    }
    let equation: string = sum.toString() + "=" + addends.join("+");
    return equation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    /*
        okay so like i need to make a subarray up to the first negative if there is a negative
        if there isnt a negative i need to just go through and then do the sum

    */
    let addneg: number[] = [];
    if (values.some((value: number): boolean => value < 0)) {
        let negloc: number = values.findIndex(
            (value: number): boolean => value < 0,
        );
        addneg = values.slice(0, negloc + 1);
        addneg.push(
            addneg
                .slice(0, negloc)
                .reduce(
                    (currentTotal: number, num: number) => currentTotal + num,
                    0,
                ),
        );
        addneg.push(...values.slice(negloc + 1));
    } else {
        //all positive
        addneg = values.map((value: number): number => value);
        addneg.push(
            values.reduce(
                (currentTotal: number, num: number) => currentTotal + num,
                0,
            ),
        );
    }

    return addneg;
}
