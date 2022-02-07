const username = prompt("Adın nedir?")
document.querySelector("#myName").innerHTML = username.trim().length > 0 ? username : 'İsmini vermek istemeyen kullanıcı' 


document.querySelector("#myClock").onload.showTime = () =>{
   
   const weekday = ["Pazar","Pazartesi","Salo","Çarşamba","Perşembe","Cuma","Cumartesi"];
   let date_format = `${new Date().toLocaleTimeString()} ${weekday[new Date().getDay()]}`
   document.querySelector("#myClock").innerHTML = date_format
} 


// run and refresh every time
setInterval(document.querySelector("#myClock").onload.showTime);