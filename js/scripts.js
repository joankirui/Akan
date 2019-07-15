// var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var femaleNames = ["Akoswa","Adwa","Abena","Akwa","Yaa","Afua","Ama"];
// var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

function akanday(cc,yy,dd,mm){
    return ((((cc/4)-2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd)%7);
}

function akanName(form){
    var cc = document.forms["myform"]["century"].value;
    var dd = document.forms["myform"]["day"].value;
    var mm = document.forms["myform"]["month"].value;
    var yy = document.forms["myform"]["year"].value;
    var gender = document.forms["myform"]["gender"].value;

    // if((dd<=0)||(dd>31))
    // {
    //     alert("Invalid day!!Enter a valid day");
    // }
    // else
    // {
    //     alert("Continue");
    // }
    
    // if((mm<=0)||(mm>12))
    // {
    //     alert("Invalid month!!Enter a valid month");
    // }
    // else
    // {
    //     alert("Continue");
    // }

var d= akanday(cc,yy,dd,mm).toFixed();
// alert("d");
if(gender== "Male" && d==0){
    alert("Your Akan name is Kwasi");
}
else if(gender=="Male" && d==1){
    alert("Your Akan name is Kwadwo"); 
}
else if(gender=="Male" && d==2){
    alert("Your Akan name is Kwabena"); 
}
else if(gender=="Male" && d==3){
    alert("Your Akan name is Kwaku"); 
}
else if(gender=="Male" && d==4){
    alert("Your Akan name is Yaw"); 
}
else if(gender=="Male" && d==5){
    alert("Your Akan name is Kofi"); 
}
else if(gender== "Male" && d==6)
{
    alert("Your Akan name is Kwame"); 
}
else if(gender=="Female" && d==0){
    alert("Your Akan name is Akosua");
}
else if(gender=="Female" && d==1){
    alert("Your Akan name is Adwoa"); 
}
else if(gender=="Female" && d==2){
    alert("Your Akan name is Abenaa"); 
}
else if(gender=="Female" && d==3){
    alert("Your Akan name is Akua"); 
}
else if(gender=="Female" && d==4){
    alert("Your Akan name is Yaa"); 
}
else if(gender=="Female" && d==5){
    alert("Your Akan name is Afua"); 
}
else if (gender=="Female" && d==6){
    alert("Your Akan name is Ama"); 
}
else {
    alert("null");
}

}