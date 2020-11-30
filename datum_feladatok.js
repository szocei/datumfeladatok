//1. Írj egy függvényt, aminek a visszatérési értéke az adott év 01.01. óta eltelt másodperceinek száma!

//2.  Írj egy függvényt, aminek a visszatérési értéke az adott évben eddig eltelt munkanapok (hétfő-péntek) száma!
//----------------------1. feladat -----------------------
'use strict'
console.log('---------------1.feladat---------------');
const maiDatum=new Date();
//const eveleje= new Date('2020-01-01');

function elteltIdo (ertek){
let hatar=new Date(ertek);
const ennyi=(maiDatum.getTime()-hatar.getTime())/1000;
return ennyi;
};
;
console.log(elteltIdo('2020-01-01'));

//-----------------------2.feladat-------------------------
console.log('---------------2.feladat---------------');

function munkanapok(ertek){
    const eveleje=new Date(ertek);
    const napokszama=elteltIdo(eveleje)/60/60/24;
    let munkanaposzama=0;
    for(let i=1;i<napokszama;i += 1){
eveleje.setDate(i);

if (eveleje.getDay(i)<6 && eveleje.getDay(i) !== 0){
    munkanaposzama +=1;
}
    };
console.log(`Ennyi munkanap volt az évben: ${munkanaposzama}`);
    
}
munkanapok('2020-01-01');

console.log('-------------------3.feladat----------------');

function feladat3(param){
const datum=new Date(param);


const rovidho=['jan','febr','márc','ápr','máj','jún','júl','aug','szept','okt','nov','dec'] ;
const hosszuho=['január','február','március','április','május','június','július','augusztus','szeptember','október','november','december'] ;
const szetszedve= {  
short: 
`${datum.getFullYear()}. ${rovidho[datum.getMonth()]}. ${datum.getDate()}. ${datum.getHours()}:${datum.getMinutes()}`,


long:
`${datum.getFullYear()}. ${hosszuho[datum.getMonth()]} ${datum.getDate()}. ${datum.getHours()}:${datum.getMinutes()}:${datum.getSeconds()}`

};
console.log(szetszedve); 
}
feladat3('2020-11-30T14:20:10');

//3. Írj egy függvényt, ami paraméterként egy Date objektumot kap, a visszatérési értéke pedig egy objektum két tulajdonsággal, ami a következő formátumban tartalmazza a paraméterként kapott dátumot:

// short: 2020. jan. 11. 14:20 (tehát évszám, a hónap neve röviden magyarul, kisbetűkkel a nap száma, majd az idő a másodperc nélkül)
// long: 2020. január 11. 14:20:10 (tehát évszám, a hónap neve magyarul, a nap száma, majd az idő)