const principal = 2000
const time = 5
const rate = 0.08
const n = 12
const compoundInterest = (principal, time, rate, n) => {
    const amount = principal * (Math.pow((1 + (rate/n)), (n * time)))
    const interest = amount - principal
    return interest;
};
console.log(compoundInterest(principal, time, rate, n));

