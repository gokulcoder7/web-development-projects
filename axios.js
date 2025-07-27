const axios = require("axios");
const data = axios.get("https://api.mfapi.in/mf").then((res) => {
    let arr=res.data;
console.log(arr);
})
.catch((err) => {
console.log(err);
});

