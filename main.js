//!TOGGLE NAVIGATION MENU AND ICONS
const menuToggleButton = document.querySelector('.menu-toggle-button');
const menuElement = document.querySelector('.menu');

const toggleMenu = () => {
    menuElement.classList.toggle('active');
    menuToggleButton.classList.toggle('active');
};

menuToggleButton.addEventListener('click',toggleMenu);
// !REMOVE ACTIVE CLASS FROM AND ICON ON LINK CLICK

const removeActiveLinkClass = e => {
    if(e.target.classList.contains('list-link')) {
    menuElement.classList.remove('active');
    menuToggleButton.classList.remove('active');
    }
}

document.addEventListener('click',removeActiveLinkClass);

// !TOGGLE THEME AND STORE SELECTION WITHIN LOCAL STORAGE
const themeToggleButton = document.querySelector('.theme-toggle-button');
const bodyElement = document.body;
const currentTheme = localStorage.getItem('darkTheme');

if(currentTheme){
bodyElement.classList.add('dark-theme');
}

const toggleTheme = () => {
bodyElement.classList.toggle('dark-theme');
if(bodyElement.classList.contains('dark-theme')) {
    localStorage.setItem('darkTheme','active');
}else {
    localStorage.removeItem('darkTheme');
}
};

themeToggleButton.addEventListener('click',toggleTheme);
// !SCROLL REVEAL


//scroll bar

const updateBar = () =>{
    const bodyEl = document.body;
    const barEl = document.querySelector('.bar');
    let scrollPos = (window.scrollY /(bodyEl.scrollHeight - window.innerHeight)*100);

    barEl.style.width = `${scrollPos}%`;
    requestAnimationFrame(updateBar);
}
updateBar();

//geolocation ask
// function getLocation() {    
//     if(navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition, positionError);

//     } else {
//         hideLoadingDiv()
//         showError('Geolocation is not supported by this device')
//     }
// }

// function positionError() {
//     hideLoadingDiv()
//     showError('Geolocation is not enabled. Please enable to use this feature')
// }



// weather start


let weather = {
    apiKey: "6a317aa8ad324e10f1325e5a6ca39868" ,
    fetchWeather: function (city) {
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
          .then((response) => {
            if (!response.ok) {
              alert("No weather found.");
              throw new Error("No weather found.");
            }
            return response.json();
          })
          .then((data) => this.displayWeather(data));
      },
    displayWeather: function(data){
        const { dt_txt } = data;
        const { name } = data;
        const { icon, description} = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;

    
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round(temp) + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + Math.round(humidity) + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};


document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

//шукає коли нажати Enter / return
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Kyiv");


//geo location ask

const successCallback = (position) => {
  console.log(position);
};
const errorCallback = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


// hourly weather



let weatherHourly = {
    apiKey: "6a317aa8ad324e10f1325e5a6ca39868" ,
    fetchWeatherHourly: function (city) {
        fetch(
          "https://api.openweathermap.org/data/2.5/forecast?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        )
          .then((response) => {
            if (!response.ok) {
              alert("No weather found.");
              throw new Error("No weather found.");
            }
            return response.json();
          })
          .then((data) => {
          this.displayWeather(data);
          this.displayWeather2(data);
          this.displayWeather3(data);
        });
      },
    displayWeather: function(data){
        const { dt_txt } = data.list[1];
        const { icon, description} = data.list[1].weather[0];
        const { temp, humidity} = data.list[1].main;
        const { speed } = data.list[1].wind;

    
        document.querySelector(".date1").innerText = dt_txt.slice(0, 10);
        document.querySelector(".time1").innerText = dt_txt.slice(11, -3);
        document.querySelector(".icon1").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".time-descr1").innerText = description;
        document.querySelector(".time-temp1").innerText = Math.round(temp) + "°C";
        document.querySelector(".time-humidity1").innerText = "Humidity: " + Math.round(humidity) + "%";
        document.querySelector(".time-wind1").innerText = "Wind speed: " + speed + " km/h";
    },
    displayWeather2: function(data){
        const { dt_txt } = data.list[2];
        const { icon, description} = data.list[2].weather[0];
        const { temp, humidity} = data.list[2].main;
        const { speed } = data.list[2].wind;

    
        document.querySelector(".date2").innerText = dt_txt.slice(0, 10);
        document.querySelector(".time2").innerText = dt_txt.slice(11, -3);
        document.querySelector(".icon2").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".time-descr2").innerText = description;
        document.querySelector(".time-temp2").innerText = Math.round(temp) + "°C";
        document.querySelector(".time-humidity2").innerText = "Humidity: " + Math.round(humidity) + "%";
        document.querySelector(".time-wind2").innerText = "Wind speed: " + speed + " km/h";
    },
    displayWeather3: function(data){
        const { dt_txt } = data.list[3];
        const { icon, description} = data.list[3].weather[0];
        const { temp, humidity} = data.list[3].main;
        const { speed } = data.list[3].wind;

    
        document.querySelector(".date3").innerText = dt_txt.slice(0, 10);
        document.querySelector(".time3").innerText = dt_txt.slice(11, -3);
        document.querySelector(".icon3").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".time-descr3").innerText = description;
        document.querySelector(".time-temp3").innerText = Math.round(temp) + "°C";
        document.querySelector(".time-humidity3").innerText = "Humidity: " + Math.round(humidity) + "%";
        document.querySelector(".time-wind3").innerText = "Wind speed: " + speed + " km/h";
    },
    search: function () {
        this.fetchWeatherHourly(document.querySelector(".search-bar").value);
    }
};


document.querySelector(".search button").addEventListener("click", function() {
    weatherHourly.search();
});

//шукає коли нажати Enter / return
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weatherHourly.search();
    }
});

weatherHourly.fetchWeatherHourly("Kyiv");










// flip clock


// var Flipper = function() {
// 	function Flipper(node, currentTime, nextTime) {
// 		this.isFlipping = false;
// 		this.duration = 600;
// 		this.flipNode = node;
// 		this.frontNode = node.querySelector(".front");
// 		this.backNode = node.querySelector(".back");
// 		this.setFrontTime(currentTime);
// 		this.setBackTime(nextTime);
// 	}
// 	Flipper.prototype.setFrontTime = function (time) {
// 		this.frontNode.dataset.number = time;
// 	};
// 	Flipper.prototype.setBackTime = function (time) {
// 		this.backNode.dataset.number = time;
// 	};
// 	Flipper.prototype.flipDown = function (currentTime, nextTime) {
// 		var _this = this;

// 		if (this.isFlipping) {
// 			return false;
// 		}

// 		this.isFlipping = true;
// 		this.setFrontTime(currentTime);
// 		this.setBackTime(nextTime);
// 		this.flipNode.classList.add("running");
// 		setTimeout(function() {
// 			_this.flipNode.classList.remove("running");
// 			_this.isFlipping = false;
// 			_this.setFrontTime(nextTime);
// 		}, this.duration);
// 	};
// 	return Flipper;
// }();

// var getTimeFromDate = function (date) {
// 	return date.toTimeString().slice(0, 8).split(":").join("");
// };

// var flips = document.querySelectorAll(".flip");
// var now = new Date();
// var nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
// var nextTimeStr = getTimeFromDate(now);
// var Flippers = Array.from(flips).map(function (flip, i) {
// 	return new Flipper(flip, nowTimeStr[i], nextTimeStr[i]);
// });

// setInterval(function () {
// 	var now = new Date();
// 	var nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
// 	var nextTimeStr = getTimeFromDate(now);

// 	for (var i = 0; i < Flippers.length; i++) {
// 		if (nowTimeStr[i] === nextTimeStr[i]) {
// 			continue;
// 		}
// 		Flippers[i].flipDown(nowTimeStr[i], nextTimeStr[i]);
// 	}
// }, 1000);



// let weatherHourly = {
//     apiKey: "6a317aa8ad324e10f1325e5a6ca39868",
//     fetchWeatherHourly: function(city) {
//         fetch(
//             "https://api.openweathermap.org/data/2.5/weather?q="
//             + city +
//             "&units=metric&appid=" +
//             this.apiKey
//         )
//         .then((response) => {
//             if(!response.ok) {
//                 alert("No weather found.");
//             }
//             return response.json();
//         })
//         .then((data) => this.displayWeather(data));
//     },
//     displayWeather: function(data) {
//         const { name } = data.list[1];
//         const { icon, description} = data.list[1].weather[0];
//         const { temp, humidity} = data.list[1].main;
//         const { speed } = data.list[1].wind;

//         console.log(data.list[0]);
//         console.log(data.list[0].weather[0].description);

//         // document.querySelector(".city").innerText = "Weather in " + name;
//         document.querySelector(".icon1").src =
//       "https://openweathermap.org/img/wn/" + icon + ".png";
//         document.querySelector(".description1").innerText = description;
//         document.querySelector(".temp1").innerText = Math.round(temp) + "°C";
//         document.querySelector(".humidity1").innerText = "Humidity: " + Math.round(humidity) + "%";
//         document.querySelector(".wind1").innerText = "Wind speed: " + speed + " km/h";
//     },
//     search: function () {
//         this.fetchWeather(document.querySelector(".search-bar").value);
//     }
// };


// document.querySelector(".search button").addEventListener("click", function() {
//     weather.search();
// });

// //шукає коли нажати Enter / return
// document.querySelector(".search-bar").addEventListener("keyup", function (event) {
//     if (event.key == "Enter") {
//         weather.search();
//     }
// });

// weather.fetchWeather("Kyiv");


// // hourly [1]

// let weatherHourly2 = {
//     apiKey: "6a317aa8ad324e10f1325e5a6ca39868",
//     fetchWeatherHourly2: function(city) {
//         fetch(
//             "http://api.openweathermap.org/data/2.5/forecast?q="
//             + city +
//             "&units=metric&appid=" +
//             this.apiKey
//         )
//         .then((response) => {
//             if(!response.ok) {
//                 alert("No weather found.");
//             }
//             return response.json();
//         })
//         .then((data) => this.displayWeather(data));
//     },
//     displayWeather: function(data) {
//         const { name } = data.list[2];
//         const { icon, description} = data.list[2].weather[0];
//         const { temp, humidity} = data.list[2].main;
//         const { speed } = data.list[2].wind;

//         console.log(data.list[1]);
//         console.log(data.list[1].weather[0].description);

//         // document.querySelector(".city").innerText = "Weather in " + name;
//         document.querySelector(".icon2").src =
//       "https://openweathermap.org/img/wn/" + icon + ".png";
//         document.querySelector(".description2").innerText = description;
//         document.querySelector(".temp2").innerText = Math.round(temp) + "°C";
//         document.querySelector(".humidity2").innerText = "Humidity: " + Math.round(humidity) + "%";
//         document.querySelector(".wind2").innerText = "Wind speed: " + speed + " km/h";
//     },
//     search: function () {
//         this.fetchWeather(document.querySelector(".search-bar").value);
//     }
// };


// document.querySelector(".search button").addEventListener("click", function() {
//     weather.search();
// });

// //шукає коли нажати Enter / return
// document.querySelector(".search-bar").addEventListener("keyup", function (event) {
//     if (event.key == "Enter") {
//         weather.search();
//     }
// });

// weather.fetchWeather("Kyiv");



// // hourly [3]

// let weatherHourly3 = {
//     apiKey: "6a317aa8ad324e10f1325e5a6ca39868",
//     fetchWeatherHourly3: function(city) {
//         fetch(
//             "http://api.openweathermap.org/data/2.5/forecast?q="
//             + city +
//             "&units=metric&appid=" +
//             this.apiKey
//         )
//         .then((response) => {
//             if(!response.ok) {
//                 alert("No weather found.");
//             }
//             return response.json();
//         })
//         .then((data) => this.displayWeather(data));
//     },
//     displayWeather: function(data) {
//         const { name } = data.list[3];
//         const { icon, description} = data.list[3].weather[0];
//         const { temp, humidity} = data.list[3].main;
//         const { speed } = data.list[3].wind;

//         console.log(data.list[3]);
//         console.log(data.list[3].weather[0].description);

//         // document.querySelector(".city").innerText = "Weather in " + name;
//         document.querySelector(".icon3").src =
//       "https://openweathermap.org/img/wn/" + icon + ".png";
//         document.querySelector(".description3").innerText = description;
//         document.querySelector(".temp3").innerText = Math.round(temp) + "°C";
//         document.querySelector(".humidity3").innerText = "Humidity: " + Math.round(humidity) + "%";
//         document.querySelector(".wind3").innerText = "Wind speed: " + speed + " km/h";
//     },
//     search: function () {
//         this.fetchWeather(document.querySelector(".search-bar").value);
//     }
// };


// document.querySelector(".search button").addEventListener("click", function() {
//     weather.search();
// });

// //шукає коли нажати Enter / return
// document.querySelector(".search-bar").addEventListener("keyup", function (event) {
//     if (event.key == "Enter") {
//         weather.search();
//     }
// });

// weather.fetchWeather("Kyiv");

  



// http://api.openweathermap.org/data/2.5/forecast?lat=48.9215&lon=24.7097&appid=6a317aa8ad324e10f1325e5a6ca39868




