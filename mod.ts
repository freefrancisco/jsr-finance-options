import jStat from "jstat";

export function blackScholesCall(S: number , X: number, T:number, r: number, sigma: number):number {
    if(T==0) return Math.max(S-X, 0);
    const {d1, d2} = blackScholesD1D2(S, X, T, r, sigma)
    return  S * N(d1) - X * Math.exp(-r * T) * N(d2) 
}

export function blackScholesPut(S: number , X: number, T:number, r: number, sigma: number):number {
    if(T==0) return Math.max(X - S, 0);
    const {d1, d2} = blackScholesD1D2(S, X, T, r, sigma)
    return  X * Math.exp(-r * T) * N(-d2) - S * N(-d1) 
}

// d1 and d2 as used in the black scholes formula
function blackScholesD1D2(S: number , X: number, T:number, r: number, sigma: number):{d1:number, d2:number} {
    const d1 = (Math.log(S / X) + (r + (sigma ** 2) / 2) * T) / (sigma * Math.sqrt(T));
    const d2 = d1 - sigma * Math.sqrt(T);
    return {d1:d1, d2:d2}
}

// cumulative standard normal as used in black scholes formula with d1 and d2
function N(d:number) {
    return jStat.normal.cdf(d, 0, 1)
}
