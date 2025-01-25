const gettingAdvice = async (url) => {
    try{
        console.log("Data is getting called  by the api");
        const response = await fetch(url);
        if(response){
            const data = await response.json();
            console.log("Full response data:", data);
            console.log("Printing the data form the response");
            // console.log(data.slip.advice);
            return data.slip.advice;
        }
        else{
            console.log("Theres was an error");
        }
    }
    catch(err){
        console.log("There was an error during the fetching operation itself");
        console.log(err);
    }
}

export default gettingAdvice;