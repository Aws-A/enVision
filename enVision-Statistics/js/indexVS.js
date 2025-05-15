// Function to handle the search functionality
function search() {
    // Get the value of the input field
    let searchText = document.getElementById("searchInput").value.trim();

    // Check if the search input is not empty
    if (searchText !== "") {
        // Show the topics div
        document.querySelector('.topics').style.display = 'block';
    } else {
        // Hide the topics div if the search input is empty
        document.querySelector('.topics').style.display = 'none';
    }
}

function showEc() {
    document.getElementById("Dem").classList.remove("clicked");
    document.getElementById("Soc").classList.remove("clicked");
    document.getElementById("Geo").classList.remove("clicked");
    document.querySelector('.subTopicsSoc').style.display = 'none';
    document.querySelector('.subTopicsGeo').style.display = 'none';
    document.querySelector('.subTopics').style.display = 'none';
    var button = document.getElementById("Ec");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
        // Update the content of the selected elements
        document.querySelector('.titleP').textContent = "Best Economics";
        document.querySelector('.country1').textContent = "USA";
        document.querySelector('.per1').textContent = "$25.5";
        document.querySelector('.country2').textContent = "China";
        document.querySelector('.per2').textContent = "$18.0";
        document.querySelector('.country3').textContent = "Japan";
        document.querySelector('.per3').textContent = "$4.2";
        document.querySelector('.country4').textContent = "Germany";
        document.querySelector('.per4').textContent = "$4.1";
        document.querySelector('.country5').textContent = "India";
        document.querySelector('.per5').textContent = "$3.4";
        document.querySelector('.country6').textContent = "UK";
        document.querySelector('.per6').textContent = "$3.1";
        document.querySelector('.country7').textContent = "France ";
        document.querySelector('.per7').textContent = "$2.8";
        document.querySelector('.country8').textContent = "Russia";
        document.querySelector('.per8').textContent = "$2.2";
        document.querySelector('.country9').textContent = "Canada";
        document.querySelector('.per9').textContent = "$2.1";
        document.querySelector('.country10').textContent = "Italy";
        document.querySelector('.per10').textContent = "$2.0";
    document.querySelector("path#_x3C_US_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_China_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Japan_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Germany_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_India_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_France_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Canada_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Italy_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Russia_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_UK_x3E_.st0").style.fill="#D3E1F2";
}

function showDem() {
    document.getElementById("Ec").classList.remove("clicked");
    document.getElementById("Soc").classList.remove("clicked");
    document.getElementById("Geo").classList.remove("clicked");
    document.querySelector('.subTopicsSoc').style.display = 'none';
    document.querySelector('.subTopicsGeo').style.display = 'none';
    document.querySelector('.subTopics').style.display = 'block';
    reset();
    var button = document.getElementById("Dem");
    button.classList.add("clicked");
}

function showPop() {
    document.getElementById("lifeEx").classList.remove("clicked");
    var button = document.getElementById("pop");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Population";
    document.querySelector('.country1').textContent = "India";
    document.querySelector('.per1').textContent = "1435";
    document.querySelector('.country2').textContent = "China";
    document.querySelector('.per2').textContent = "1425";
    document.querySelector('.country3').textContent = "US";
    document.querySelector('.per3').textContent = "340";
    document.querySelector('.country4').textContent = "Indonesia";
    document.querySelector('.per4').textContent = "278";
    document.querySelector('.country5').textContent = "Pakistan";
    document.querySelector('.per5').textContent = "242";
    document.querySelector('.country6').textContent = "Nigeria";
    document.querySelector('.per6').textContent = "226";
    document.querySelector('.country7').textContent = "Brazil";
    document.querySelector('.per7').textContent = "217";
    document.querySelector('.country8').textContent = "Bangladesh";
    document.querySelector('.per8').textContent = "173";
    document.querySelector('.country9').textContent = "Russia";
    document.querySelector('.per9').textContent = "144";
    document.querySelector('.country10').textContent = "Mexico";
    document.querySelector('.per10').textContent = "128";
    document.querySelector("path#_x3C_US_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_China_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Mexico_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Indonesia_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_India_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Pakistan_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Nigeria_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Brazil_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Russia_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Bangladesh_x3E_.st0").style.fill="#D3E1F2";
}

function showLifeEx() {
    reset();
    document.getElementById("pop").classList.remove("clicked");
    var button = document.getElementById("lifeEx");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Life Expectancy";
    document.querySelector('.country1').textContent = "Japan";
    document.querySelector('.per1').textContent = "84.95";
    document.querySelector('.country2').textContent = "Switzerland";
    document.querySelector('.per2').textContent = "84.38";
    document.querySelector('.country3').textContent = "Singapore";
    document.querySelector('.per3').textContent = "84.27";
    document.querySelector('.country4').textContent = "Italy";
    document.querySelector('.per4').textContent = "84.2";
    document.querySelector('.country5').textContent = "South-Korea";
    document.querySelector('.per5').textContent = "84.14";
    document.querySelector('.country6').textContent = "Spain";
    document.querySelector('.per6').textContent = "84.05";
    document.querySelector('.country7').textContent = "Malta";
    document.querySelector('.per7').textContent = "83.85";
    document.querySelector('.country8').textContent = "Australia";
    document.querySelector('.per8').textContent = "83.73";
    document.querySelector('.country9').textContent = "Sweden";
    document.querySelector('.per9').textContent = "83.65";
    document.querySelector('.country10').textContent = "Norway";
    document.querySelector('.per10').textContent = "83.55";
    document.querySelector("path#_x3C_Japan_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Switzerland_x3E_.st0").style.fill="#D3E1F2";
    //document.querySelector("path#_x3C_Singapore_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Italy_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_South-Korea_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Spain_x3E_.st0").style.fill="#D3E1F2";
    //document.querySelector("path#_x3C_Malta_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Australia_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Sweden_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Norway_x3E_.st0").style.fill="#D3E1F2";
}

function showSoc() {
    document.getElementById("Ec").classList.remove("clicked");
    document.getElementById("Dem").classList.remove("clicked");
    document.getElementById("Geo").classList.remove("clicked");
    document.querySelector('.subTopics').style.display = 'none';
    document.querySelector('.subTopicsGeo').style.display = 'none';
    document.querySelector('.subTopicsSoc').style.display = 'block';
    reset();
    var button = document.getElementById("Soc");
    button.classList.add("clicked");
}

function showCars() {
    reset();
    document.getElementById("mobiles").classList.remove("clicked");
    var button = document.getElementById("cars");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Cars (In Millions)";
    document.querySelector('.country1').textContent = "China";
    document.querySelector('.per1').textContent = "25.72";
    document.querySelector('.country2').textContent = "US";
    document.querySelector('.per2').textContent = "10.88";
    document.querySelector('.country3').textContent = "Japan";
    document.querySelector('.per3').textContent = " 9.68";
    document.querySelector('.country4').textContent = "Germany";
    document.querySelector('.per4').textContent = "4.66";
    document.querySelector('.country5').textContent = "India";
    document.querySelector('.per5').textContent = "4.51";
    document.querySelector('.country6').textContent = "Mexico";
    document.querySelector('.per6').textContent = "3.99";
    document.querySelector('.country7').textContent = "South-korea";
    document.querySelector('.per7').textContent = "3.95";
    document.querySelector('.country8').textContent = "Brazil";
    document.querySelector('.per8').textContent = "2.94";
    document.querySelector('.country9').textContent = "Spain";
    document.querySelector('.per9').textContent = "2.82";
    document.querySelector('.country10').textContent = "France";
    document.querySelector('.per10').textContent = "2.20";
    document.querySelector("path#_x3C_Japan_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_US_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_China_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Germany_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_South-Korea_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Spain_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_France_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Mexico_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_India_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Brazil_x3E_.st0").style.fill="#D3E1F2";
}

function showMobiles() {
    reset();
    document.getElementById("cars").classList.remove("clicked");
    var button = document.getElementById("mobiles");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Mobiles (In Billions)";
    document.querySelector('.country1').textContent = "China";
    document.querySelector('.per1').textContent = "1.61";
    document.querySelector('.country2').textContent = "India";
    document.querySelector('.per2').textContent = "1.51";
    document.querySelector('.country3').textContent = "Indonesia";
    document.querySelector('.per3').textContent = " 0.385";
    document.querySelector('.country4').textContent = "US";
    document.querySelector('.per4').textContent = "0.38";
    document.querySelector('.country5').textContent = "Brazil";
    document.querySelector('.per5').textContent = "0.284";
    document.querySelector('.country6').textContent = "Russia";
    document.querySelector('.per6').textContent = "0.256";
    document.querySelector('.country7').textContent = "Pakistan";
    document.querySelector('.per7').textContent = "0.194";
    document.querySelector('.country8').textContent = "Nigeria";
    document.querySelector('.per8').textContent = "0.19";
    document.querySelector('.country9').textContent = "Bangladesh";
    document.querySelector('.per9').textContent = "0.18";
    document.querySelector('.country10').textContent = "Japan";
    document.querySelector('.per10').textContent = "0.146";
    document.querySelector("path#_x3C_Japan_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_US_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_China_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Germany_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_South-Korea_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Spain_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_France_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Mexico_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_India_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Brazil_x3E_.st0").style.fill="#D3E1F2";
}

function showGeo() {
    document.getElementById("Ec").classList.remove("clicked");
    document.getElementById("Dem").classList.remove("clicked");
    document.getElementById("Soc").classList.remove("clicked");
    document.querySelector('.subTopics').style.display = 'none';
    document.querySelector('.subTopicsSoc').style.display = 'none';
    document.querySelector('.subTopicsGeo').style.display = 'block';
    reset();
    var button = document.getElementById("Geo");
    button.classList.add("clicked");
}

function showAreas() {
    reset();
    document.getElementById("resources").classList.remove("clicked");
    var button = document.getElementById("areas");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Areas (In millions km2)";
    document.querySelector('.country1').textContent = "Russia";
    document.querySelector('.per1').textContent = "17.09";
    document.querySelector('.country2').textContent = "Canada";
    document.querySelector('.per2').textContent = "9.984";
    document.querySelector('.country3').textContent = "US";
    document.querySelector('.per3').textContent = " 9.883";
    document.querySelector('.country4').textContent = "China";
    document.querySelector('.per4').textContent = "9.596";
    document.querySelector('.country5').textContent = "Brazil";
    document.querySelector('.per5').textContent = "8.515";
    document.querySelector('.country6').textContent = "Australia";
    document.querySelector('.per6').textContent = "7.741";
    document.querySelector('.country7').textContent = "Argentina";
    document.querySelector('.per7').textContent = "3.745";
    document.querySelector('.country8').textContent = "India";
    document.querySelector('.per8').textContent = "3.287";
    document.querySelector('.country9').textContent = "Kazakhstan";
    document.querySelector('.per9').textContent = "2.724";
    document.querySelector('.country10').textContent = "Algeria";
    document.querySelector('.per10').textContent = "2.381";
    document.querySelector("path#_x3C_Australia_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_US_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_China_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Argentina_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Russia_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Kazakhstan_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Algeria_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Canada_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_India_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Brazil_x3E_.st0").style.fill="#D3E1F2";
}

function showResources() {
    reset();
    document.getElementById("areas").classList.remove("clicked");
    var button = document.getElementById("resources");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Resources (In trillions)";
    document.querySelector('.country1').textContent = "Russia";
    document.querySelector('.per1').textContent = "75";
    document.querySelector('.country2').textContent = "US";
    document.querySelector('.per2').textContent = "45";
    document.querySelector('.country3').textContent = "Saudi Arabia";
    document.querySelector('.per3').textContent = " 34.4";
    document.querySelector('.country4').textContent = "Canada";
    document.querySelector('.per4').textContent = "33.2";
    document.querySelector('.country5').textContent = "Iran";
    document.querySelector('.per5').textContent = "27.3";
    document.querySelector('.country6').textContent = "China";
    document.querySelector('.per6').textContent = "23";
    document.querySelector('.country7').textContent = "Brazil";
    document.querySelector('.per7').textContent = "21.8";
    document.querySelector('.country8').textContent = "Australia";
    document.querySelector('.per8').textContent = "19.9";
    document.querySelector('.country9').textContent = "Iraq";
    document.querySelector('.per9').textContent = "15.9";
    document.querySelector('.country10').textContent = "Venezuela";
    document.querySelector('.per10').textContent = "14.3";
    document.querySelector("path#_x3C_Australia_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_US_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_China_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Iraq_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Russia_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Iran_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Venezuela_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Canada_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Saudi-Arabia_x3E_.st0").style.fill="#D3E1F2";
    document.querySelector("path#_x3C_Brazil_x3E_.st0").style.fill="#D3E1F2";
}

// Function to reset changes made by showEc()
function reset() {
    document.querySelector('.list').style.display = 'none'; // Hide the list
    var countries = document.querySelectorAll(".st0"); // Select all elements with class .st0
    countries.forEach(function(country) {
        country.style.fill = ""; // Reset fill color for each element
    }); 
}

function showList() {
    var statBars = document.querySelectorAll('.statBar');
    if (statBars[0].classList.contains('collapse')) {
        // If the first statBar contains the "collapse" class
        statBars.forEach(function(statBar) {
            statBar.classList.remove('collapse');
            statBar.style.display = 'flex';
        });
        document.querySelector('.listButton').textContent = 'Hide List';
    } else {
        // If the first statBar does not contain the "collapse" class
        statBars.forEach(function(statBar) {
            statBar.classList.add('collapse');
        });
        document.querySelector('.listButton').textContent = 'Show List';
    }
}

