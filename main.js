// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”

let buzzfizzcont = document.querySelector('#fizbuz-container')

for (let i = 1; i <= 100; i++) {
    

    
    if (i % 3 === 0 && i % 5 === 0) {

        console.log("BuzzFizz")
        let buficont = document.createElement("span");
        buficont.innerHTML = `${"BuzzFizz"}`;
        buficont.classList.add("buzzfizz");
        buzzfizzcont
        buzzfizzcont.append(buficont)

     
    } else if (i % 3 === 0) {

        console.log("Fizz")
        let fizzcont = document.createElement("span");
        fizzcont.innerHTML = `${"Fizz"}`;
        fizzcont.classList.add("fizz");
        buzzfizzcont
        buzzfizzcont.append(fizzcont)


    } else if (i % 5 === 0) {

        console.log("Buzz")
        let buzzcont = document.createElement("span");
        buzzcont.innerHTML = `${"Buzz"}`;
        buzzcont.classList.add("buzz");
        buzzfizzcont
        buzzfizzcont.append(buzzcont)

    } else {

        console.log(i)
        let number = document.createElement("span");
        number.innerHTML = `${i}`;
        number.classList.add("number");
        buzzfizzcont
        buzzfizzcont.append(number)
    }

}