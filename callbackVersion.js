
function mowYard(callback){
    set timeout(() => {
        const didSleepMow = Math.random() < .2;
        if (didSleepMow > 0) {
            console.log("Charlie mowed the yard");
        } 
        else {
            console.log("Charlie fell asleep after mowing the yard")

        }
    }, 2000
    )
}

mowYard() => {
    
}