
const submitBtn = document.getElementById("submitBtn")
const cityName = document.getElementById("cityName")
const showCity = document.getElementById("showCity")

const getInfo = (event) => {
    event.preventDefault()
    let city = cityName.value
    if (city === "") {
        showCity.innerText = "Please enter your city name and the click on search button"
        return
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "city": city
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8000/api/weather", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if (result.status == "1") {
                showCity.innerText = result.data.city
            }
        })
        .catch(error => console.log('error', error));
}

submitBtn.addEventListener('click', getInfo)