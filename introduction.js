let year;
let month;
let day;
let date;
let second;
let minute;
let hours;
let htmlCode;


function calendar(){
    year = new Date().getFullYear()
    month = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"][new Date().getMonth()]
    day = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"][new Date().getDay()]
    date = new Date().getDate();
    second = new Date().getSeconds();
    minute = new Date().getMinutes();
    hours = new Date().getHours();

    if (String(hours).length == 1){
        hours="0"+hours
    }
    
    if (String(second).length == 1){
        second="0"+second
    }

    if (String(minute).length == 1){
        minute="0"+minute
    }
        
    htmlCode = "<h1>" + date + " " + month + " " + year + " " + day + " " + hours + ":" + minute + ":"+ second +"</h1>"
    document.body.innerHTML = htmlCode;
}

setInterval(calendar, 1000)

