let cities = document.querySelectorAll(".city");
let app = document.querySelector(".weather-app");
const form = document.querySelector("#formId");
let search = document.querySelector(".search")
let tempereture = document.querySelector(".temperature")
let humidity = document.querySelector(".humidity")
let wind = document.querySelector(".wind")
let cloudy = document.querySelector(".cloudy")
let condition = document.querySelector(".condition")
let nameOfCity = document.querySelector(".name")
let icon = document.querySelector("#wicon")
let weatherapp = document.querySelector('.weather-app')
const subInput = document.getElementById('subInput')
let date = document.querySelector(".date")
// const weatherByDay = [[],[],[],[],[]];
// fetch function
let inpuycity = "brussels" 
const getWeather = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=95257612ddf9193a512e1806c727ea6b`)
  const data = await response.json();
  return data


}

// const getphoto =(city)=>{
//     fetch(`https://api.unsplash.com/search/photos?query=${city}&client_id=6uzN4HUjtigXpV4apTTyiWJmDNVXHaXQ-CAjLXun-xM`)
//     .then((response) => response.json())
//   .then((data) =>
//    console.log(data));
//    return data;
// }

 // add city eventListner to each city in the rightSide;
       cities.forEach((city)=> {
       city.addEventListener("click", async (e) => {
       let data = await getWeather(e.target.innerHTML);
       console.log(data)
       city =  e.target.innerHTML; 
       console.log(city)
    
        // app.style.opacity = "1";
                            nameOfCity.innerHTML = data.city.name
                            tempereture.innerHTML = data.list[0].main.temp +'°';
                            icon.innerHTML = data.list[0].weather[0].icon; 
                            date.innerHTML = data.list[0].dt_txt;
                            condition.innerHTML = data.list[0].weather[0].main;
                            humidity.innerHTML = data.list[0].main.humidity+'%' ; 
                                wind.innerHTML = data.list[0].wind.speed + 'km/h';   
                            cloudy.innerHTML = data.list[0].clouds.all + '%';
                            condition.innerHTML = data.list[0].weather[0].main;
                            
    })
})           
        

        form.addEventListener("submit", async (e)=>{
            e.preventDefault();
            if(search.value == ""){
                alert("please type a city name!")
            }else{
              
                
          

                const data = await getWeather(search.value)
                console.log(data)
                nameOfCity.innerHTML = data.city.name
                tempereture.innerHTML = data.list[0].main.temp +'°';
                icon.innerHTML = data.list[0].weather[0].icon; 
                date.innerHTML = data.list[0].dt_txt;
                condition.innerHTML = data.list[0].weather[0].main;
                
           
            search.value="";
          
        
        }

        
})
    

