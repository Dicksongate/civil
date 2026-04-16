
const mdd = document.getElementById('mdd');
const omc = document.getElementById('omc');
const sic = document.getElementById('sic');
const sd = document.getElementById('sd');
const mc = document.getElementById('mc');
const wetsool = document.getElementById('wetsoil');
const initialsand = document.getElementById('initial');
const finalsand = document.getElementById('final');


function fieldtest() { 
    let x = Number(initialsand.value) 
    let y = Number(finalsand.value)
    let displaced_sand = x - y   

    return volume(displaced_sand)    
    
}

function volume(a){
    let sandincon = Number(sic.value)
    result = a - sandincon    
    return displaced(result)
}

function displaced(b) {
    let sand_density = Number(sd.value)
    result2 = b / sand_density   
    return abvolume(result2)    
}

function abvolume(c) {
    let water = Number(mc.value)
    let mainwater = water + 100
    let wetweight = Number(wetsool.value)
    result3 = wetweight / c
    result4 =result3 * 100
    drydensity = result4 /mainwater 
    dryupdateLocalstorage() 
    let storedDry = JSON.parse(localStorage.getItem('drydensity'))
    document.getElementById('fdry').innerHTML = Math.round(storedDry * 100) / 100   
    return compaction(drydensity)
}

function compaction(d) {
    let maxdd = Number(mdd.value)
    realcompact = d / maxdd
    compactdegree = realcompact * 100 
    degreeupdateLocalstorage();
    let storedDegry = JSON.parse(localStorage.getItem('compactdegree'))  
    document.getElementById('mdry').innerHTML = Math.round(storedDegry)  
  
    return compactdegree

}

function printwork() {
    window.print()
    
}

function dryupdateLocalstorage(){
     localStorage.setItem("drydensity", JSON.stringify(drydensity))
    }

function degreeupdateLocalstorage(){
    localStorage.setItem("compactdegree", JSON.stringify(compactdegree))
}


