const LOAN_THRESHOLD = 750;

const isEligible = (cibilScore = null) => {
    validateScoreInput(cibilScore);

    return cibilScore >= LOAN_THRESHOLD;
}

function validateScoreInput(score) {
    // 1. Check if it is a number and a whole number (no decimals)
    if (typeof score !== 'number' || !Number.isInteger(score)) {
        throw new TypeError(`CIBIL score must be a whole number (received: ${score}, type: ${typeof score}).`);
    }

    // 2. Check for realistic range (300 to 900)
    if (score < 300 || score > 900) {
        throw new RangeError(`CIBIL score must be strictly between 300 and 900 (received: ${score}).`);
    }
}

export const cibilChecker = {
    isEligible
};