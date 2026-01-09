// 1. **Időzített üzenetek**
//    - Írj egy aszinkron függvényt, ami három különböző időzítéssel (1, 2, és 3 másodperc) 
// ír ki egy-egy üzenetet a konzolra.

// async function időzítettÜzenetek() {
//     setTimeout(() => {
//         console.log("1 másodperc eltelt");
//     }, 1000);

//     setTimeout(() => {
//         console.log("2 másodperc eltelt");
//     }, 2000);

//     setTimeout(() => {
//         console.log("3 másodperc eltelt");
//     }, 3000);
// }
// időzítettÜzenetek();

// 2. **Promise alapú időzítés**

function idozetettPromise(idő) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Eltelt ${idő / 1000} másodperc`);
            resolve();
        }, idő);
    });
}

async function idozitettUzenetek() {
    await idozetettPromise(1000);
    await idozetettPromise(2000);
    await idozetettPromise(3000);

    console.log("Minden időzítés befejeződött");
}

idozitettUzenetek();