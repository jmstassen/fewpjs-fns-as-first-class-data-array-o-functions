function wakeDog(dogName, dogBreed) {
    let display = `Wake ${dogName} the ${dogBreed}`;
    console.log(display);
    return display;
}

function leashDog(dogName, dogBreed) {
    let display = `Leash ${dogName} the ${dogBreed}`;
    console.log(display);
    return display;
}

function walkToPark(dogName, dogBreed) {
    let display = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(display);
    return display;
}

function throwFrisbee(dogName, dogBreed) {
    let display = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(display);
    return display;
}

function walkHome(dogName, dogBreed) {
    let display = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(display);
    return display;
}

function unleashDog(dogName, dogBreed) {
    let display = `Unleash ${dogName} the ${dogBreed}`;
    console.log(display);
    return display;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    let newArray = []
    for (let i = 0; i < routine.length; i++) {
        let phrase = routine[i](dogName, dogBreed)
        newArray.push(phrase)
    }

    return newArray
}
  