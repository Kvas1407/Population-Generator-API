
const button = document.querySelector('.button')
const dataDisp = document.querySelector('.displayData')




submit.addEventListener("click", function() {

    const country = document.querySelector('#fname').value;
    fname.value="";

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
            dataDisp.innerHTML=`<p>Population : ${response.body.population}</p>`;
            dataDisp1.innerHTML=`<p>Country Ranking : ${response.body.ranking}</p>`;
    
        // console.log(response);
        // const displayPop = response.body[`population`];
        // dataDisp.innerHTML = `${displayPop}`
    
})
.catch(err => {
	console.error(err);
});

}
getCountryData()
})