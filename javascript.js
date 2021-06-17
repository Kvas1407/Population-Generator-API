// Declaring the variables
const button = document.querySelector('.button')
const dataDisp = document.querySelector('.displayData')

// Click Function trigger to submit the user request
submit.addEventListener("click", function() {

    const country = document.querySelector('#fname').value;
    fname.value="";

// Function creation to fetch the Javascript Api
    function getCountryData() {
        fetch(`https://world-population.p.rapidapi.com/population?country_name=${country}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "d2bba620f0msh156a97dadf6af43p1b1230jsn3a9041c3da07",
                "x-rapidapi-host": "world-population.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(response => {
 
            console.log(response);

            // Creating Table to display set of data in table format
            const displayCntryName=response.body["country_name"];
            const displayRank=response.body["ranking"];
            const displayPop=response.body["population"];
            const displayShare=response.body["world_share"];

            dataDisp.innerHTML=`<table class="worldpopulation" id="displayTable">
            <tr>
            <td>Country Name: </td>
            <td>${displayCntryName}</td>
            </tr>

            <tr>
            <td>Country Rank: </td>
            <td>${displayRank}</td>
            </tr>           
           
            <tr>
                <td>Population: </td>
                <td>${displayPop}</td>
            </tr>

            <tr>
                <td>World Share: </td>
                <td>${displayShare}</td>
            </tr>            
           `  
})

// Exception error function to implement error in console, in case of fetch failure
.catch(err => {
	console.error(err);
});

}

// Method call to complete the API call
getCountryData()
})