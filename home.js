function select(className)
{
    let a = document.querySelector('.' + className);
    return a;
}

function selectText(className)
{
    let a = document.querySelector('.' + className).innerText;
    return a;
}
