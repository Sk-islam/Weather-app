    const apikey = "aeb5e25c39cbadf727fa2bfaa9a71bd2";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 const content = document.getElementById("container");
    let hrs = document.getElementById("hrs");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    const icon = document.querySelector(".wether-icon");

    async function checkWether(city){
        const response = await fetch(apiUrl + city + `&appid=${apikey}`);
        let data = await response.json();

        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".error").style.color = "red";
            document.querySelector(".whether").style.display = "none";
        }
        else{
            if(data.weather[0].main == "Clouds"){
                icon.src = "clouds.png";
            }
        
            else if(data.weather[0] == "Clear"){
                icon.src = "clear.png";
            }
            else if(data.weather[0] == "Rain"){
                icon.src = "rain.png";
            }
            else if(data.weather[0] == "Drizzle"){
                icon.src = "drizzle.png";
            }
            else if(data.weather[0] == "Mist"){
                icon.src = "mist.png";
            }

        }

        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            icon.src = "clouds.png";
        }

        else if(data.weather[0] == "Clear"){
            icon.src = "clear.png";
        }
        else if(data.weather[0] == "Rain"){
            icon.src = "rain.png";
        }
        else if(data.weather[0] == "Drizzle"){
            icon.src = "drizzle.png";
        }
        else if(data.weather[0] == "Mist"){
            icon.src = "mist.png";
        }

        document.querySelector(".whether").style.display = "block";
        document.querySelector(".error").style.display = "none";
        document.querySelector(".container").style.display = "block";

    }

setInterval(()=>{
        let currentTime = new Date();
        let time = currentTime.toLocaleString();
        clock.innerHTML =time;
    
    // hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    // min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    // sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
    
    },1000)


    searchBtn.addEventListener('click',()=>{
        checkWether(searchBox.value);  
    });





