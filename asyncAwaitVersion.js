
function mowYard(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${name} mowed the yard`);
        
        }, 2000);
    });
}




function weedEat(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        
            const didSleep = Math.random() < .1;
            if (!didSleep) {
                resolve(`${name} finished using the weed eater.`);
            
            } 
            else {
                reject(`${name} fell asleep after mowing the yard`)

            }
    
        }, 1500);
    });
}

function trimHedges(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const didSleep = Math.random() < .1;
            if (!didSleep) {
                resolve(`${name} finished trimming the hedges.`);
              
            } 
            else {
                reject(`${name} fell asleep after weed eating the yard.`)

            }
            
        }, 1000);
    });    
}

function collectWood(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const didSleep = Math.random() < .3;
            if (!didSleep) {
                resolve(`${name} finished collecting wood.`);
            
            } 
            else {
                reject(`${name} fell asleep after trimming the hedges.`)

            }
            
        }, 2500);
    });
}

function waterGarden(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const didSleep = Math.random() < .5;
            if (!didSleep) {
                resolve(`${name} finished watering the garden.`);
            } 
            else {
                reject(`${name} fell asleep after collecting wood.`)

            }
            
        }, 500);
    });
}

function doSummerChores(name) {
    return new Promise((resolve, reject) => {
        resolve(`${name} finished all their chores!`);
        
    });
}
const name = process.argv[2] || "Charlie";

async function chores() {
    try{
        const mowYardResult = await mowYard(name);
        console.log(mowYardResult);
        
        const weedEatResult = await weedEat(name);
        console.log(weedEatResult);

        const trimHedgesResult = await trimHedges(name);
        console.log(trimHedgesResult);

        const collectWoodResult = await collectWood(name);
        console.log(collectWoodResult);

        const waterGardenResult = await waterGarden(name);
        console.log(waterGardenResult);

        const doSummerChoresResult = await doSummerChores(name);
        console.log(doSummerChoresResult);

    }
    catch(error){
        console.error(error)
    }
}

chores();