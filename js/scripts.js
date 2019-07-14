function akanName(){
    var CC = document.getElementsByName(century);
    var DD = document.getElementsByName(day);
    var MM = document.getElementsByName(month);
    var YY = document.getElementsByName(year);
    return d = (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)mod 7;
}

if((d<=0)||(d>30))
{
    alert("Invalid day!!Enter a valid day");
}
else{
    alert("Continue");
}
if((m<=0)||(m>12))
{
    alert("Invalid month!!Enter a valid month");
}
else
{
    alert("Continue");
}
var gender = document.getElementsByName(gender);
var days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
if((gender===Male)&&(days===[0]))
{
    alert("Your Akan name is Kwasi");
}
else if((gender===Male)&&(days===[1])
{
    alert("Your Akan name is Kwadwo"); 
}
else if((gender===Male)&&(days===[2]))
{
    alert("Your Akan name is Kwabena"); 
}
else if((gender===Male)&&(days===[3]))
{
    alert("Your Akan name is Kwaku"); 
}
else if((gender===Male)&&(days===[4]))
{
    alert("Your Akan name is Yaw"); 
}
else if((gender===Male)&&(days===[5]))
{
    alert("Your Akan name is Kofi"); 
}
else if((gender===Male)&&(days===[6]))
{
    alert("Your Akan name is Kwame"); 
}
else if((gender===Female)&&(days===[0]))
{
    alert("Your Akan name is Akoswa");
}
else if((gender===Female)&&(days===[1]))
{
    alert("Your Akan name is Adwoa"); 
}
else if((gender===Female)&&(days===[2]))
{
    alert("Your Akan name is Abenaa"); 
}
else if((gender===Female)&&(days===[3]))
{
    alert("Your Akan name is Akua"); 
}
else if((gender===Female)&&(days===[4]))
{
    alert("Your Akan name is Yaa"); 
}
else if((gender===Female)&&(days===[5]))
{
    alert("Your Akan name is Afua"); 
}
else if((gender===Female)&&(days===[6]))
{
    alert("Your Akan name is Ama"); 
}

