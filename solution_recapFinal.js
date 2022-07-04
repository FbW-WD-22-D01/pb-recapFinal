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
function giveUserHobby(object){
    return `Die Hobbies von ${object.name} sind ${object.hobbies.join(', ')}`
}
console.log(giveUserHobby(user)) 

/* 2. Schreibe eine Funktion hasHobby() die ein Objekt und einen String entgegennimmt. Die Funktion soll überprüfen ob der String in dem Hobbies Array des Objekts enthalten ist. Die Funktion soll true oder false zurückgeben.

Bsp: console.log(hasHobby(user, 'swim')) --> true */

function hasHobby(object, string){
    return object.hobbies.includes(string)
}

console.log('hasHobby: ',hasHobby(user, 'swim'))
/* 3. Erstelle eine Funktion giveData() die 2 Argumente entgegennimmt, einmal ein Objekt und zum anderen einen String(erwartet wird entweder : 'key', 'value' oder 'both'). 

Die Funktion soll das Objekt in einen Array umwandeln. Der Rückgabearray soll entweder nur die keys, nur die values oder beides enthalten, entsprechend dem 2. Argument. 

Wenn das 2. Argument weder 'key', 'value' oder 'both' ist, soll eine Fehlermeldung zurückgegeben werden.

siehe die Beispiele: 

console.log(giveData(user, 'key')) --> ['name', 'age', 'hobbies', 'city']

console.log(giveData(user, 'both')) --> [['name', 'Paul'], ['age', 35], ['hobbies', ['swim', 'read', 'walk', 'code']], ['city', 'Rom]]

console.log(giveData(user, 'andererString')) --> 'Die Eingabe ist fehlerhaft'

*/
function giveData(object, string){
    if(string === 'key'){
        return Object.keys(object)
    } else if (string === 'value'){
        return Object.values(object)
    } else if (string === 'both'){
        return Object.entries(object)
    }

}

console.log('giveData: ', giveData(user, 'key'))

//ARRAYS
// Für die folgenden fünf Aufgaben kann das months array verwendet werden, versucht die array Methoden map, filter und reduce zu verwenden.

const months = ['jan', 'feb', 'märz', 'april', 'mai', 'juni', 'juli', 'aug', 'sept', 'okt', 'nov', 'dez']

/*1. Schreibe eine Funktion monthToNum(), die das Array entgegennimmt und einen neuen Array zurückgibt, der statt der Monatsnamen nur noch die Monatszahlen enthält.

console.log(monthToNum(months)) ---> [1,2,3,4,5,6,7,8,9,10,11,12]
*/

function monthToNum(array){
    //map, da die Anzahl der Elemente im Array gleich bleibt, nur die Werte verändern sich
    const result = array.map((el,index) => index+1 )
    return result
}

console.log('monthToNum: ', monthToNum(months))



/* 2. Schreibe eine Funktion longerThan3() die das Array entgegennimmt und einen Array zurückgibt, der nur noch Monate enthält, die länger als 3 Buchstaben sind.

console.log(LongerThan3(months)) --> ['märz','april','juni', 'juli', 'sept'] */

function longerThan3(array){
    const result = array.filter(el => el.length > 3)
    return result
}


console.log('longerThan3: ',longerThan3(months)) 

/* 3. Schreibe eine Funktion die den array entgegennimmt. Die Funktion soll den Array in der Mitte teilen und diese beiden Arrays in einem Array verschachteln. Verwirrt? Seht das Beispiel:

console.log(splitMonths(months)) ---> [['jan', 'feb', 'märz', 'april', 'mai', 'juni'], [ 'juli', 'aug', 'sept', 'okt', 'nov', 'dez']] */
function splitMonths(array){
    
    //wichtig slice verwenden, denn splice würde den Originalarray verändern
    const result = [array.slice(0,6), array.slice(6)] 
    
    return result
}


console.log('splitMonths: ',splitMonths(months)) 

/* 4. Schreibe eine Funktion arrayToObj(), die das Array entgegennimmt und daraus ein Objekt erstellt, die Werte des Arrays sollen dabei die keys bilden, die Indexnummern bilden die values:
console.log(arrayToObj(months))  --> {jan: 1, feb: 2, märz: 3, april: 4 ...uswusf.}
*/
function arrayToObj(array){
    //reduce, da wir aus einem Array ein Objekt erzeugen
    result = array.reduce((acc, element,index) => {
        acc[element] = index
        return acc
    }, {})
    return result
}

console.log('arrayToObj: ', arrayToObj(months))  

/* 5. Schreibe eine Funktion doubleMe() die einen Array entgegennimmt und die enthaltenen Strings verdoppelt. Beispiel:

console.log(doubleMe(months)) --> ['janjan', 'febfeb', 'märzmärz', 'aprilapril' ....] */
function doubleMe(array){
    result = array.map(el => el + el)
    return result
}


console.log('doubleMe: ', doubleMe(months)) 
 
 // COMPLEX DATA

 const bestellungen = [
     {drink: 'coffee', preis: 2, anzahl: 1},
     {drink: 'cola', preis: 2, anzahl: 2},
     {drink: 'tea', preis: 1, anzahl: 1},
 ]

 /* 1. Schreib eine Funktion valueOrders() die den "bestellungen" Array entgegennimmt. Die Funktion soll den Gesamtwert aller Bestellungen zurückgeben. Beachte die Anzahl der jeweiligen Bestellungen.
 
 console.log(valueOrders(bestellungen)) --> 7 */
function valueOrders(array){
    
    //reduce ist günstig, da aus dem Array eine Zahl werden soll
    const result = array.reduce((acc,el) => {
        
        //der acc fängt bei 0 an und bei jedem Element wird Preis*Anzahl dazu addiert
        acc += el.preis * el.anzahl
        
        //wichtig bei reduce, der acc muss im return stehen, sonst geht der verloren!
        return acc
    },0)


    return result
}

console.log('valueOrders: ',valueOrders(bestellungen)) 


/* 2. Schreib eine Funktion singleOrders(), die den "bestellungen" Array entgegennimmt und einen Array mit dem jeweiligen Wert der einzelnen Bestellungen zurückgibt:
*/

function singleOrders(array){
    
    //map --> da die Länge des Arrays gleich bleibt und nur die Werte verändert werden (von Objekt zu Zahl)
    
    const result = array.map(el => el.preis * el.anzahl)
    return result
}

console.log('singleOrders: ', singleOrders(bestellungen)) 
/*3. Schreibe eine Funktion givePrice(), die den bestellungen Array entgegennimmt und einen drink. Die Funktion, soll den Preis des Getränks zurückgeben. */

function givePrice(array, string){
    //reduce bietet sich hier an, da aus dem array ein einzelner Wert wird
    const result = array.reduce((acc, el) => {
        if (el.drink === string){
            acc = el.preis
        }
        return acc
    }, 0)
    return result
}


console.log('givePrice :',givePrice(bestellungen, 'cola'))


//KLASSEN

/* Erselle eine Klasse "Rectangle" (Rechteck), diese Klasse sollte die Eigenschaften "width" and "height" besitzen. Zusätzlich erstelle für die Klasse folgende Methoden:
     "calcArea" -> diese Methode sollte die Fläche des jeweiligen Rechtecks zurückgeben (widht * height)
     "isSquare" -> die Methode sollte true zurückgeben wenn width and height gleich sind 
Beispiel:

const rect1 = new Rectangle(2,2)
console.log(rect1.isSquare()) --> true
 console.log(rect1.calcArea())--> 4
*/

class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    calcArea() {
        return this.width*this.height
    }
    isSquare() {
        return this.width === this.height
    }
} 

const rect1 = new Rectangle(2,2);
console.log('rect1 is square?: ', rect1.isSquare())
console.log('rect1 calcArea: ',rect1.calcArea())

//DATA PROCESSING

/* Schreibe eine Funktion, die einen String entgegennimmt und überprüft, ob es sich um eine gültige Email eurer Firma handelt. Dafür sollte die Funktion folgendes überprüfen:
 - Länge mindestens 20 Zeichen
 - @ enthalten sein
 - am Ende sollte 'meine-firma.de' stehen */

function checkMail(string){
    if (string.length <= 20 ){
        return false
    }
    if (!string.includes('@')){
        return false
    }
    if (!string.endsWith('meine-firma.de')){
        return false
    }
    return true
}

console.log('Check mail: ',checkMail('christoph@meine-firma.de'))



