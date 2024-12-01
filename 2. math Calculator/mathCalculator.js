class Calculator {

        add({a, b}) {
          const wynik = a + b;
          console.log(`Wynik dodawania: ${a} + ${b} = ${wynik}`);
        }

        substruct({a,b}) {
            const wynik = a - b
            console.log(`Wynik odejmowania: ${a} - ${b} = ${wynik}`)
        }

        multipy({a,b}) {
            const wynik = a * b
            console.log(`Wynik mnożenia: ${a} * ${b} = ${wynik}`)
        }

        divide({a,b}){
            const wynik = a / b
            console.log(`Wynik dzielenia: ${a} : ${b} = ${wynik}`)
        }

        

} 

const calculator = new Calculator();


calculator.add({a: 4, b: 5});


