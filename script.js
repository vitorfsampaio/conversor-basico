function calcular(){
    var res = document.getElementById('res')
    var temp = document.getElementById('itemp')
    var calc = Number(temp.value) * 9/5 + 32
    var fah = Number(temp.value) + 273

    if(temp.value == 0){
        res.innerHTML = `0°C corresponde a ${calc}°F ou 273 Kelvin`
    } else{
    res.innerHTML = `${temp.value}°C corresponde a ${calc}°F, ou ${fah} Kelvin`
    }
    }