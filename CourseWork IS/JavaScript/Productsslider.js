 var images = ['../Photos/S2.jpg', '../Photos/S3.jpg', '../Photos/S4.jpg', '../Photos/S1.jpg'];
 x=0;
 var imgs =document.getElementById('img');

 setInterval(slider,3000)

 function slider()
 {
    if(x<images.length)
    {
        x=x+1
    }
    else
    {
        x=1
    }
    imgs.innerHTML="<img src="+images[x-1]+">";
 }

 function Hello()
{
    alert("Your item has been suscessfully added to cart !!! :)");
}

function available()
{
    alert("Search feature will be available soon !!")
}