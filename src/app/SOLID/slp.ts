// ❌ MAL

class BirdBad {
  fly(): string {
    return "I can fly!";
  }

  eat(): string {
    return "I can eat!";
  }
}

class PenguinBad extends BirdBad {
  // En esta versión incorrecta, no sobrescribimos el método fly
  // para manejar el hecho de que los pingüinos no pueden volar.

  swim(): string {
    return "I can swim!";
  }
}

const birdFlyingBad = (bird: Bird) => {
  return bird.fly();
}

const birdEatingBad = (bird: Bird) => {
  return bird.eat();
}

// Creamos instancias de Bird y Penguin
const myBirdBad = new BirdBad();
const myPenguinBad = new PenguinBad();

console.log("Bird eating: " + birdEatingBad(myBirdBad));
console.log("Penguin eating: " + birdEatingBad(myPenguinBad));

console.log("Penguin flying: " + birdFlyingBad(myPenguinBad));


// ✅ BIEN
class Bird {
  fly(): string {
    return "I can fly!";
  }

  eat(): string {
    return "I can eat!";
  }
}

class Penguin extends Bird {
  // Sobrescribimos el método fly para manejar correctamente
  // el hecho de que los pingüinos no pueden volar.
  override fly(): never {
    throw new Error("I can't fly!");
  }

  swim(): string {
    return "I can swim!";
  }
}

const birdFlying = (bird: Bird) => {
  try {
    return bird.fly();
  } catch (error: any) {
    return error.message;
  }
}

const birdEating = (bird: Bird) => {
  return bird.eat();
}

// Creamos instancias de Bird y Penguin
const myBird = new Bird();
const myPenguin = new Penguin();


console.log("Bird eating: " + birdEating(myBird));
console.log("Penguin eating: " + birdEating(myPenguin));

console.log("Penguin flying: " + birdFlying(myPenguin));
