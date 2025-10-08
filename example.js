import { cibilChecker } from './src/index.js';

try {
    const customerCibilScore = 69999;

    const isCustomerEligible = (customerCibilScore = null) => {
        return cibilChecker.isEligible(customerCibilScore);
    }

    console.log(`Customer with CIBIL score ${customerCibilScore} is eligible for loan: ${isCustomerEligible(customerCibilScore)}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
}