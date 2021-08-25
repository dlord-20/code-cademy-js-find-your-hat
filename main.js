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
            // console.log(`Row; ${i}`);
            for(let j = 0; j < this.field[i].length; j++) {
                // console.log(`j: ${j}`);
                process.stdout.write(this.field[i][j] + " ");
                // process.stdout.write(this.field[i][j]);
            }
            console.log();
        }
    }
  }
  
  
  const test = new Field([[hole, fieldCharacter], [pathCharacter, hat]]);
  test.print();

//   use /r to replace character in the game