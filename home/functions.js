function darkMode()
{
    /* An array of element IDs to be changed in dark mode. */
    var ids_to_darken = ["background"]
    var id
    for(id of ids_to_darken)
    {
        var element = document.getElementById(id);
        element.classList.toggle("dark");
    }
}
function darkIcon()
{
    var but = document.getElementById("dark-button");
    if (but.innerText == String.fromCodePoint("0x1F319"))
    {
        but.innerHTML = String.fromCodePoint("0x1F31E");
    }
    else
    {
        but.innerHTML = String.fromCodePoint("0x1F319");
    }
}