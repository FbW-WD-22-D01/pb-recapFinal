//OBJEKTE
// Das folgende Objekt kann für die folgenden drei Aufgaben benutzt werden:

const user = {
    name: 'Paul',
    age: 35,
    hobbies: ['swim', 'read', 'walk', 'code'],
    city: 'Rom',
}

/* 1. Erstelle eine Funktion giveHobbies() die ein Objekt entgegennimmt und einen String zurückgibt, der den Namen und die Hobbies enthält.

Bsp: 'console.log(giveUserHobby) ----> Die Hobbies von Paul sind: swim, read, walk, code. '
*/



/* 2. Schreibe eine Funktion hasHobby() die ein Objekt und einen String entgegennimmt. Die Funktion soll überprüfen ob der String in dem Hobbies Array des Objekts enthalten ist. Die Funktion soll true oder false zurückgeben.

Bsp: console.log(hasHobby(user, 'swim')) --> true */




/* 3. Erstelle eine Funktion giveData() die 2 Argumente entgegennimmt, einmal ein Objekt und zum anderen einen String(erwartet wird entweder : 'key', 'value' oder 'both'). 

Die Funktion soll das Objekt in einen Array umwandeln. Der Rückgabearray soll entweder nur die keys, nur die values oder beides enthalten, entsprechend dem 2. Argument. 

Wenn das 2. Argument weder 'key', 'value' oder 'both' ist, soll eine Fehlermeldung zurückgegeben werden.

siehe die Beispiele: 

console.log(giveData(user, 'key')) --> ['name', 'age', 'hobbies', 'city']

console.log(giveData(user, 'both')) --> [['name', 'Paul'], ['age', 35], ['hobbies', ['swim', 'read', 'walk', 'code']], ['city', 'Rom]]

console.log(giveData(user, 'andererString')) --> 'Die Eingabe ist fehlerhaft'

*/

function giveData(meinObject, string){

    if( string === 'key'){
        return Object.keys(meinObject)
    } else if(string === 'value'){
        return Object.values(meinObject)
    } else if (string === 'both'){
        return Object.entries(meinObject)
    }else {
        return 'Eingabe ist fehlerhaft'
    }

}

console.log(giveData(user, 'both'));





//ARRAYS
// Für die folgenden fünf Aufgaben kann das months array verwendet werden, versucht die array Methoden map, filter und reduce zu verwenden.

const months = ['jan', 'feb', 'märz', 'april', 'mai', 'juni', 'juli', 'aug', 'sept', 'okt', 'nov', 'dez']

/*1. Schreibe eine Funktion monthToNum(), die das Array entgegennimmt und einen neuen Array zurückgibt, der statt der Monatsnamen nur noch die Monatszahlen enthält.

console.log(monthToNum(months)) ---> [1,2,3,4,5,6,7,8,9,10,11,12]
*/
function monthToNum(array){
    const result = array.map((el,index ) => index+1 )
    return result
}

console.log(monthToNum(months))



/* 2. Schreibe eine Funktion longerThan3() die das Array entgegennimmt und einen Array zurückgibt, der nur noch Monate enthält, die länger als 3 Buchstaben sind.

console.log(LongerThan3(months)) --> ['märz','april','juni', 'juli', 'sept'] */






/* 3. Schreibe eine Funktion die den array entgegennimmt. Die Funktion soll den Array in der Mitte teilen und diese beiden Arrays in einem Array verschachteln. Verwirrt? Seht das Beispiel:

console.log(splitMonths(months)) ---> [['jan', 'feb', 'märz', 'april', 'mai', 'juni'], [ 'juli', 'aug', 'sept', 'okt', 'nov', 'dez']] */
/*
map --> neues Array Eigenschaft: gleiche Länge wie Ursprungsarray
filter --> neues Array Eigenschaft: verkürzt den Array bei Bedarf ABER  
reduce --> kann die obigen kombinieren
*/
function splitMonths(array){
  const result = []
  const firstHalf = array.filter((el, index) => index<6)
    
    return [  array.slice(0,6), array.slice(6)    ]
    //return ['string1', 'string2']
}

console.log(splitMonths(months))

/* 4. Schreibe eine Funktion arrayToObj(), die das Array entgegennimmt und daraus ein Objekt erstellt, die Werte des Arrays sollen dabei die keys bilden, die Indexnummern bilden die values:
console.log(arrayToObj(months))  --> {jan: 1, feb: 2, märz: 3, april: 4 ...uswusf.}
*/



/* 5. Schreibe eine Funktion doubleMe() die einen Array entgegennimmt und die enthaltenen Strings verdoppelt. Beispiel:

console.log(doubleMe(months)) --> ['janjan', 'febfeb', 'märzmärz', 'aprilapril' ....] */


 // COMPLEX DATA

 const bestellungen = [
     {drink: 'coffee', preis: 2, anzahl: 1},
     {drink: 'cola', preis: 2, anzahl: 2},
     {drink: 'tea', preis: 1, anzahl: 1},
 ]

 /* 1. Schreib eine Funktion valueOrders() die den "bestellungen" Array entgegennimmt. Die Funktion soll den Gesamtwert aller Bestellungen zurückgeben. Beachte die Anzahl der jeweiligen Bestellungen.
 
 console.log(valueOrders(bestellungen)) --> 7 */



 /* 2. Schreib eine Funktion singleOrders(), die den "bestellungen" Array entgegennimmt und einen Array mit dem jeweiligen Wert der einzelnen Bestellungen zurückgibt:
 
 console.log(singleOrders(bestellungen)) --> [2,4,1] */



/*3. Schreibe eine Funktion givePrice(), die den bestellungen Array entgegennimmt und einen drink. Die Funktion, soll den Preis des Getränks zurückgeben. */

function givePrice(array, string) {
    // let result = 0
   
    // for (let getraenkObj of array){
    //     console.log(getraenkObj)
    //     if (getraenkObj.drink === string){
    //         result = getraenkObj.preis
    //     }
    // }

    const result = array.filter(el => el.drink === string).map(el => el.preis)
    
    // const mitMap = array.map(el => {
    //     if (el.drink === string){
    //         return el.preis
    //     }
    // })
    // console.log('MITMAP: ', mitMap)
    //console.log(result)
    return result
//    return result[0].preis
}


console.log('GIVE PRICE: ', givePrice(bestellungen, 'cola')) 


//KLASSEN

/* Erselle eine Klasse "Rectangle" (Rechteck), diese Klasse sollte die Eigenschaften "width" and "height" besitzen. Zusätzlich erstelle für die Klasse folgende Methoden:
     "calcArea" -> diese Methode sollte die Fläche des jeweiligen Rechtecks zurückgeben (widht * height)
     "isSquare" -> die Methode sollte true zurückgeben wenn width and height gleich sind 
Beispiel:

const rect1 = new Rectangle(2,2)
console.log(rect1.isSquare()) --> true
console.log(rect1.calcArea()) --> 4
*/




//DATA PROCESSING

/* Schreibe eine Funktion, die einen String entgegennimmt und überprüft, ob es sich um eine gültige Email eurer Firma handelt. Dafür sollte die Funktion folgendes überprüfen:
 - Länge mindestens 20 Zeichen
 - @ enthalten sein
 - am Ende sollte 'meine-firma.de' stehen */







