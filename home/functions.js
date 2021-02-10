function darkMode()
{
    /* Change the background. */
    var e = document.getElementById("background");
    e.classList.toggle("dark");

    /* Change the horizonal line. */
    var e = document.getElementsByTagName("hr")[0];
    e.style.backgroundColor = (e.style.backgroundColor == "white") ? "black" : "white";

    /* Change the navigation bar. */
    var e = document.getElementsByClassName("navbar")[0];
    e.classList.toggle("dark");

    var l = document.getElementsByClassName("navlink");
    for(var i = 0; i < l.length; i++)
    {
        l[i].children[0].style.color = 
          (l[i].children[0].style.color == "white") ? "rgb(90, 55, 50)" : "white";
    }

    var e = document.getElementsByClassName("dropbtn")[0];
    e.style.color = (e.style.color == "white") ? "rgb(90, 55, 50)" : "white";

    var e = document.getElementsByClassName("dropdown-content")[0];
    e.style.backgroundColor = (e.style.backgroundColor == "black") ? "whitesmoke" : "black";
    var l = e.children;
    for(var i = 0; i < l.length; i++)
    {
        l[i].style.color = (l[i].style.color == "white") ? "rgb(90, 55, 50)" : "white";
    }

    /* TODO - Change navigation bar highlights. */
    
}
function darkIcon()
{
    var but = document.getElementById("dark-button");
    if (but.innerText == String.fromCodePoint("0x1F319"))
    {
        but.innerHTML = String.fromCodePoint("0x1F31E");
        but.setAttribute("title", "Light Mode")
    }
    else
    {
        but.innerHTML = String.fromCodePoint("0x1F319");
        but.setAttribute("title", "Dark Mode")
    }
}
function chiMode()
{
    /* TODO - Add Chinese language function. */
    var e = document.getElementsByTagName("h1")[0];
    e.style.fontFamily = (e.style.fontFamily == "LiGuoFu") ? "Artisan" : "LiGuoFu";
    e.innerHTML = (e.innerHTML == "欢迎~!") ? "Welcome~!" : "欢迎~!";

    var e = document.getElementsByTagName("p")[0];
    e.classList.toggle("chinese");
    e.innerHTML = 
      (e.innerHTML.charAt(0) == "这") ?
      "This is a &#10024work in progress&#10024." : "这是个&#10024进展中的工作&#10024.";

    var e = document.getElementsByTagName("address")[0];
    e.style.fontFamily = (e.style.fontFamily == "DiBiLiMa") ? "Arial" : "DiBiLiMa";
    e.style.fontSize = (e.style.fontSize == "12pt")? "10pt" : "12pt";
    e.innerHTML = 
      (e.innerHTML == "网站上次更新于20210208<br>- Bofan") ? 
      "Site Last Updated 20210802<br>- 博凡" : "网站上次更新于20210208<br>- 博凡";
}
function chiIcon()
{
    /* TODO - Change the language icon. */

}