function calcul1() {
    var Ta=[3, 1, 7, 9]
    var Tb=[2, 4, 1, 9, 3]
    var ca1= document.getElementById("C1")
   

   
let sum =0
for (let i = 0; i < Ta.length; i++) {
    let exist = false
    for (let j=0; j <Tb.length; j++){
        if (Ta[i]==Tb[j]) {
            exist= true
            break
        }
       
    }
    if (exist==false) {
        sum= sum+ Ta[i]
    }   
}
for (let i = 0; i < Tb.length; i++) {
    let exist = false
    for (let j=0; j <Tb.length; j++){
        if (Tb[i]==Ta[j]) {
            exist= true
            break
        }
       
    } 
    if (exist==false) {
        sum= sum+ Tb[i] 
    }  
}
console.log(sum)
ca1.innerHTML=`Resultat: ${sum}`
}
/////////////////////////////////////////////////:
function calcul2() {
    var Ta=[3, 1, 7, 9]
    var Tb=[2, 4, 1, 9, 3]
    var ca2= document.getElementById("C2")
   
let sum =0
for (let i = 0; i < Ta.length; i++) {
    let exist = false
    for (let j=0; j <Tb.length; j++){
        if (Ta[i]==Tb[j]) {
            exist= true
            break
        }
       
    }
    if (exist==true) {
        sum= sum+ Ta[i]
    }   
}
for (let i = 0; i < Tb.length; i++) {
    let exist = false
    for (let j=0; j <Tb.length; j++){
        if (Tb[i]==Ta[j]) {
            exist= true
            break
        }
       
    } 
    if (exist==true) {
        sum= sum+ Tb[i] 
    }  
}
console.log(sum)
ca2.innerHTML=`Resultat : ${sum}`
}