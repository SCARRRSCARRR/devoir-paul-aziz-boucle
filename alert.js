/*exercice 1 */

/*parseInt(prompt("veuillez donner un nombre svp ?"));

for (i=5; i>=0; i--){
    if(i===0){
    alert(i+" BOOOOM");
}else{
    alert(i)
}
}


/*exercice 2*/


/*resultat1=parseFloat(prompt("1:cadre"+ " 2:agent de maitrise"+ " 3:profession liberale"+ " 4:portage salarial"+ " 5:fonction publique"));
resultat2=parseFloat(prompt("quel est votre salaire brut svp ?"));

if(resultat1===1){
    alert(resultat2-(resultat2*25/100)+ " euros");

}else if(resultat1===2){
    alert(resultat2-(resultat2*22/100)+ " euros");

}else if(resultat1===3){
    alert(resultat2-(resultat2*45/100)+ " euro");

}else if(resultat1===4){
    alert(resultat2-(resultat2*51/100)+ " euros");

}else if(resultat1===5){
    alert(resultat2-(resultat2*15/100)+ " euros")

}else{
    alert("« calcul non pris en compte ")
}*/

/*resultat1=parseFloat(prompt("1:cadre"+ " 2:agent de maitrise"+ " 3:profession liberale"+ " 4:portage salarial"+ " 5:fonction publique"));
resultat2=parseFloat(prompt("quel est votre salaire brut svp ?"));

switch(true){
    case resultat1===1 : alert(resultat2-(resultat2*25/100));
    break;

    case resultat1===2 : alert(resultat2-(resultat2*22/100));
    break;

    case resultat1===3 : alert(resultat2-(resultat2*45/100));
    break;

    case resultat1===4 : alert(resultat2-(resultat2*51/100));
    break;

    case resultat1===5 : alert(resultat2-(resultat2*15/100));

    default : alert("calcul non pris en compte");
    break;
}*/


/*exercice3*/

/*do{
resultat1=parseInt(prompt("1:cadre"+ " 2:agent de maitrise"+ " 3:profession liberale"+ " 4:portage salarial"+ " 5:fonction publique"));
resultat2=parseFloat(prompt("quel est votre salaire brut svp ?"));

switch(true){
    case resultat1===1 : alert(resultat2-(resultat2*25/100));
    break;

    case resultat1===2 : alert(resultat2-(resultat2*22/100));
    break;

    case resultat1===3 : alert(resultat2-(resultat2*45/100));
    break;

    case resultat1===4 : alert(resultat2-(resultat2*51/100));
    break;

    case resultat1===5 : alert(resultat2-(resultat2*15/100));

    default : alert("calcul non pris en compte");
    break;
}
suite =prompt("voulez vous continuer si O=oui et N=non");
}while(suite==="O");*/

/*exercice 4*/

/*var  listeDeFruit= new Array();/*

/*listeDeFruit [0]="banane";
listeDeFruit [1]="pomme";
listeDeFruit [2]="orange";
listeDeFruit [3]="mangue";
listeDeFruit [4]="grenade";
listeDeFruit [5]="kiwi";
listeDeFruit [6]="clementine";
alert(listeDeFruit);*/

/*const fruits=["banane", "pomme", "orange", "mangue", "grenande", "kiwi", "clementine"]
var reponse
var resultat=false
while(!resultat){
reponse=prompt("donnez le nom d'un fruit svp?");
if(fruits.includes(reponse)){
    alert ("c'est gagné");
    resultat=true;
}else{
    alert ("c'est perdu");
}
}*/


/*exercice 5*/

/*var liste1 = ["savon","lait","viande de grison","tomate","chaussette","cigarette"];
liste1.push("sucre");

var liste2 = ["riz", "poisson"];
liste1.push(liste2);
delete liste1 [1];
alert(liste1)*/


/*exercice 6*/

/*nombre=parseInt(prompt("veuillez donner un nombre svp ?"));

for(i=0; i<=10; i++){
    resultat=nombre*i
    alert(`${nombre}*${i}=${resultat}`)
}*/