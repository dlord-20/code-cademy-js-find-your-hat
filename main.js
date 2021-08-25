// const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this.field = field;
    }
  
    print() {
        for(let i = 0; i < this.field.length; i ++) {
            const line = this.field[i].join('');
            console.log(line);
        }
    }
  }
  
  
  const test = new Field([[hole, fieldCharacter], [pathCharacter, hat]]);
  test.print();

//   use /r to replace character in the game