import {blackScholesCall, blackScholesPut} from "@finance/options"

const S = 100
const X = 80
const T = 20 / 365 // time in years
const r = 0.05
const sigma = 0.2

const description = `Stock price: ${S}, Strike price: ${X}, Time to expiration in years: ${T}, interest rate: ${r}, volatility: ${sigma}`

const call = blackScholesCall(S , X, T, r, sigma)
const put = blackScholesPut(S,X, T, r, sigma)

console.log(`Black scholes results for ${description} \n Call: ${call}, Put: ${put}`)