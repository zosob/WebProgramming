//Simulate an API call...

function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success = false; //Can cahnge to true for success...
            if(success){
                resolve("Data has been fetched successfully!");
            } else{
                reject("Error: Failed to fetch data.");
            } 
        }, 2000);
    });
}

//Using .then() to handle the resolved value

fetchData()
.then(respone => {console.log(respone);
})
.catch(error => {
    console.error(error);
})

//Using async/await...
async function getData(){
    try{
        let response = await fetchData();
        console.log(response);
    } catch(error)
    {
        console.log(error);
    }
}

getData();