const axios = require("axios");

async function getMutualFundsData() {
    try {
        const response = await axios.get("https://api.mfapi.in/mf");
        const mutualFundsArray = response.data;
        console.log("Mutual Funds Data:");
        console.log(mutualFundsArray); // This will print the array
        
        // If you want to print individual items
        mutualFundsArray.forEach((fund, index) => {
            console.log(`\nFund ${index + 1}:`);
            console.log(`Scheme Code: ${fund.schemeCode}`);
            console.log(`Scheme Name: ${fund.schemeName}`);
        });
        
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getMutualFundsData();
