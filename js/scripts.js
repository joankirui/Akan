var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var femaleNames = ["Akoswa","Adwa","Abena","Akwa","Yaa","Afua","Ama"];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

function akanName(){
    var CC = document.getElementsByName(century);
    var DD = document.getElementsByName(day);
    if((DD<=0)||(DD>30))
    {
        alert("Invalid day!!Enter a valid day");
    }
    else
    {
        alert("Continue");
    }
    var MM = document.getElementsByName(month);
    if((MM<=0)||(MM>12))
    {
        alert("Invalid month!!Enter a valid month");
    }
    else
    {
        alert("Continue");
    }

    var YY = document.getElementsByName(year);
    return d = (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7;
}
var gender = document.getElementsByName(gender);
if((gender===Male)&&(d===0))
{
    alert("Your Akan name is Kwasi");
}
else if((gender===Male)&&(d===1)
{
    alert("Your Akan name is Kwadwo"); 
}
else if((gender===Male)&&(d===2))
{
    alert("Your Akan name is Kwabena"); 
}
else if((gender===Male)&&(d===3))
{
    alert("Your Akan name is Kwaku"); 
}
else if((gender===Male)&&(d===4))
{
    alert("Your Akan name is Yaw"); 
}
else if((gender===Male)&&(d===5))
{
    alert("Your Akan name is Kofi"); 
}
else if((gender===Male)&&(d===6))
{
    alert("Your Akan name is Kwame"); 
}
else if((gender===Female)&&(d===0))
{
    alert("Your Akan name is Akoswa");
}
else if((gender===Female)&&(d===1))
{
    alert("Your Akan name is Adwoa"); 
}
else if((gender===Female)&&(d===2))
{
    alert("Your Akan name is Abenaa"); 
}
else if((gender===Female)&&(d===3))
{
    alert("Your Akan name is Akua"); 
}
else if((gender===Female)&&(d===4))
{
    alert("Your Akan name is Yaa"); 
}
else if((gender===Female)&&(d===5))
{
    alert("Your Akan name is Afua"); 
}
else if((gender===Female)&&(d===6))
{
    alert("Your Akan name is Ama"); 
}

