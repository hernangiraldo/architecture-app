// ❌ MAL

interface Robot {
  recharge(): void;
  walk(): void;
  fly(): void;
  swim(): void;
}


class WalkingRobotBad implements Robot {
  recharge() {
    console.log('Recharging...');
  }

  walk() {
    console.log('Walking...');
  }

  fly() {
    // No debería volar
    throw new Error('Cannot fly!');
  }

  swim() {
    // No debería nadar
    throw new Error('Cannot swim!');
  }
}



// ✅ BIEN

interface Rechargeable {
  recharge(): void;
}

interface Walker {
  walk(): void;
}

interface Flyer {
  fly(): void;
}

interface Swimmer {
  swim(): void;
}

class WalkingRobot implements Rechargeable, Walker {
  recharge() {
    console.log('Recharging...');
  }

  walk() {
    console.log('Walking...');
  }
}

class FlyingRobot implements Rechargeable, Flyer {
  recharge() {
    console.log('Recharging...');
  }

  fly() {
    console.log('Flying...');
  }
}


