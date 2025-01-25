
const gettingAdvice = async (url) => {
    try{
        console.log("Data is getting called  by the api");
        const response = await fetch(url);
        if(response){
            const data = await response.json();
            console.log("Full response data:", data);
            console.log("Printing the data form the response");
            console.log(data.slip.advice);
        }
        else{
            console.log("Theres was an error");
        }
    }
    catch(err){
        console.log(err);
    }
}
// initiail try for getting the api which is wrong since api calls are asychronomous use async and await
// const gettingAdvice = (url) => {
//     const response = fetch(url);
//     if(response){
//         response = JSON.parse(response);
//         console.log(response.body.slip);
//     }
//     else{
//         console.log("There is an error")
//     }
// }

gettingAdvice("https://api.adviceslip.com/advice")

module.export = gettingAdvice;