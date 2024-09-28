let n = prompt("Enter a number:");
n = parseInt(n);
function printEvenNumbers(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
             console.log(i);
        }
    }
    
}

printEvenNumbers(n);