const ValueObject = require('./ValueObject');

class Player extends ValueObject {

  rules() {
    return {
      playerId: 'string|required'
    }
  }
}

const player = new Player({playerId: 111});
