
interface Unit {
    isImperial: boolean,
    toMeters: number,
    toFeet?: number,
    abbr: string,
    singular: string
}

const Meter: Unit = {
    isImperial: false,
    toMeters: 1,
    toFeet: 3.28084,
    abbr: "m",
    singular: "meter"
}

// interface Unit {
//     value: number,
//     unit: string
// }

const Conversions: { [key: string]: number } = {
    "m": 1,
    "km": 1000,
    /* Imperial */
    "ft": 0.3048,
}

const ImperialConversions: { [key: string]: number } = {
    "in": 1/12,
    "ft": 1,
    "yd": 3,
    "mi": 5280,
}

const convert = (from: string, to: string, n: number): number => {
    // if systems match, make it pretty
    // else convert to meters and back
    const m = n * Conversions[from];
    return m * Conversions[to];
}