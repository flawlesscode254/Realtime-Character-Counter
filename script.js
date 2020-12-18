function Show(){
    const val = document.getElementById("counts").value;
    const des = val.length;
    document.getElementById("reveal").innerHTML = "Number of characters: " + des;
};
Show();