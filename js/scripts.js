function akanName(){
    return d = (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)mod 7
}
var CC = document.getElementsByName(century);
var DD= document.getElementsByName(day);
var MM = document.getElementsByName(month);
var YY = document.getElementsByName(year);
akanName(CC,DD,MM,YY);










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
if(gender===Male)
{
    if(d===0)
    {
        alert("Your Akan name is Kwasi");
    }
    else if(d===1)
    {
        alert("Your Akan name is Kwadwo"); 
    }
    else if(d===2)
    {
        alert("Your Akan name is Kwabena"); 
    }
    else if(d===3)
    {
        alert("Your Akan name is Kwaku"); 
    }
    else if(d===4)
    {
        alert("Your Akan name is Yaw"); 
    }
    else if(d===5)
    {
        alert("Your Akan name is Kofi"); 
    }
    else if(d===6)
    {
        alert("Your Akan name is Kwame"); 
    }
}
else
{
    if(d===0)
    {
        alert("Your Akan name is Akoswa");
    }
    else if(d===1)
    {
        alert("Your Akan name is Adwoa"); 
    }
    else if(d===2)
    {
        alert("Your Akan name is Abenaa"); 
    }
    else if(d===3)
    {
        alert("Your Akan name is Akua"); 
    }
    else if(d===4)
    {
        alert("Your Akan name is Yaa"); 
    }
    else if(d===5)
    {
        alert("Your Akan name is Afua"); 
    }
    else if(d===6)
    {
        alert("Your Akan name is Ama"); 
    }
}
