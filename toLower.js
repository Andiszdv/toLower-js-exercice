

const toLower = (str) => { 
let word = str.split(""); // on sépare chaque mot de la phrase dans un array
let result = "";    
for (let i = 0; i < word.length; i++) {
     let element = word[i];                      // on boucle sur chaque lettre(element) de chaque mot
     //console.log(element.charCodeAt());
     let temp = element.charCodeAt();           // on récupère le code ASCII de chaque lettre dans la constante temp
        if (temp >= 65 && temp <= 90) {         // les lettres majuscules on un code compris entre 65 et 90
          let nouvelleIndex = Number(temp +32); // il faut ajouter 32 à chaque code pour obtenir la même lettre en minuscule
          var ter = String.fromCharCode(nouvelleIndex); // String.fromCharCode(nombre) permet de trouver la lettre correspondant au code entre parenthèses
         result += ter;
     //console.log(ter);
     } else {
         result += element;
       }
     }
      console.log(result);
    return result;
}


// test :
toLower("Hello wORlD, It'S A NEW DaY!");
