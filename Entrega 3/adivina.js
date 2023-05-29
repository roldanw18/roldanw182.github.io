var x = Math.round(Math.random() * 20);
var num = prompt('Ingrese un numero');

if (num < x) {
 console.log('Tu numero es muy bajo');
} else if (num > x) {
 console.log('Tu numero es muy alto');
} else if (num == x) {
 console.log('Adivinaste el numero');
}
} while(num != 0 && num != x);