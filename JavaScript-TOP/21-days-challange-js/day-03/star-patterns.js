// Q1 Right-Angled star triangle

let rows = 5;

for(let i = 1; i <= rows; i++) {
    let star = '';
    for(let j = 1; j <= i; j++) {

        star += '*';
    }
    console.log(star);
}