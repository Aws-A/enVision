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

function showEco() {
    document.getElementById("Dem").classList.remove("clicked");
    document.getElementById("Soc").classList.remove("clicked");
    document.getElementById("Geo").classList.remove("clicked");
    document.getElementById("Heal").classList.remove("clicked");
    document.getElementById("Env").classList.remove("clicked");
    document.getElementById("Tech").classList.remove("clicked");
    document.querySelector('.subTopicsDem').style.display = 'none';
    document.querySelector('.subTopicsSoc').style.display = 'none';
    document.querySelector('.subTopicsGeo').style.display = 'none';
    document.querySelector('.subTopicsHeal').style.display = 'none';
    document.querySelector('.subTopicsEnv').style.display = 'none';
    document.querySelector('.subTopicsTech').style.display = 'none';
    document.querySelector('.subTopicsEco').style.display = 'block';
    reset();
    var button = document.getElementById("Eco");
    button.classList.add("clicked");
}

function showGDP() {
    reset();
    document.getElementById("inf").classList.remove("clicked");
    document.getElementById("tra").classList.remove("clicked");
    document.getElementById("grow").classList.remove("clicked");
    document.getElementById("deb").classList.remove("clicked");
    var button = document.getElementById("gdp");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "GDP (USD in Trillions-2025)";
    document.querySelector('.country1').textContent = "USA";
    document.querySelector('.per1').textContent = "$30.51";
    document.querySelector('.country2').textContent = "China";
    document.querySelector('.per2').textContent = "	$19.23";
    document.querySelector('.country3').textContent = "Germany";
    document.querySelector('.per3').textContent = "$4.74";
    document.querySelector('.country4').textContent = "India";
    document.querySelector('.per4').textContent = "$4.19";
    document.querySelector('.country5').textContent = "Japan";
    document.querySelector('.per5').textContent = "$4.18";
    document.querySelector('.country6').textContent = "UK";
    document.querySelector('.per6').textContent = "$3.84";
    document.querySelector('.country7').textContent = "France ";
    document.querySelector('.per7').textContent = "$3.21";
    document.querySelector('.country8').textContent = "Italy";
    document.querySelector('.per8').textContent = "	$2.42";
    document.querySelector('.country9').textContent = "Canada";
    document.querySelector('.per9').textContent = "$2.23";
    document.querySelector('.country10').textContent = "Brazil";
    document.querySelector('.per10').textContent = "$2.12";
    document.querySelector("path#US.st0").style.fill="#5DAAE3";
    document.querySelector("path#China.st0").style.fill="#5DAAE3";
    document.querySelector("path#Germany.st0").style.fill="#5DAAE3";
    document.querySelector("path#India.st0").style.fill="#5DAAE3";
    document.querySelector("path#Japan.st0").style.fill="#5DAAE3";
    document.querySelector("path#France.st0").style.fill="#5DAAE3";
    document.querySelector("path#UK.st0").style.fill="#5DAAE3";
    document.querySelector("path#Italy.st0").style.fill="#5DAAE3";
    document.querySelector("path#Canada.st0").style.fill="#5DAAE3";
    document.querySelector("path#Brazil.st0").style.fill="#5DAAE3";
}

function showInf() {
    reset();
    document.getElementById("gdp").classList.remove("clicked");
    document.getElementById("tra").classList.remove("clicked");
    document.getElementById("grow").classList.remove("clicked");
    document.getElementById("deb").classList.remove("clicked");
    var button = document.getElementById("inf");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Inflation Rate (percentage- 2024)";
    document.querySelector('.country1').textContent = "Venzeula";
    document.querySelector('.per1').textContent = "400.0%";
    document.querySelector('.country2').textContent = "Zimbabwe";
    document.querySelector('.per2').textContent = "172.2%";
    document.querySelector('.country3').textContent = "Argentina";
    document.querySelector('.per3').textContent = "98.6%";
    document.querySelector('.country4').textContent = "Sudan";
    document.querySelector('.per4').textContent = "71.6%";
    document.querySelector('.country5').textContent = "Turkey";
    document.querySelector('.per5').textContent = "50.6%";
    document.querySelector('.country6').textContent = "Ghana";
    document.querySelector('.per6').textContent = "45.4%";
    document.querySelector('.country7').textContent = "Haiti";
    document.querySelector('.per7').textContent = "44.5%";
    document.querySelector('.country8').textContent = "Suriname";
    document.querySelector('.per8').textContent = "$2.42";
    document.querySelector('.country9').textContent = "Iran";
    document.querySelector('.per9').textContent = "42.5%";
    document.querySelector('.country10').textContent = "Sierra Leone";
    document.querySelector('.per10').textContent = "37.8%";
    document.querySelector("path#Venezuela.st0").style.fill="#5DAAE3";
    document.querySelector("path#Zimbabwe.st0").style.fill="#5DAAE3";
    document.querySelector("path#Argentina.st0").style.fill="#5DAAE3";
    document.querySelector("path#Sudan.st0").style.fill="#5DAAE3";
    document.querySelector("path#Turkey.st0").style.fill="#5DAAE3";
    document.querySelector("path#Ghana.st0").style.fill="#5DAAE3";
    document.querySelector("path#Haiti.st0").style.fill="#5DAAE3";
    document.querySelector("path#Suriname.st0").style.fill="#5DAAE3";
    document.querySelector("path#Iran.st0").style.fill="#5DAAE3";
    document.querySelector("path#Sierra-Leone.st0").style.fill="#5DAAE3";
}

function showTra() {
    reset();
    document.getElementById("gdp").classList.remove("clicked");
    document.getElementById("inf").classList.remove("clicked");
    document.getElementById("grow").classList.remove("clicked");
    document.getElementById("deb").classList.remove("clicked");
    var button = document.getElementById("tra");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Trade Surplus (USD Billion - 2023)";
    document.querySelector('.country1').textContent = "China";
    document.querySelector('.per1').textContent = "	$386.0";
    document.querySelector('.country2').textContent = "	Singapore";
    document.querySelector('.per2').textContent = "	$187.3";
    document.querySelector('.country3').textContent = "Germany";
    document.querySelector('.per3').textContent = "	$185.5";
    document.querySelector('.country4').textContent = "Ireland";
    document.querySelector('.per4').textContent = "$182.9";
    document.querySelector('.country5').textContent = "Netherlands";
    document.querySelector('.per5').textContent = "$81.3";
    document.querySelector('.country6').textContent = "Russia";
    document.querySelector('.per6').textContent = "$80.0";
    document.querySelector('.country7').textContent = "Norway";
    document.querySelector('.per7').textContent = "	$70.0";
    document.querySelector('.country8').textContent = "Switzerland";
    document.querySelector('.per8').textContent = "$65.0";
    document.querySelector('.country9').textContent = "South Korea";
    document.querySelector('.per9').textContent = "$58.0";
    document.querySelector('.country10').textContent = "Taiwan";
    document.querySelector('.per10').textContent = "$55.0";
    document.querySelector("path#China.st0").style.fill="#5DAAE3";
    document.querySelector("path#Singapore.st0").style.fill="#5DAAE3";
    document.querySelector("path#Germany.st0").style.fill="#5DAAE3";
    document.querySelector("path#Ireland.st0").style.fill="#5DAAE3";
    document.querySelector("path#Netherlands.st0").style.fill="#5DAAE3";
    document.querySelector("path#Russia.st0").style.fill="#5DAAE3";
    document.querySelector("path#Norway.st0").style.fill="#5DAAE3";
    document.querySelector("path#Switzerland.st0").style.fill="#5DAAE3";
    document.querySelector("path#South-Korea.st0").style.fill="#5DAAE3";
    document.querySelector("path#Taiwan.st0").style.fill="#5DAAE3";
}

function showGrow() {
    reset();
    document.getElementById("gdp").classList.remove("clicked");
    document.getElementById("inf").classList.remove("clicked");
    document.getElementById("tra").classList.remove("clicked");
    document.getElementById("deb").classList.remove("clicked");
    var button = document.getElementById("grow");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Growth Rates (Percentage - 2025)";
    document.querySelector('.country1').textContent = "Guyana";
    document.querySelector('.per1').textContent = "16.3%";
    document.querySelector('.country2').textContent = "	Niger";
    document.querySelector('.per2').textContent = "11.5%";
    document.querySelector('.country3').textContent = "South Sudan";
    document.querySelector('.per3').textContent = "10.9%";
    document.querySelector('.country4').textContent = "Senegal";
    document.querySelector('.per4').textContent = "8.3%";
    document.querySelector('.country5').textContent = "Rwanda";
    document.querySelector('.per5').textContent = "7.9%";
    document.querySelector('.country6').textContent = "Ethiopia";
    document.querySelector('.per6').textContent = "6.2%";
    document.querySelector('.country7').textContent = "India";
    document.querySelector('.per7').textContent = "6.2%";
    document.querySelector('.country8').textContent = "Philippines";
    document.querySelector('.per8').textContent = "6.1%";
    document.querySelector('.country9').textContent = "Vietnam";
    document.querySelector('.per9').textContent = "6.0%";
    document.querySelector('.country10').textContent = "Bangladesh";
    document.querySelector('.per10').textContent = "5.9%";
    document.querySelector("path#Guyana.st0").style.fill="#5DAAE3";
    document.querySelector("path#Niger.st0").style.fill="#5DAAE3";
    document.querySelector("path#South-Sudan.st0").style.fill="#5DAAE3";
    document.querySelector("path#Senegal.st0").style.fill="#5DAAE3";
    document.querySelector("path#Rwanda.st0").style.fill="#5DAAE3";
    document.querySelector("path#India.st0").style.fill="#5DAAE3";
    document.querySelector("path#Ethiopia.st0").style.fill="#5DAAE3";
    document.querySelector("path#Philippines.st0").style.fill="#5DAAE3";
    document.querySelector("path#Vietnam.st0").style.fill="#5DAAE3";
    document.querySelector("path#Bangladesh.st0").style.fill="#5DAAE3";
}

function showDeb() {
    reset();
    document.getElementById("gdp").classList.remove("clicked");
    document.getElementById("inf").classList.remove("clicked");
    document.getElementById("tra").classList.remove("clicked");
    document.getElementById("grow").classList.remove("clicked");
    var button = document.getElementById("deb");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Debt to GDP (Ratio - 2025)";
    document.querySelector('.country1').textContent = "Lebanon";
    document.querySelector('.per1').textContent = "357.7%";
    document.querySelector('.country2').textContent = "Japan";
    document.querySelector('.per2').textContent = "256.3%";
    document.querySelector('.country3').textContent = "Sudan";
    document.querySelector('.per3').textContent = "189.6%";
    document.querySelector('.country4').textContent = "Eritrea";
    document.querySelector('.per4').textContent = "179.7%";
    document.querySelector('.country5').textContent = "Singapore";
    document.querySelector('.per5').textContent = "174.8%";
    document.querySelector('.country6').textContent = "Greece";
    document.querySelector('.per6').textContent = "163.9%";
    document.querySelector('.country7').textContent = "Argentina";
    document.querySelector('.per7').textContent = "155.4%";
    document.querySelector('.country8').textContent = "Italy";
    document.querySelector('.per8').textContent = "134.8%";
    document.querySelector('.country9').textContent = "Venezuela";
    document.querySelector('.per9').textContent = "133.6%";
    document.querySelector('.country10').textContent = "Cape Verde";
    document.querySelector('.per10').textContent = "124.0%";
    document.querySelector("path#Lebanon.st0").style.fill="#5DAAE3";
    document.querySelector("path#Japan.st0").style.fill="#5DAAE3";
    document.querySelector("path#Sudan.st0").style.fill="#5DAAE3";
    document.querySelector("path#Eritrea.st0").style.fill="#5DAAE3";
    document.querySelector("path#Singapore.st0").style.fill="#5DAAE3";
    document.querySelector("path#Greece.st0").style.fill="#5DAAE3";
    document.querySelector("path#Argentina.st0").style.fill="#5DAAE3";
    document.querySelector("path#Italy.st0").style.fill="#5DAAE3";
    document.querySelector("path#Venezuela.st0").style.fill="#5DAAE3";
    document.querySelector("path#Cape-Verde.st0").style.fill="#5DAAE3";
}

function showDem() {
    document.getElementById("Eco").classList.remove("clicked");
    document.getElementById("Soc").classList.remove("clicked");
    document.getElementById("Geo").classList.remove("clicked");
    document.getElementById("Heal").classList.remove("clicked");
    document.getElementById("Env").classList.remove("clicked");
    document.getElementById("Tech").classList.remove("clicked");
    document.querySelector('.subTopicsEco').style.display = 'none';
    document.querySelector('.subTopicsSoc').style.display = 'none';
    document.querySelector('.subTopicsGeo').style.display = 'none';
    document.querySelector('.subTopicsHeal').style.display = 'none';
    document.querySelector('.subTopicsEnv').style.display = 'none';
    document.querySelector('.subTopicsTech').style.display = 'none';
    document.querySelector('.subTopicsDem').style.display = 'block';
    reset();
    var button = document.getElementById("Dem");
    button.classList.add("clicked");
}

function showPop() {
    document.getElementById("age").classList.remove("clicked");
    document.getElementById("fer").classList.remove("clicked");
    document.getElementById("img").classList.remove("clicked");
    document.getElementById("urba").classList.remove("clicked");
    var button = document.getElementById("pop");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Population (In Millions)";
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
    document.querySelector("path#US.st0").style.fill="#5DAAE3";
    document.querySelector("path#China.st0").style.fill="#5DAAE3";
    document.querySelector("path#Mexico.st0").style.fill="#5DAAE3";
    document.querySelector("path#Indonesia.st0").style.fill="#5DAAE3";
    document.querySelector("path#India.st0").style.fill="#5DAAE3";
    document.querySelector("path#Pakistan.st0").style.fill="#5DAAE3";
    document.querySelector("path#Nigeria.st0").style.fill="#5DAAE3";
    document.querySelector("path#Brazil.st0").style.fill="#5DAAE3";
    document.querySelector("path#Russia.st0").style.fill="#5DAAE3";
    document.querySelector("path#Bangladesh.st0").style.fill="#5DAAE3";
}

function showAge() {
    document.getElementById("pop").classList.remove("clicked");
    document.getElementById("fer").classList.remove("clicked");
    document.getElementById("img").classList.remove("clicked");
    document.getElementById("urba").classList.remove("clicked");
    var button = document.getElementById("age");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = " Age Structure (Ratio - 2025)";
    document.querySelector('.country1').textContent = "Monaco";
    document.querySelector('.per1').textContent = "36.4%";
    document.querySelector('.country2').textContent = "Japan";
    document.querySelector('.per2').textContent = "	29.6%";
    document.querySelector('.country3').textContent = "Puerto Rico";
    document.querySelector('.per3').textContent = "24.2%";
    document.querySelector('.country4').textContent = "Italy";
    document.querySelector('.per4').textContent = "	24.2%";
    document.querySelector('.country5').textContent = "Portugal";
    document.querySelector('.per5').textContent = "24.1%";
    document.querySelector('.country6').textContent = "Finland";
    document.querySelector('.per6').textContent = "23.6%";
    document.querySelector('.country7').textContent = "Greece";
    document.querySelector('.per7').textContent = "23.5%";
    document.querySelector('.country8').textContent = "Croatia";
    document.querySelector('.per8').textContent = "22.8%";
    document.querySelector('.country9').textContent = "Germany";
    document.querySelector('.per9').textContent = "22.8%";
    document.querySelector('.country10').textContent = "Serbia";
    document.querySelector('.per10').textContent = "22.3%";
    document.querySelector("path#Monaco.st0").style.fill="#5DAAE3";
    document.querySelector("path#Japan.st0").style.fill="#5DAAE3";
    document.querySelector("path#Puerto-Rico.st0").style.fill="#5DAAE3";
    document.querySelector("path#Italy.st0").style.fill="#5DAAE3";
    document.querySelector("path#Portugal.st0").style.fill="#5DAAE3";
    document.querySelector("path#Finland.st0").style.fill="#5DAAE3";
    document.querySelector("path#Greece.st0").style.fill="#5DAAE3";
    document.querySelector("path#Croatia.st0").style.fill="#5DAAE3";
    document.querySelector("path#Germany.st0").style.fill="#5DAAE3";
    document.querySelector("path#Serbia.st0").style.fill="#5DAAE3";
}

function showFer() {
    document.getElementById("age").classList.remove("clicked");
    document.getElementById("fer").classList.remove("clicked");
    document.getElementById("img").classList.remove("clicked");
    document.getElementById("urba").classList.remove("clicked");
    var button = document.getElementById("age");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Fertility Rate (births per woman - 2025)";
    document.querySelector('.country1').textContent = "Niger";
    document.querySelector('.per1').textContent = "6.64";
    document.querySelector('.country2').textContent = "Angola";
    document.querySelector('.per2').textContent = "5.70";
    document.querySelector('.country3').textContent = "DRC";
    document.querySelector('.per3').textContent = "5.49";
    document.querySelector('.country4').textContent = "Mali";
    document.querySelector('.per4').textContent = "5.35";
    document.querySelector('.country5').textContent = "Benin";
    document.querySelector('.per5').textContent = "5.34";
    document.querySelector('.country6').textContent = "Chad";
    document.querySelector('.per6').textContent = "5.24";
    document.querySelector('.country7').textContent = "Uganda";
    document.querySelector('.per7').textContent = "5.17";
    document.querySelector('.country8').textContent = "Somalia";
    document.querySelector('.per8').textContent = "5.12";
    document.querySelector('.country9').textContent = "South Sudan";
    document.querySelector('.per9').textContent = "5.09";
    document.querySelector('.country10').textContent = "Burundi";
    document.querySelector('.per10').textContent = "4.90";
    document.querySelector("path#Niger.st0").style.fill="#5DAAE3";
    document.querySelector("path#Angola.st0").style.fill="#5DAAE3";
    document.querySelector("path#DRC.st0").style.fill="#5DAAE3";
    document.querySelector("path#Mali.st0").style.fill="#5DAAE3";
    document.querySelector("path#Benin.st0").style.fill="#5DAAE3";
    document.querySelector("path#Chad.st0").style.fill="#5DAAE3";
    document.querySelector("path#Uganda.st0").style.fill="#5DAAE3";
    document.querySelector("path#Somalia.st0").style.fill="#5DAAE3";
    document.querySelector("path#South-Sudan.st0").style.fill="#5DAAE3";
    document.querySelector("path#Burundi.st0").style.fill="#5DAAE3";
}

function showImg() {
    document.getElementById("pop").classList.remove("clicked");
    document.getElementById("age").classList.remove("clicked");
    document.getElementById("fer").classList.remove("clicked");
    document.getElementById("urba").classList.remove("clicked");
    var button = document.getElementById("img");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "migration (number per 1000 in 2024)";
    document.querySelector('.country1').textContent = "US";
    document.querySelector('.per1').textContent = "50.6";
    document.querySelector('.country2').textContent = "Germany";
    document.querySelector('.per2').textContent = "15.8";
    document.querySelector('.country3').textContent = "Saudi Arabia";
    document.querySelector('.per3').textContent = "13.5";
    document.querySelector('.country4').textContent = "Russia";
    document.querySelector('.per4').textContent = "11.6";
    document.querySelector('.country5').textContent = "UK";
    document.querySelector('.per5').textContent = "9.4";
    document.querySelector('.country6').textContent = "UAE";
    document.querySelector('.per6').textContent = "8.7";
    document.querySelector('.country7').textContent = "France";
    document.querySelector('.per7').textContent = "8.5";
    document.querySelector('.country8').textContent = "Canada";
    document.querySelector('.per8').textContent = "8.0";
    document.querySelector('.country9').textContent = "Australia";
    document.querySelector('.per9').textContent = "7.7";
    document.querySelector('.country10').textContent = "Spain";
    document.querySelector('.per10').textContent = "6.8";
    document.querySelector("path#US.st0").style.fill="#5DAAE3";
    document.querySelector("path#Germany.st0").style.fill="#5DAAE3";
    document.querySelector("path#Saudi-Arabia.st0").style.fill="#5DAAE3";
    document.querySelector("path#Russia.st0").style.fill="#5DAAE3";
    document.querySelector("path#UK.st0").style.fill="#5DAAE3";
    document.querySelector("path#UAE.st0").style.fill="#5DAAE3";
    document.querySelector("path#France.st0").style.fill="#5DAAE3";
    document.querySelector("path#Canada.st0").style.fill="#5DAAE3";
    document.querySelector("path#Australia.st0").style.fill="#5DAAE3";
    document.querySelector("path#Spain.st0").style.fill="#5DAAE3";
}

function showUrba() {
    document.getElementById("pop").classList.remove("clicked");
    document.getElementById("age").classList.remove("clicked");
    document.getElementById("fer").classList.remove("clicked");
    document.getElementById("img").classList.remove("clicked");
    var button = document.getElementById("urba");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Urban Land Area ((% of Total Land)";
    document.querySelector('.country1').textContent = "Bahrain";
    document.querySelector('.per1').textContent = "69.85%";
    document.querySelector('.country2').textContent = "Netherlands";
    document.querySelector('.per2').textContent = "28.28%";
    document.querySelector('.country3').textContent = "Germany";
    document.querySelector('.per3').textContent = "27.53%";
    document.querySelector('.country4').textContent = "Italy";
    document.querySelector('.per4').textContent = "20.09%";
    document.querySelector('.country5').textContent = "Switzerland";
    document.querySelector('.per5').textContent = "17.54%";
    document.querySelector('.country6').textContent = "Japan";
    document.querySelector('.per6').textContent = "14.29%";
    document.querySelector('.country7').textContent = "France";
    document.querySelector('.per7').textContent = "12.38%";
    document.querySelector('.country8').textContent = "UK";
    document.querySelector('.per8').textContent = "5.94%";
    document.querySelector('.country9').textContent = "Spain";
    document.querySelector('.per9').textContent = "9.25%";
    document.querySelector('.country10').textContent = "U.S";
    document.querySelector('.per10').textContent = "2.62%";
    document.querySelector("path#Bahrain.st0").style.fill="#5DAAE3";
    document.querySelector("path#Netherlands.st0").style.fill="#5DAAE3";
    document.querySelector("path#Germany.st0").style.fill="#5DAAE3";
    document.querySelector("path#Italy.st0").style.fill="#5DAAE3";
    document.querySelector("path#Switzerland.st0").style.fill="#5DAAE3";
    document.querySelector("path#Japan.st0").style.fill="#5DAAE3";
    document.querySelector("path#France.st0").style.fill="#5DAAE3";
    document.querySelector("path#UK.st0").style.fill="#5DAAE3";
    document.querySelector("path#Spain.st0").style.fill="#5DAAE3";
    document.querySelector("path#US.st0").style.fill="#5DAAE3";
}

function showSoc() {
    document.getElementById("Eco").classList.remove("clicked");
    document.getElementById("Dem").classList.remove("clicked");
    document.getElementById("Geo").classList.remove("clicked");
    document.getElementById("Heal").classList.remove("clicked");
    document.getElementById("Env").classList.remove("clicked");
    document.getElementById("Tech").classList.remove("clicked");
    document.querySelector('.subTopicsEco').style.display = 'none';
    document.querySelector('.subTopicsDem').style.display = 'none';
    document.querySelector('.subTopicsGeo').style.display = 'none';
    document.querySelector('.subTopicsHeal').style.display = 'none';
    document.querySelector('.subTopicsEnv').style.display = 'none';
    document.querySelector('.subTopicsTech').style.display = 'none';
    document.querySelector('.subTopicsSoc').style.display = 'block';
    reset();
    var button = document.getElementById("Soc");
    button.classList.add("clicked");
}

function showCars() {
    reset();
    document.getElementById("edu").classList.remove("clicked");
    document.getElementById("lit").classList.remove("clicked");
    document.getElementById("cri").classList.remove("clicked");
    document.getElementById("unemp").classList.remove("clicked");
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
    document.querySelector("path#Japan.st0").style.fill="#5DAAE3";
    document.querySelector("path#US.st0").style.fill="#5DAAE3";
    document.querySelector("path#China.st0").style.fill="#5DAAE3";
    document.querySelector("path#Germany.st0").style.fill="#5DAAE3";
    document.querySelector("path#South-Korea.st0").style.fill="#5DAAE3";
    document.querySelector("path#Spain.st0").style.fill="#5DAAE3";
    document.querySelector("path#France.st0").style.fill="#5DAAE3";
    document.querySelector("path#Mexico.st0").style.fill="#5DAAE3";
    document.querySelector("path#India.st0").style.fill="#5DAAE3";
    document.querySelector("path#Brazil.st0").style.fill="#5DAAE3";
}

function showEdu() {
    reset();
    document.getElementById("cars").classList.remove("clicked");
    document.getElementById("lit").classList.remove("clicked");
    document.getElementById("cri").classList.remove("clicked");
    document.getElementById("unemp").classList.remove("clicked");
    var button = document.getElementById("edu");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Tertiary Education Attainment";
    document.querySelector('.country1').textContent = "South Korea";
    document.querySelector('.per1').textContent = "70.0%";
    document.querySelector('.country2').textContent = "Canada";
    document.querySelector('.per2').textContent = "66.4%";
    document.querySelector('.country3').textContent = "Japan";
    document.querySelector('.per3').textContent = "64.0%";
    document.querySelector('.country4').textContent = "Luxembourg";
    document.querySelector('.per4').textContent = "51.3%";
    document.querySelector('.country5').textContent = "US";
    document.querySelector('.per5').textContent = "50.1%";
    document.querySelector('.country6').textContent = "Ireland";
    document.querySelector('.per6').textContent = "49.9%";
    document.querySelector('.country7').textContent = "Australia";
    document.querySelector('.per7').textContent = "49.3%";
    document.querySelector('.country8').textContent = "UK";
    document.querySelector('.per8').textContent = "48.1%";
    document.querySelector('.country9').textContent = "Finland";
    document.querySelector('.per9').textContent = "47.5%";
    document.querySelector('.country10').textContent = "Norway";
    document.querySelector('.per10').textContent = "46.5%";
    document.querySelector("path#South-Korea.st0").style.fill="#5DAAE3";
    document.querySelector("path#Canada.st0").style.fill="#5DAAE3";
    document.querySelector("path#Japan.st0").style.fill="#5DAAE3";
    document.querySelector("path#Luxembourg.st0").style.fill="#5DAAE3";
    document.querySelector("path#US.st0").style.fill="#5DAAE3";
    document.querySelector("path#Ireland.st0").style.fill="#5DAAE3";
    document.querySelector("path#Australia.st0").style.fill="#5DAAE3";
    document.querySelector("path#UK.st0").style.fill="#5DAAE3";
    document.querySelector("path#Finland.st0").style.fill="#5DAAE3";
    document.querySelector("path#Norway.st0").style.fill="#5DAAE3";
}

function showLit() {
    reset();
    document.getElementById("cars").classList.remove("clicked");
    document.getElementById("edu").classList.remove("clicked");
    document.getElementById("cri").classList.remove("clicked");
    document.getElementById("unemp").classList.remove("clicked");
    var button = document.getElementById("lit");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Global Literacy Rate";
    document.querySelector('.country1').textContent = "Finland";
    document.querySelector('.per1').textContent = "100.0%";
    document.querySelector('.country2').textContent = "Norway";
    document.querySelector('.per2').textContent = "100.0%";
    document.querySelector('.country3').textContent = "Luxembourg";
    document.querySelector('.per3').textContent = "100.0%";
    document.querySelector('.country4').textContent = "Andorra";
    document.querySelector('.per4').textContent = "100.0%";
    document.querySelector('.country5').textContent = "Greenland";
    document.querySelector('.per5').textContent = "100.0%";
    document.querySelector('.country6').textContent = "Liechtenstein";
    document.querySelector('.per6').textContent = "100.0%";
    document.querySelector('.country7').textContent = "Uzbekistan";
    document.querySelector('.per7').textContent = "100.0%";
    document.querySelector('.country8').textContent = "Ukraine";
    document.querySelector('.per8').textContent = "100.0%";
    document.querySelector('.country9').textContent = "Kazakhstan";
    document.querySelector('.per9').textContent = "100.0%";
    document.querySelector('.country10').textContent = "Azerbaijan";
    document.querySelector('.per10').textContent = "100.0%";
    document.querySelector("path#Finland.st0").style.fill="#5DAAE3";
    document.querySelector("path#Norway.st0").style.fill="#5DAAE3";
    document.querySelector("path#Luxembourg.st0").style.fill="#5DAAE3";
    document.querySelector("path#Andorra.st0").style.fill="#5DAAE3";
    document.querySelector("path#Greenland.st0").style.fill="#5DAAE3";
    document.querySelector("path#Liechtenstein.st0").style.fill="#5DAAE3";
    document.querySelector("path#Uzbekistan.st0").style.fill="#5DAAE3";
    document.querySelector("path#Ukraine.st0").style.fill="#5DAAE3";
    document.querySelector("path#Kazakhstan.st0").style.fill="#5DAAE3";
    document.querySelector("path#Azerbaijan.st0").style.fill="#5DAAE3";
    document.querySelector("path#Norway.st0").style.fill="#5DAAE3";
}

function showCri() {
    reset();
    document.getElementById("cars").classList.remove("clicked");
    document.getElementById("edu").classList.remove("clicked");
    document.getElementById("lit").classList.remove("clicked");
    document.getElementById("unemp").classList.remove("clicked");
    var button = document.getElementById("cri");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Crime Index (2025)";
    document.querySelector('.country1').textContent = "Venezuela";
    document.querySelector('.per1').textContent = "83.76";
    document.querySelector('.country2').textContent = "	Papua New Guinea";
    document.querySelector('.per2').textContent = "	80.79";
    document.querySelector('.country3').textContent = "South Africa";
    document.querySelector('.per3').textContent = "76.86";
    document.querySelector('.country4').textContent = "Afghanistan";
    document.querySelector('.per4').textContent = "76.31";
    document.querySelector('.country5').textContent = "Honduras";
    document.querySelector('.per5').textContent = "74.54";
    document.querySelector('.country6').textContent = "Trinidad & Tobago";
    document.querySelector('.per6').textContent = "71.63";
    document.querySelector('.country7').textContent = "Guyana";
    document.querySelector('.per7').textContent = "68.74";
    document.querySelector('.country8').textContent = "ElSalvador";
    document.querySelector('.per8').textContent = "67.79";
    document.querySelector('.country9').textContent = "Brazil";
    document.querySelector('.per9').textContent = "	67.49";
    document.querySelector('.country10').textContent = "Jamaica";
    document.querySelector('.per10').textContent = "67.42";
    document.querySelector("path#Venezuela.st0").style.fill="#5DAAE3";
    document.querySelector("path#	Papua-New-Guinea.st0").style.fill="#5DAAE3";
    document.querySelector("path#South-Africa.st0").style.fill="#5DAAE3";
    document.querySelector("path#Afghanistan.st0").style.fill="#5DAAE3";
    document.querySelector("path#Honduras.st0").style.fill="#5DAAE3";
    document.querySelector("path#Trinidad&Tobago.st0").style.fill="#5DAAE3";
    document.querySelector("path#Guyana.st0").style.fill="#5DAAE3";
    document.querySelector("path#ElSalvador.st0").style.fill="#5DAAE3";
    document.querySelector("path#Brazil.st0").style.fill="#5DAAE3";
    document.querySelector("path#Jamaica.st0").style.fill="#5DAAE3";
}

function showUnemp() {
    reset();
    document.getElementById("cars").classList.remove("clicked");
    document.getElementById("edu").classList.remove("clicked");
    document.getElementById("lit").classList.remove("clicked");
    document.getElementById("cri").classList.remove("clicked");
    var button = document.getElementById("unemp");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Crime Index (2025)";
    document.querySelector('.country1').textContent = "Puerto Rico";
    document.querySelector('.per1').textContent = "	42.9";
    document.querySelector('.country2').textContent = "	Swaziland";
    document.querySelector('.per2').textContent = "34.4";
    document.querySelector('.country3').textContent = "South Africa";
    document.querySelector('.per3').textContent = "33.2";
    document.querySelector('.country4').textContent = "Djibouti";
    document.querySelector('.per4').textContent = "25.9";
    document.querySelector('.country5').textContent = "Equatorial Guinea";
    document.querySelector('.per5').textContent = "25.0";
    document.querySelector('.country6').textContent = "Botswana";
    document.querySelector('.per6').textContent = "	23.1";
    document.querySelector('.country7').textContent = "Palestine";
    document.querySelector('.per7').textContent = "24.4";
    document.querySelector('.country8').textContent = "Gabon";
    document.querySelector('.per8').textContent = "20.1";
    document.querySelector('.country9').textContent = "Namibia";
    document.querySelector('.per9').textContent = "19.1";
    document.querySelector('.country10').textContent = "Kosovo";
    document.querySelector('.per10').textContent = "30.5";
    document.querySelector("path#Puerto-Rico.st0").style.fill="#5DAAE3";
    document.querySelector("path#Swaziland.st0").style.fill="#5DAAE3";
    document.querySelector("path#South-Africa.st0").style.fill="#5DAAE3";
    document.querySelector("path#Djibouti.st0").style.fill="#5DAAE3";
    document.querySelector("path#Equatorial-Guinea.st0").style.fill="#5DAAE3";
    document.querySelector("path#Botswana.st0").style.fill="#5DAAE3";
    document.querySelector("path#Palestine.st0").style.fill="#5DAAE3";
    document.querySelector("path#Gabon.st0").style.fill="#5DAAE3";
    document.querySelector("path#Namibia.st0").style.fill="#5DAAE3";
    document.querySelector("path#Kosovo.st0").style.fill="#5DAAE3";
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
    document.querySelector("path#Japan.st0").style.fill="#5DAAE3";
    document.querySelector("path#Switzerland.st0").style.fill="#5DAAE3";
    //document.querySelector("path#Singapore.st0").style.fill="#5DAAE3";
    document.querySelector("path#Italy.st0").style.fill="#5DAAE3";
    document.querySelector("path#South-Korea.st0").style.fill="#5DAAE3";
    document.querySelector("path#Spain.st0").style.fill="#5DAAE3";
    //document.querySelector("path#Malta.st0").style.fill="#5DAAE3";
    document.querySelector("path#Australia.st0").style.fill="#5DAAE3";
    document.querySelector("path#Sweden.st0").style.fill="#5DAAE3";
    document.querySelector("path#Norway.st0").style.fill="#5DAAE3";
}

function showGeo() {
    document.getElementById("Eco").classList.remove("clicked");
    document.getElementById("Dem").classList.remove("clicked");
    document.getElementById("Soc").classList.remove("clicked");
    document.getElementById("Heal").classList.remove("clicked");
    document.getElementById("Env").classList.remove("clicked");
    document.getElementById("Tech").classList.remove("clicked");
    document.querySelector('.subTopicsEco').style.display = 'none';
    document.querySelector('.subTopicsDem').style.display = 'none';
    document.querySelector('.subTopicsSoc').style.display = 'none';
    document.querySelector('.subTopicsHeal').style.display = 'none';
    document.querySelector('.subTopicsEnv').style.display = 'none';
    document.querySelector('.subTopicsTech').style.display = 'none';
    document.querySelector('.subTopicsGeo').style.display = 'block';
    reset();
    var button = document.getElementById("Geo");
    button.classList.add("clicked");
}

function showAreas() {
    reset();
    document.getElementById("resources").classList.remove("clicked");
    document.getElementById("clim").classList.remove("clicked");
    document.getElementById("wat").classList.remove("clicked");
    document.getElementById("coast").classList.remove("clicked");
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
    document.querySelector("path#Australia.st0").style.fill="#5DAAE3";
    document.querySelector("path#US.st0").style.fill="#5DAAE3";
    document.querySelector("path#China.st0").style.fill="#5DAAE3";
    document.querySelector("path#Argentina.st0").style.fill="#5DAAE3";
    document.querySelector("path#Russia.st0").style.fill="#5DAAE3";
    document.querySelector("path#Kazakhstan.st0").style.fill="#5DAAE3";
    document.querySelector("path#Algeria.st0").style.fill="#5DAAE3";
    document.querySelector("path#Canada.st0").style.fill="#5DAAE3";
    document.querySelector("path#India.st0").style.fill="#5DAAE3";
    document.querySelector("path#Brazil.st0").style.fill="#5DAAE3";
}

function showResources() {
    reset();
    document.getElementById("areas").classList.remove("clicked");
    document.getElementById("clim").classList.remove("clicked");
    document.getElementById("wat").classList.remove("clicked");
    document.getElementById("coast").classList.remove("clicked");
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
    document.querySelector("path#Australia.st0").style.fill="#5DAAE3";
    document.querySelector("path#US.st0").style.fill="#5DAAE3";
    document.querySelector("path#China.st0").style.fill="#5DAAE3";
    document.querySelector("path#Iraq.st0").style.fill="#5DAAE3";
    document.querySelector("path#Russia.st0").style.fill="#5DAAE3";
    document.querySelector("path#Iran.st0").style.fill="#5DAAE3";
    document.querySelector("path#Venezuela.st0").style.fill="#5DAAE3";
    document.querySelector("path#Canada.st0").style.fill="#5DAAE3";
    document.querySelector("path#Saudi-Arabia.st0").style.fill="#5DAAE3";
    document.querySelector("path#Brazil.st0").style.fill="#5DAAE3";
}

function showClim() {
    reset();
    document.getElementById("areas").classList.remove("clicked");
    document.getElementById("resources").classList.remove("clicked");
    document.getElementById("wat").classList.remove("clicked");
    document.getElementById("coast").classList.remove("clicked");
    var button = document.getElementById("clim");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Resources (In trillions)";
    document.querySelector('.country1').textContent = "Denmark";
    document.querySelector('.per1').textContent = "75";
    document.querySelector('.country2').textContent = "Sweden";
    document.querySelector('.per2').textContent = "45";
    document.querySelector('.country3').textContent = "Chile";
    document.querySelector('.per3').textContent = " 34.4";
    document.querySelector('.country4').textContent = "Morocco";
    document.querySelector('.per4').textContent = "33.2";
    document.querySelector('.country5').textContent = "India";
    document.querySelector('.per5').textContent = "27.3";
    document.querySelector('.country6').textContent = "Norway";
    document.querySelector('.per6').textContent = "23";
    document.querySelector('.country7').textContent = "UK";
    document.querySelector('.per7').textContent = "21.8";
    document.querySelector('.country8').textContent = "Lithuania";
    document.querySelector('.per8').textContent = "19.9";
    document.querySelector('.country9').textContent = "Finland";
    document.querySelector('.per9').textContent = "15.9";
    document.querySelector('.country10').textContent = "Germany";
    document.querySelector('.per10').textContent = "14.3";
    document.querySelector("path#Denmark.st0").style.fill="#5DAAE3";
    document.querySelector("path#Sweden.st0").style.fill="#5DAAE3";
    document.querySelector("path#Chile.st0").style.fill="#5DAAE3";
    document.querySelector("path#Morocco.st0").style.fill="#5DAAE3";
    document.querySelector("path#India.st0").style.fill="#5DAAE3";
    document.querySelector("path#Norway.st0").style.fill="#5DAAE3";
    document.querySelector("path#UK.st0").style.fill="#5DAAE3";
    document.querySelector("path#Lithuania.st0").style.fill="#5DAAE3";
    document.querySelector("path#Finland.st0").style.fill="#5DAAE3";
    document.querySelector("path#Germany.st0").style.fill="#5DAAE3";
}

function showWat() {
    reset();
    document.getElementById("areas").classList.remove("clicked");
    document.getElementById("resources").classList.remove("clicked");
    document.getElementById("clim").classList.remove("clicked");
    document.getElementById("coast").classList.remove("clicked");
    var button = document.getElementById("wat");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Water Area (In Thousands)";
    document.querySelector('.country1').textContent = "Canada";
    document.querySelector('.per1').textContent = "891";
    document.querySelector('.country2').textContent = "Russia";
    document.querySelector('.per2').textContent = "720";
    document.querySelector('.country3').textContent = "US";
    document.querySelector('.per3').textContent = "664";
    document.querySelector('.country4').textContent = "India";
    document.querySelector('.per4').textContent = "314";
    document.querySelector('.country5').textContent = "Sudan";
    document.querySelector('.per5').textContent = "129";
    document.querySelector('.country6').textContent = "Iran";
    document.querySelector('.per6').textContent = "116";
    document.querySelector('.country7').textContent = "Ethiopia";
    document.querySelector('.per7').textContent = "104";
    document.querySelector('.country8').textContent = "Colombia";
    document.querySelector('.per8').textContent = "100";
    document.querySelector('.country9').textContent = "Indonesia";
    document.querySelector('.per9').textContent = "93";
    document.querySelector('.country10').textContent = "China";
    document.querySelector('.per10').textContent = "82";
    document.querySelector("path#Canada.st0").style.fill="#5DAAE3";
    document.querySelector("path#Russia.st0").style.fill="#5DAAE3";
    document.querySelector("path#US.st0").style.fill="#5DAAE3";
    document.querySelector("path#India.st0").style.fill="#5DAAE3";
    document.querySelector("path#Sudan.st0").style.fill="#5DAAE3";
    document.querySelector("path#Iran.st0").style.fill="#5DAAE3";
    document.querySelector("path#Ethiopia.st0").style.fill="#5DAAE3";
    document.querySelector("path#Colombia.st0").style.fill="#5DAAE3";
    document.querySelector("path#Indonesia.st0").style.fill="#5DAAE3";
    document.querySelector("path#China.st0").style.fill="#5DAAE3";
}

function showCoast() {
    reset();
    document.getElementById("areas").classList.remove("clicked");
    document.getElementById("resources").classList.remove("clicked");
    document.getElementById("clim").classList.remove("clicked");
    document.getElementById("wat").classList.remove("clicked");
    var button = document.getElementById("coast");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Coastline Length (In Thousands)";
    document.querySelector('.country1').textContent = "Canada";
    document.querySelector('.per1').textContent = "202";
    document.querySelector('.country2').textContent = "Norway";
    document.querySelector('.per2').textContent = "58";
    document.querySelector('.country3').textContent = "Indonesia";
    document.querySelector('.per3').textContent = "54";
    document.querySelector('.country4').textContent = "Russia";
    document.querySelector('.per4').textContent = "37";
    document.querySelector('.country5').textContent = "Philippines";
    document.querySelector('.per5').textContent = "36";
    document.querySelector('.country6').textContent = "Japan";
    document.querySelector('.per6').textContent = "29";
    document.querySelector('.country7').textContent = "Australia";
    document.querySelector('.per7').textContent = "25";
    document.querySelector('.country8').textContent = "US";
    document.querySelector('.per8').textContent = "19";
    document.querySelector('.country9').textContent = "New Zealand";
    document.querySelector('.per9').textContent = "15";
    document.querySelector('.country10').textContent = "China";
    document.querySelector('.per10').textContent = "14";
    document.querySelector("path#Canada.st0").style.fill="#5DAAE3";
    document.querySelector("path#Norway.st0").style.fill="#5DAAE3";
    document.querySelector("path#Indonesia.st0").style.fill="#5DAAE3";
    document.querySelector("path#Russia.st0").style.fill="#5DAAE3";
    document.querySelector("path#Philippines.st0").style.fill="#5DAAE3";
    document.querySelector("path#Japan.st0").style.fill="#5DAAE3";
    document.querySelector("path#Australia.st0").style.fill="#5DAAE3";
    document.querySelector("path#US.st0").style.fill="#5DAAE3";
    document.querySelector("path#New-Zealand.st0").style.fill="#5DAAE3";
    document.querySelector("path#China.st0").style.fill="#5DAAE3";
}

function showHeal() {
    document.getElementById("Eco").classList.remove("clicked");
    document.getElementById("Dem").classList.remove("clicked");
    document.getElementById("Soc").classList.remove("clicked");
    document.getElementById("Geo").classList.remove("clicked");
    document.getElementById("Env").classList.remove("clicked");
    document.getElementById("Tech").classList.remove("clicked");
    document.querySelector('.subTopicsEco').style.display = 'none';
    document.querySelector('.subTopicsDem').style.display = 'none';
    document.querySelector('.subTopicsSoc').style.display = 'none';
    document.querySelector('.subTopicsGeo').style.display = 'none';
    document.querySelector('.subTopicsEnv').style.display = 'none';
    document.querySelector('.subTopicsTech').style.display = 'none';
    document.querySelector('.subTopicsHeal').style.display = 'block';
    reset();
    var button = document.getElementById("Heal");
    button.classList.add("clicked");
}

function showVac() {
    reset();
    document.getElementById("exp").classList.remove("clicked");
    document.getElementById("obs").classList.remove("clicked");
    document.getElementById("lifeEx").classList.remove("clicked");
    document.getElementById("doc").classList.remove("clicked");
    var button = document.getElementById("vac");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';
    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Vaccination Rate (Coverage in 2025)";
    document.querySelector('.country1').textContent = "China";
    document.querySelector('.per1').textContent = "99%";
    document.querySelector('.country2').textContent = "Bangladesh";
    document.querySelector('.per2').textContent = "98%";
    document.querySelector('.country3').textContent = "Rwanda";
    document.querySelector('.per3').textContent = "98%";
    document.querySelector('.country4').textContent = "Vietnam";
    document.querySelector('.per4').textContent = "97%";
    document.querySelector('.country5').textContent = "Sri-Lanka";
    document.querySelector('.per5').textContent = "97%";
    document.querySelector('.country6').textContent = "Nepal";
    document.querySelector('.per6').textContent = "96%";
    document.querySelector('.country7').textContent = "Ethiopia";
    document.querySelector('.per7').textContent = "95%";
    document.querySelector('.country8').textContent = "Cambodia";
    document.querySelector('.per8').textContent = "95%";
    document.querySelector('.country9').textContent = "Tanzania";
    document.querySelector('.per9').textContent = "94%";
    document.querySelector('.country10').textContent = "Zambia";
    document.querySelector('.per10').textContent = "94%";
    document.querySelector("path#China.st0").style.fill="#5DAAE3";
    document.querySelector("path#Bangladesh.st0").style.fill="#5DAAE3";
    document.querySelector("path#Rwanda.st0").style.fill="#5DAAE3";
    document.querySelector("path#Vietnam.st0").style.fill="#5DAAE3";
    document.querySelector("path#Sri-Lanka.st0").style.fill="#5DAAE3";
    document.querySelector("path#Nepal.st0").style.fill="#5DAAE3";
    document.querySelector("path#Ethiopia.st0").style.fill="#5DAAE3";
    document.querySelector("path#Cambodia.st0").style.fill="#5DAAE3";
    document.querySelector("path#Tanzania.st0").style.fill="#5DAAE3";
    document.querySelector("path#Zambia.st0").style.fill="#5DAAE3";
}

function showExp() {
    reset();
    document.getElementById("vac").classList.remove("clicked");
    document.getElementById("obs").classList.remove("clicked");
    document.getElementById("lifeEx").classList.remove("clicked");
    document.getElementById("doc").classList.remove("clicked");
    var button = document.getElementById("exp");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';

    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Healthcare Expenditure per Capita (USD, 2025)";
    document.querySelector('.country1').textContent = "United States";
    document.querySelector('.per1').textContent = "$12,555";
    document.querySelector('.country2').textContent = "Switzerland";
    document.querySelector('.per2').textContent = "$8,049";
    document.querySelector('.country3').textContent = "Germany";
    document.querySelector('.per3').textContent = "$6,646";
    document.querySelector('.country4').textContent = "France";
    document.querySelector('.per4').textContent = "$6,115";
    document.querySelector('.country5').textContent = "Canada";
    document.querySelector('.per5').textContent = "$5,905";
    document.querySelector('.country6').textContent = "Australia";
    document.querySelector('.per6').textContent = "$5,627";
    document.querySelector('.country7').textContent = "Belgium";
    document.querySelector('.per7').textContent = "$5,407";
    document.querySelector('.country8').textContent = "United Kingdom";
    document.querySelector('.per8').textContent = "$5,387";
    document.querySelector('.country9').textContent = "Japan";
    document.querySelector('.per9').textContent = "$4,666";
    document.querySelector('.country10').textContent = "Netherlands";
    document.querySelector('.per10').textContent = "$4,500";

    // Optional: Highlight countries on map if path IDs exist
    document.querySelector("path#US.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Switzerland.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Germany.st0").style.fill = "#5DAAE3";
    document.querySelector("path#France.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Canada.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Australia.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Belgium.st0").style.fill = "#5DAAE3";
    document.querySelector("path#UK.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Japan.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Netherlands.st0").style.fill = "#5DAAE3";
}

function showObs() {
    reset();
    document.getElementById("exp").classList.remove("clicked");
    document.getElementById("doc").classList.remove("clicked");
    document.getElementById("lifeEx").classList.remove("clicked");
    document.getElementById("vac").classList.remove("clicked");
    var button = document.getElementById("obs");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';

    document.querySelector('.titleP').textContent = "Obesity Rates (2025)";
    document.querySelector('.country1').textContent = "United States";
    document.querySelector('.per1').textContent = "36.2%";
    document.querySelector('.country2').textContent = "Mexico";
    document.querySelector('.per2').textContent = "32.4%";
    document.querySelector('.country3').textContent = "New Zealand";
    document.querySelector('.per3').textContent = "30.8%";
    document.querySelector('.country4').textContent = "Hungary";
    document.querySelector('.per4').textContent = "30.0%";
    document.querySelector('.country5').textContent = "Australia";
    document.querySelector('.per5').textContent = "29.0%";
    document.querySelector('.country6').textContent = "United Kingdom";
    document.querySelector('.per6').textContent = "28.1%";
    document.querySelector('.country7').textContent = "Canada";
    document.querySelector('.per7').textContent = "27.4%";
    document.querySelector('.country8').textContent = "Ireland";
    document.querySelector('.per8').textContent = "25.3%";
    document.querySelector('.country9').textContent = "Germany";
    document.querySelector('.per9').textContent = "23.6%";
    document.querySelector('.country10').textContent = "France";
    document.querySelector('.per10').textContent = "21.6%";

    document.querySelector("path#US.st0").style.fill = "#F3C6C6";
    document.querySelector("path#Mexico.st0").style.fill = "#F3C6C6";
    document.querySelector("path#New_Zealand.st0").style.fill = "#F3C6C6";
    document.querySelector("path#Hungary.st0").style.fill = "#F3C6C6";
    document.querySelector("path#Australia.st0").style.fill = "#F3C6C6";
    document.querySelector("path#UK.st0").style.fill = "#F3C6C6";
    document.querySelector("path#Canada.st0").style.fill = "#F3C6C6";
    document.querySelector("path#Ireland.st0").style.fill = "#F3C6C6";
    document.querySelector("path#Germany.st0").style.fill = "#F3C6C6";
    document.querySelector("path#France.st0").style.fill = "#F3C6C6";
}

function showDoc() {
    reset();
    document.getElementById("exp").classList.remove("clicked");
    document.getElementById("obs").classList.remove("clicked");
    document.getElementById("lifeEx").classList.remove("clicked");
    document.getElementById("vac").classList.remove("clicked");
    var button = document.getElementById("doc");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';

    document.querySelector('.titleP').textContent = "Doctors per 10,000 People (2025)";
    document.querySelector('.country1').textContent = "Austria";
    document.querySelector('.per1').textContent = "54.5";
    document.querySelector('.country2').textContent = "Norway";
    document.querySelector('.per2').textContent = "53.6";
    document.querySelector('.country3').textContent = "Germany";
    document.querySelector('.per3').textContent = "51.2";
    document.querySelector('.country4').textContent = "Switzerland";
    document.querySelector('.per4').textContent = "49.7";
    document.querySelector('.country5').textContent = "Sweden";
    document.querySelector('.per5').textContent = "48.4";
    document.querySelector('.country6').textContent = "Italy";
    document.querySelector('.per6').textContent = "45.3";
    document.querySelector('.country7').textContent = "Spain";
    document.querySelector('.per7').textContent = "43.5";
    document.querySelector('.country8').textContent = "France";
    document.querySelector('.per8').textContent = "42.1";
    document.querySelector('.country9').textContent = "UK";
    document.querySelector('.per9').textContent = "39.0";
    document.querySelector('.country10').textContent = "Canada";
    document.querySelector('.per10').textContent = "34.6";

    document.querySelector("path#Austria.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Norway.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Germany.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Switzerland.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Sweden.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Italy.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Spain.st0").style.fill = "#5DAAE3";
    document.querySelector("path#France.st0").style.fill = "#5DAAE3";
    document.querySelector("path#UK.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Canada.st0").style.fill = "#5DAAE3";
}

function showEnv() {
    document.getElementById("Eco").classList.remove("clicked");
    document.getElementById("Dem").classList.remove("clicked");
    document.getElementById("Soc").classList.remove("clicked");
    document.getElementById("Geo").classList.remove("clicked");
    document.getElementById("Heal").classList.remove("clicked");
    document.getElementById("Tech").classList.remove("clicked");
    document.querySelector('.subTopicsEco').style.display = 'none';
    document.querySelector('.subTopicsDem').style.display = 'none';
    document.querySelector('.subTopicsSoc').style.display = 'none';
    document.querySelector('.subTopicsGeo').style.display = 'none';
    document.querySelector('.subTopicsHeal').style.display = 'none';
    document.querySelector('.subTopicsTech').style.display = 'none';
    document.querySelector('.subTopicsEnv').style.display = 'block';
    reset();
    var button = document.getElementById("Env");
    button.classList.add("clicked");
}

function showEm() {
    reset();
    document.getElementById("en").classList.remove("clicked");
    document.getElementById("ref").classList.remove("clicked");
    document.getElementById("air").classList.remove("clicked");
    document.getElementById("rec").classList.remove("clicked");
    var button = document.getElementById("em");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';

    document.querySelector('.titleP').textContent = "CO₂ Emissions (Million Tons, 2023)";
    document.querySelector('.country1').textContent = "China";
    document.querySelector('.per1').textContent = "11,467";
    document.querySelector('.country2').textContent = "United States";
    document.querySelector('.per2').textContent = "5,068";
    document.querySelector('.country3').textContent = "India";
    document.querySelector('.per3').textContent = "2,888";
    document.querySelector('.country4').textContent = "Russia";
    document.querySelector('.per4').textContent = "1,474";
    document.querySelector('.country5').textContent = "Japan";
    document.querySelector('.per5').textContent = "1,086";
    document.querySelector('.country6').textContent = "Iran";
    document.querySelector('.per6').textContent = "721";
    document.querySelector('.country7').textContent = "Germany";
    document.querySelector('.per7').textContent = "665";
    document.querySelector('.country8').textContent = "South Korea";
    document.querySelector('.per8').textContent = "659";
    document.querySelector('.country9').textContent = "Saudi Arabia";
    document.querySelector('.per9').textContent = "627";
    document.querySelector('.country10').textContent = "Indonesia";
    document.querySelector('.per10').textContent = "615";

    document.querySelector("path#China.st0").style.fill = "#5DAAE3";
    document.querySelector("path#US.st0").style.fill = "#5DAAE3";
    document.querySelector("path#India.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Russia.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Japan.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Iran.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Germany.st0").style.fill = "#5DAAE3";
    document.querySelector("path#South_Korea.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Saudi_Arabia.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Indonesia.st0").style.fill = "#5DAAE3";
}

function showEn() {
    reset();
    document.getElementById("em").classList.remove("clicked");
    document.getElementById("ref").classList.remove("clicked");
    document.getElementById("air").classList.remove("clicked");
    document.getElementById("rec").classList.remove("clicked");
    var button = document.getElementById("en");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';

    document.querySelector('.titleP').textContent = "Renewable Energy Production (TWh, 2023)";
    document.querySelector('.country1').textContent = "China";
    document.querySelector('.per1').textContent = "2,780";
    document.querySelector('.country2').textContent = "United States";
    document.querySelector('.per2').textContent = "1,250";
    document.querySelector('.country3').textContent = "Brazil";
    document.querySelector('.per3').textContent = "695";
    document.querySelector('.country4').textContent = "India";
    document.querySelector('.per4').textContent = "350";
    document.querySelector('.country5').textContent = "Germany";
    document.querySelector('.per5').textContent = "245";
    document.querySelector('.country6').textContent = "Canada";
    document.querySelector('.per6').textContent = "240";
    document.querySelector('.country7').textContent = "Russia";
    document.querySelector('.per7').textContent = "160";
    document.querySelector('.country8').textContent = "France";
    document.querySelector('.per8').textContent = "158";
    document.querySelector('.country9').textContent = "UK";
    document.querySelector('.per9').textContent = "145";
    document.querySelector('.country10').textContent = "Spain";
    document.querySelector('.per10').textContent = "138";

    document.querySelector("path#China.st0").style.fill = "#5DAAE3";
    document.querySelector("path#US.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Brazil.st0").style.fill = "#5DAAE3";
    document.querySelector("path#India.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Germany.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Canada.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Russia.st0").style.fill = "#5DAAE3";
    document.querySelector("path#France.st0").style.fill = "#5DAAE3";
    document.querySelector("path#UK.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Spain.st0").style.fill = "#5DAAE3";
}

function showRef() {
    reset();
    document.getElementById("em").classList.remove("clicked");
    document.getElementById("en").classList.remove("clicked");
    document.getElementById("air").classList.remove("clicked");
    document.getElementById("rec").classList.remove("clicked");
    var button = document.getElementById("ref");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';

    document.querySelector('.titleP').textContent = "Refugees Hosted (Millions, 2023)";
    document.querySelector('.country1').textContent = "Turkey";
    document.querySelector('.per1').textContent = "3.6";
    document.querySelector('.country2').textContent = "Iran";
    document.querySelector('.per2').textContent = "3.4";
    document.querySelector('.country3').textContent = "Colombia";
    document.querySelector('.per3').textContent = "2.5";
    document.querySelector('.country4').textContent = "Germany";
    document.querySelector('.per4').textContent = "2.2";
    document.querySelector('.country5').textContent = "Pakistan";
    document.querySelector('.per5').textContent = "1.7";
    document.querySelector('.country6').textContent = "Uganda";
    document.querySelector('.per6').textContent = "1.5";
    document.querySelector('.country7').textContent = "Russia";
    document.querySelector('.per7').textContent = "1.4";
    document.querySelector('.country8').textContent = "United States";
    document.querySelector('.per8').textContent = "1.1";
    document.querySelector('.country9').textContent = "Ethiopia";
    document.querySelector('.per9').textContent = "1.0";
    document.querySelector('.country10').textContent = "Sudan";
    document.querySelector('.per10').textContent = "0.9";

    document.querySelector("path#Turkey.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Iran.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Colombia.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Germany.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Pakistan.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Uganda.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Russia.st0").style.fill = "#5DAAE3";
    document.querySelector("path#US.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Ethiopia.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Sudan.st0").style.fill = "#5DAAE3";
}

function showAir() {
    reset();
    document.getElementById("em").classList.remove("clicked");
    document.getElementById("en").classList.remove("clicked");
    document.getElementById("ref").classList.remove("clicked");
    document.getElementById("rec").classList.remove("clicked");
    var button = document.getElementById("air");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';

    document.querySelector('.titleP').textContent = "Air Quality Index (Worst 10 Countries, 2023)";
    document.querySelector('.country1').textContent = "Bangladesh";
    document.querySelector('.per1').textContent = "162";
    document.querySelector('.country2').textContent = "Pakistan";
    document.querySelector('.per2').textContent = "153";
    document.querySelector('.country3').textContent = "India";
    document.querySelector('.per3').textContent = "151";
    document.querySelector('.country4').textContent = "Chad";
    document.querySelector('.per4').textContent = "146";
    document.querySelector('.country5').textContent = "Tajikistan";
    document.querySelector('.per5').textContent = "144";
    document.querySelector('.country6').textContent = "Uzbekistan";
    document.querySelector('.per6').textContent = "140";
    document.querySelector('.country7').textContent = "Iraq";
    document.querySelector('.per7').textContent = "138";
    document.querySelector('.country8').textContent = "Nepal";
    document.querySelector('.per8').textContent = "137";
    document.querySelector('.country9').textContent = "Egypt";
    document.querySelector('.per9').textContent = "134";
    document.querySelector('.country10').textContent = "Rwanda";
    document.querySelector('.per10').textContent = "132";

    document.querySelector("path#Bangladesh.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Pakistan.st0").style.fill = "#5DAAE3";
    document.querySelector("path#India.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Chad.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Tajikistan.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Uzbekistan.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Iraq.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Nepal.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Egypt.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Rwanda.st0").style.fill = "#5DAAE3";
}

function showRec() {
    reset();
    document.getElementById("em").classList.remove("clicked");
    document.getElementById("en").classList.remove("clicked");
    document.getElementById("ref").classList.remove("clicked");
    document.getElementById("air").classList.remove("clicked");
    var button = document.getElementById("rec");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';

    document.querySelector('.titleP').textContent = "Recycling Rates (Top 10 Countries, 2023)";
    document.querySelector('.country1').textContent = "Germany";
    document.querySelector('.per1').textContent = "66%";
    document.querySelector('.country2').textContent = "Austria";
    document.querySelector('.per2').textContent = "58%";
    document.querySelector('.country3').textContent = "South Korea";
    document.querySelector('.per3').textContent = "54%";
    document.querySelector('.country4').textContent = "Wales";
    document.querySelector('.per4').textContent = "52%";
    document.querySelector('.country5').textContent = "Switzerland";
    document.querySelector('.per5').textContent = "51%";
    document.querySelector('.country6').textContent = "Netherlands";
    document.querySelector('.per6').textContent = "50%";
    document.querySelector('.country7').textContent = "Slovenia";
    document.querySelector('.per7').textContent = "49%";
    document.querySelector('.country8').textContent = "Belgium";
    document.querySelector('.per8').textContent = "48%";
    document.querySelector('.country9').textContent = "Taiwan";
    document.querySelector('.per9').textContent = "47%";
    document.querySelector('.country10').textContent = "Sweden";
    document.querySelector('.per10').textContent = "46%";

    document.querySelector("path#Germany.st0").style.fill = "#D4FAD7";
    document.querySelector("path#Austria.st0").style.fill = "#D4FAD7";
    document.querySelector("path#SouthKorea.st0").style.fill = "#D4FAD7";
    document.querySelector("path#UnitedKingdom.st0").style.fill = "#D4FAD7"; // For Wales
    document.querySelector("path#Switzerland.st0").style.fill = "#D4FAD7";
    document.querySelector("path#Netherlands.st0").style.fill = "#D4FAD7";
    document.querySelector("path#Slovenia.st0").style.fill = "#D4FAD7";
    document.querySelector("path#Belgium.st0").style.fill = "#D4FAD7";
    document.querySelector("path#Taiwan.st0").style.fill = "#D4FAD7";
    document.querySelector("path#Sweden.st0").style.fill = "#D4FAD7";
}

function showTech() {
    document.getElementById("Eco").classList.remove("clicked");
    document.getElementById("Dem").classList.remove("clicked");
    document.getElementById("Soc").classList.remove("clicked");
    document.getElementById("Geo").classList.remove("clicked");
    document.getElementById("Heal").classList.remove("clicked");
    document.getElementById("Env").classList.remove("clicked");
    document.querySelector('.subTopicsEco').style.display = 'none';
    document.querySelector('.subTopicsDem').style.display = 'none';
    document.querySelector('.subTopicsSoc').style.display = 'none';
    document.querySelector('.subTopicsGeo').style.display = 'none';
    document.querySelector('.subTopicsHeal').style.display = 'none';
    document.querySelector('.subTopicsEnv').style.display = 'none';
    document.querySelector('.subTopicsTech').style.display = 'block';
    reset();
    var button = document.getElementById("Tech");
    button.classList.add("clicked");
}

function showInter() {
    reset();
    document.getElementById("mob").classList.remove("clicked");
    document.getElementById("rd").classList.remove("clicked");
    document.getElementById("AI").classList.remove("clicked");
    document.getElementById("pat").classList.remove("clicked");
    var button = document.getElementById("inter");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';

    document.querySelector('.titleP').textContent = "Internet Access (% of Population, 2023)";
    document.querySelector('.country1').textContent = "Iceland";
    document.querySelector('.per1').textContent = "99.0%";
    document.querySelector('.country2').textContent = "Norway";
    document.querySelector('.per2').textContent = "98.5%";
    document.querySelector('.country3').textContent = "Sweden";
    document.querySelector('.per3').textContent = "98.0%";
    document.querySelector('.country4').textContent = "Denmark";
    document.querySelector('.per4').textContent = "97.9%";
    document.querySelector('.country5').textContent = "United Arab Emirates";
    document.querySelector('.per5').textContent = "97.8%";
    document.querySelector('.country6').textContent = "Switzerland";
    document.querySelector('.per6').textContent = "97.6%";
    document.querySelector('.country7').textContent = "Netherlands";
    document.querySelector('.per7').textContent = "97.4%";
    document.querySelector('.country8').textContent = "South Korea";
    document.querySelector('.per8').textContent = "97.3%";
    document.querySelector('.country9').textContent = "Finland";
    document.querySelector('.per9').textContent = "97.1%";
    document.querySelector('.country10').textContent = "Luxembourg";
    document.querySelector('.per10').textContent = "97.0%";

    document.querySelector("path#Iceland.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Norway.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Sweden.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Denmark.st0").style.fill = "#5DAAE3";
    document.querySelector("path#UAE.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Switzerland.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Netherlands.st0").style.fill = "#5DAAE3";
    document.querySelector("path#SouthKorea.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Finland.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Luxembourg.st0").style.fill = "#5DAAE3";
}

function showMobiles() {
    reset();
    document.getElementById("inter").classList.remove("clicked");
    document.getElementById("rd").classList.remove("clicked");
    document.getElementById("AI").classList.remove("clicked");
    document.getElementById("pat").classList.remove("clicked");
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
    document.querySelector("path#Japan.st0").style.fill="#5DAAE3";
    document.querySelector("path#US.st0").style.fill="#5DAAE3";
    document.querySelector("path#China.st0").style.fill="#5DAAE3";
    document.querySelector("path#Germany.st0").style.fill="#5DAAE3";
    document.querySelector("path#South-Korea.st0").style.fill="#5DAAE3";
    document.querySelector("path#Spain.st0").style.fill="#5DAAE3";
    document.querySelector("path#France.st0").style.fill="#5DAAE3";
    document.querySelector("path#Mexico.st0").style.fill="#5DAAE3";
    document.querySelector("path#India.st0").style.fill="#5DAAE3";
    document.querySelector("path#Brazil.st0").style.fill="#5DAAE3";
}

function showRD() {
    reset();
    document.getElementById("inter").classList.remove("clicked");
    document.getElementById("mob").classList.remove("clicked");
    document.getElementById("AI").classList.remove("clicked");
    document.getElementById("pat").classList.remove("clicked");
    var button = document.getElementById("rd");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';

    document.querySelector('.titleP').textContent = "R&D Spending (Billion USD, 2023)";
    document.querySelector('.country1').textContent = "United States";
    document.querySelector('.per1').textContent = "$679.4B";
    document.querySelector('.country2').textContent = "China";
    document.querySelector('.per2').textContent = "$456.0B";
    document.querySelector('.country3').textContent = "Japan";
    document.querySelector('.per3').textContent = "$173.6B";
    document.querySelector('.country4').textContent = "Germany";
    document.querySelector('.per4').textContent = "$144.2B";
    document.querySelector('.country5').textContent = "South Korea";
    document.querySelector('.per5').textContent = "$112.3B";
    document.querySelector('.country6').textContent = "France";
    document.querySelector('.per6').textContent = "$72.8B";
    document.querySelector('.country7').textContent = "India";
    document.querySelector('.per7').textContent = "$66.5B";
    document.querySelector('.country8').textContent = "United Kingdom";
    document.querySelector('.per8').textContent = "$63.2B";
    document.querySelector('.country9').textContent = "Russia";
    document.querySelector('.per9').textContent = "$40.8B";
    document.querySelector('.country10').textContent = "Canada";
    document.querySelector('.per10').textContent = "$36.9B";

    document.querySelector("path#US.st0").style.fill = "#5DAAE3";
    document.querySelector("path#China.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Japan.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Germany.st0").style.fill = "#5DAAE3";
    document.querySelector("path#SouthKorea.st0").style.fill = "#5DAAE3";
    document.querySelector("path#France.st0").style.fill = "#5DAAE3";
    document.querySelector("path#India.st0").style.fill = "#5DAAE3";
    document.querySelector("path#UK.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Russia.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Canada.st0").style.fill = "#5DAAE3";
}

function showAI() {
    reset();
    document.getElementById("inter").classList.remove("clicked");
    document.getElementById("mob").classList.remove("clicked");
    document.getElementById("rd").classList.remove("clicked");
    document.getElementById("pat").classList.remove("clicked");
    var button = document.getElementById("ai");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';

    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "AI Researchers Score (2023)";
    document.querySelector('.country1').textContent = "United States";
    document.querySelector('.per1').textContent = "70.06";
    document.querySelector('.country2').textContent = "China";
    document.querySelector('.per2').textContent = "40.17";
    document.querySelector('.country3').textContent = "United Kingdom";
    document.querySelector('.per3').textContent = "27.21";
    document.querySelector('.country4').textContent = "India";
    document.querySelector('.per4').textContent = "25.54";
    document.querySelector('.country5').textContent = "United Arab Emirates";
    document.querySelector('.per5').textContent = "22.72";
    document.querySelector('.country6').textContent = "France";
    document.querySelector('.per6').textContent = "22.54";
    document.querySelector('.country7').textContent = "South Korea";
    document.querySelector('.per7').textContent = "20.48";
    document.querySelector('.country8').textContent = "Germany";
    document.querySelector('.per8').textContent = "18.49";
    document.querySelector('.country9').textContent = "Japan";
    document.querySelector('.per9').textContent = "18.47";
    document.querySelector('.country10').textContent = "Singapore";
    document.querySelector('.per10').textContent = "18.15";

    // Optional: Highlight countries on map if path IDs exist
    document.querySelector("path#US.st0").style.fill = "#5DAAE3";
    document.querySelector("path#China.st0").style.fill = "#5DAAE3";
    document.querySelector("path#UK.st0").style.fill = "#5DAAE3";
    document.querySelector("path#India.st0").style.fill = "#5DAAE3";
    document.querySelector("path#UAE.st0").style.fill = "#5DAAE3";
    document.querySelector("path#France.st0").style.fill = "#5DAAE3";
    document.querySelector("path#SouthKorea.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Germany.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Japan.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Singapore.st0").style.fill = "#5DAAE3";
}

function showPat() {
    reset();
    document.getElementById("inter").classList.remove("clicked");
    document.getElementById("mob").classList.remove("clicked");
    document.getElementById("rd").classList.remove("clicked");
    document.getElementById("AI").classList.remove("clicked");
    var button = document.getElementById("pat");
    button.classList.add("clicked");
    document.querySelector('.list').style.display = 'block';

    // Update the content of the selected elements
    document.querySelector('.titleP').textContent = "Patent Applications Filed (2023)";
    document.querySelector('.country1').textContent = "China";
    document.querySelector('.per1').textContent = "1,642,582";
    document.querySelector('.country2').textContent = "United States";
    document.querySelector('.per2').textContent = "518,791";
    document.querySelector('.country3').textContent = "Japan";
    document.querySelector('.per3').textContent = "414,479";
    document.querySelector('.country4').textContent = "South Korea";
    document.querySelector('.per4').textContent = "288,001";
    document.querySelector('.country5').textContent = "Germany";
    document.querySelector('.per5').textContent = "133,140";
    document.querySelector('.country6').textContent = "India";
    document.querySelector('.per6').textContent = "64,510";
    document.querySelector('.country7').textContent = "France";
    document.querySelector('.per7').textContent = "52,684";
    document.querySelector('.country8').textContent = "United Kingdom";
    document.querySelector('.per8').textContent = "48,297";
    document.querySelector('.country9').textContent = "Russia";
    document.querySelector('.per9').textContent = "41,975";
    document.querySelector('.country10').textContent = "Canada";
    document.querySelector('.per10').textContent = "26,864";

    // Optional: Highlight countries on map if path IDs exist
    document.querySelector("path#China.st0").style.fill = "#5DAAE3";
    document.querySelector("path#US.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Japan.st0").style.fill = "#5DAAE3";
    document.querySelector("path#SouthKorea.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Germany.st0").style.fill = "#5DAAE3";
    document.querySelector("path#India.st0").style.fill = "#5DAAE3";
    document.querySelector("path#France.st0").style.fill = "#5DAAE3";
    document.querySelector("path#UK.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Russia.st0").style.fill = "#5DAAE3";
    document.querySelector("path#Canada.st0").style.fill = "#5DAAE3";
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

