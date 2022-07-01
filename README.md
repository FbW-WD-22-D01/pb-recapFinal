# Recap PB Basics

## OBJEKTE
*Das folgende Objekt kann für die folgenden drei Aufgaben benutzt werden:*

```
const user = {
    name: 'Paul',
    age: 35,
    hobbies: ['swim', 'read', 'walk', 'code'],
    city: 'Rom',
}
```

**1. Erstelle eine Funktion `giveHobbies()` die ein Objekt entgegennimmt und einen String zurückgibt, der den Namen und die Hobbies enthält.**


```
console.log(giveHobbies(user)) ----> Die Hobbies von Paul sind: swim, read, walk, code. 
```


<br /><br />

**2. Schreibe eine Funktion `hasHobby()` die ein Objekt  und einen String entgegennimmt. Die Funktion soll überprüfen ob der String in dem Hobbies Array des Objekts enthalten ist. Die Funktion soll true oder false zurückgeben.**


 ```
 console.log(hasHobby(user, 'swim')) --> true
 ```



<br /><br />

**3. Erstelle eine Funktion `giveData()` die 2 Argumente entgegennimmt, einmal ein Objekt und zum anderen einen String (erwartet wird entweder: 'key', 'value' oder 'both').** 

Die Funktion soll das Objekt in einen Array umwandeln. Der Rückgabearray soll entweder nur die keys, nur die values oder beides enthalten, entsprechend dem 2. Argument. 

Wenn das 2. Argument weder 'key', 'value' oder 'both' ist, soll eine Fehlermeldung zurückgegeben werden.

*siehe die Beispiele:*

```
console.log(giveData(user, 'key')) --> ['name', 'age', 'hobbies', 'city']

console.log(giveData(user, 'both')) --> [['name', 'Paul'], ['age', 35], ['hobbies', ['swim', 'read', 'walk', 'code']], ['city', 'Rom]]

console.log(giveData(user, 'andererString')) --> 'Die Eingabe ist fehlerhaft'
```


<br /><br />

## ARRAYS
*Für die folgenden fünf Aufgaben kann das months array verwendet werden, versucht die array Methoden map, filter und reduce zu verwenden.*

```
const months = ['jan', 'feb', 'märz', 'april', 'mai', 'juni', 'juli', 'aug', 'sept', 'okt', 'nov', 'dez']
```

<br /><br />

**1. Schreibe eine Funktion monthToNum(), die das Array entgegennimmt und einen neuen Array zurückgibt, der statt der Monatsnamen nur noch die Monatszahlen enthält.**

```
console.log(monthToNum(months)) ---> [1,2,3,4,5,6,7,8,9,10,11,12]
```

<br /><br />

**2. Schreibe eine Funktion longerThan3() die das Array entgegennimmt und einen Array zurückgibt, der nur noch Monate enthält, die länger als 3 Buchstaben sind.**

```
console.log(longerThan3(months)) --> ['märz','april','juni', 'juli', 'sept']
```

<br /><br />

**3. Schreibe eine Funktion die den array entgegennimmt. Die Funktion soll den Array in der Mitte teilen und diese beiden Arrays in einem Array verschachteln. Verwirrt? Seht das Beispiel:**

```
console.log(splitMonths(months)) ---> [['jan', 'feb', 'märz', 'april', 'mai', 'juni'], [ 'juli', 'aug', 'sept', 'okt', 'nov', 'dez']]
```

<br /><br />

**4. Schreibe eine Funktion, die das Array entgegennimmt und daraus ein Objekt erstellt, die Werte des Arrays sollen dabei die keys bilden, die Indexnummern bilden die values:**


```
console.log(arrayToObj(months))  --> {jan: 1, feb: 2, märz: 3, april: 4 ...uswusf.}
```

<br /><br />

**5. Schreibe eine Funktion doubleMe() die einen Array entgegennimmt und die enthaltenen Strings verdoppelt. Beispiel:**


```
console.log(doubleMe(months)) --> ['janjan', 'febfeb', 'märzmärz', 'aprilapril' ....] */
```

<br /><br />

 ## COMPLEX DATA
*Verwendet das komplexe Array `bestellungen` für die folgenden 3 Aufgaben:*

 ```
 const bestellungen = [
     {drink: 'coffee', preis: 2, anzahl: 1},
     {drink: 'cola', preis: 2, anzahl: 2},
     {drink: 'tea', preis: 1, anzahl: 1},
 ]
 ```

<br /><br />

 **1. Schreib eine Funktion valueOrders() die den "bestellungen" Array entgegennimmt. Die Funktion soll den Gesamtwert aller Bestellungen zurückgeben. Beachte die Anzahl der jeweiligen Bestellungen.**
 
 ```
 console.log(valueOrders(bestellungen)) --> 7 */
```

<br /><br />

 **2. Schreib eine Funktion singleOrders(), die den "bestellungen" Array entgegennimmt und einen Array mit dem jeweiligen Wert der einzelnen Bestellungen zurückgibt:**
 
 ```
 console.log(singleOrders(bestellungen)) --> [2,4,1] */
```

<br /><br />

**3. Schreibe eine Funktion givePrice(), die den bestellungen Array entgegennimmt und einen drink. Die Funktion, soll den Preis des Getränks zurückgeben.**

```
console.log(givePrice(bestellungen, 'cola')) --> 2
```

<br /><br />

## KLASSEN

**Erstelle eine Klasse "Rectangle" (Rechteck), diese Klasse sollte die Eigenschaften "width" and "height" besitzen. Zusätzlich erstelle für die Klasse folgende Methoden:**
- "calcArea" -> diese Methode sollte die Fläche des jeweiligen Rechtecks zurückgeben (widht * height)
- "isSquare" -> die Methode sollte true zurückgeben wenn width and height gleich sind

*Beispiel:*

```
const rect1 = new Rectangle(2,2)
console.log(rect1.isSquare()) --> true
console.log(rect1.calcArea()) --> 4
```

<br /><br />

## DATA PROCESSING

**Schreibe eine Funktion, die einen String entgegennimmt und überprüft, ob es sich um eine gültige Email eurer Firma handelt. Dafür sollte die Funktion folgendes überprüfen:**
- Länge mindestens 20 Zeichen
- @ enthalten sein
- am Ende sollte 'meine-firma.de' stehen */







