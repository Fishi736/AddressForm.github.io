
function disable() {
    var f = document.getElementsByName('input');
    for (var i = 0; i < f.length; i++)
        f[i].disabled = true;
   

}

function enable() {
    var f = document.getElementsByName('input');
    for (var i = 0; i < f.length; i++)
        f[i].disabled = false;
    
}
    
