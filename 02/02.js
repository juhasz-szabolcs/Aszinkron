console.log("Hello, World!");
// 2. **Véletlenszerű szám generálás**
//    - Írj egy aszinkron függvényt, ami egy véletlenszerű idő után 
// (1-5 másodperc) generál egy véletlen számot (1-100) és jelenítse meg.

function veletlenSzamGenerator() {
    return Math.floor(Math.random() * 100) + 1;
}

function veletlenIdoGenerator(minSec, maxSec) {
    return new Promise((resolve) => {
        const veletlenIdo = Math.floor(Math.random() * (maxSec - minSec + 1)) + minSec; 

        console.log(`Véletlenszerű idő generálva: ${veletlenIdo} ms`);

        setTimeout(() => {
            console.log(`Eltelt idő: ${veletlenIdo}`);
            resolve();
        }, veletlenIdo);
    });
};


async function generalas() {
    const ido = await veletlenIdoGenerator(1000, 5000);

    const szam = veletlenSzamGenerator();
    console.log(`A véletlen szám generálása befejeződött: ${szam}`);

}

generalas();
        
