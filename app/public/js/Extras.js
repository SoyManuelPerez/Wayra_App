function CExtra1() { 
    let nombre = document.getElementById("NExtra1").value;
    localStorage.setItem("NombreX1",nombre);
}
function CExtra2() { 
    let nombre = document.getElementById("NExtra2").value;
    localStorage.setItem("NombreX2",nombre);
}
function CExtra3() { 
    let nombre = document.getElementById("NExtra3").value;
    localStorage.setItem("NombreX3",nombre);
}
function CExtra4() { 
    let nombre = document.getElementById("NExtra4").value;
    localStorage.setItem("NombreX4",nombre);
}
function CExtra5() { 
    let nombre = document.getElementById("NExtra5").value;
    localStorage.setItem("NombreX5",nombre);
}
function CExtra6() { 
    let nombre = document.getElementById("NExtra6").value;
    localStorage.setItem("NombreX6",nombre);
}
function CExtra7() { 
    let nombre = document.getElementById("NExtra7").value;
    localStorage.setItem("NombreX7",nombre);
}
function CExtra8() { 
    let nombre = document.getElementById("NExtra8").value;
    localStorage.setItem("NombreX8",nombre);
}
function CExtra9() { 
    let nombre = document.getElementById("NExtra9").value;
    localStorage.setItem("NombreX9",nombre);
}
function CExtra10() { 
    let nombre = document.getElementById("NExtra10").value;
    localStorage.setItem("NombreX10",nombre);
}
function CExtra11() { 
    let nombre = document.getElementById("NExtra11").value;
    localStorage.setItem("NombreX11",nombre);
}
function CExtra12() { 
    let nombre = document.getElementById("NExtra12").value;
    localStorage.setItem("NombreX12",nombre);
}
function CExtra13() { 
    let nombre = document.getElementById("NExtra13").value;
    localStorage.setItem("NombreX13",nombre);
}
function CExtra14() { 
    let nombre = document.getElementById("NExtra14").value;
    localStorage.setItem("NombreX14",nombre);
}function CExtra15() { 
    let nombre = document.getElementById("NExtra15").value;
    localStorage.setItem("NombreX15",nombre);
}

document.addEventListener("DOMContentLoaded",function(event){
    document.getElementById("Extra1").innerHTML = localStorage.getItem("NombreX1");
    document.getElementById("Extra2").innerHTML = localStorage.getItem("NombreX2");
    document.getElementById("Extra3").innerHTML = localStorage.getItem("NombreX3");
    document.getElementById("Extra4").innerHTML = localStorage.getItem("NombreX4");
    document.getElementById("Extra5").innerHTML = localStorage.getItem("NombreX5");
    document.getElementById("Extra6").innerHTML = localStorage.getItem("NombreX6");
    document.getElementById("Extra7").innerHTML = localStorage.getItem("NombreX7");
    document.getElementById("Extra8").innerHTML = localStorage.getItem("NombreX8");
    document.getElementById("Extra9").innerHTML = localStorage.getItem("NombreX9");
    document.getElementById("Extra10").innerHTML = localStorage.getItem("NombreX10");
    document.getElementById("Extra11").innerHTML = localStorage.getItem("NombreX11");
    document.getElementById("Extra21").innerHTML = localStorage.getItem("NombreX12");
    document.getElementById("Extr3a1").innerHTML = localStorage.getItem("NombreX13");
    document.getElementById("Ext4ra1").innerHTML = localStorage.getItem("NombreX14");
    document.getElementById("Ex5tra1").innerHTML = localStorage.getItem("NombreX15");
})