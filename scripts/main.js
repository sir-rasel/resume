function getCurrentDate (){
    let date =  new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return "Date: " + day + "/" + month + "/" + year;
}

document.getElementById("date").innerHTML = getCurrentDate();