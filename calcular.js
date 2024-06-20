let balance=2475385.935999998;
let deductions=1273.32+1642.68
let new_balance=balance-deductions



const axios = require('axios');

let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://www.ke.sportpesa.com/`,
    headers: {
        'Authorization': 'Bearer 4F5D3QC5-C94A-CFD5-87C1-4E2903311DF0'
    }
};


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function runScript() {
    while (true) {
        try {
            axios.request(config).catch(errro=>{
                console.log(Date.now()+" Error..")
            });
            await wait(5);
        }catch (e){
            console.log(Date.now()+" Fsiled..")
        }

    }
}
runScript();