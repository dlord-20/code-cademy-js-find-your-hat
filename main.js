const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor() {
        this.field = [[]];
        this.currentLocation = [0, 0];
    }

    startGame() {
      this.generateField();
      this.getDirection();
    }

    generateField() {
      let num1 = Math.floor(Math.random() * 10 + 5);
      let num2 = Math.floor(Math.random() * 5 + 5);
      // console.log(num1 + ' ' + num2);
      this.field[0].push(pathCharacter);
      for(let i = 0; i < num1; i++) {
        // console.log('i: ' + i);
        if(i != 0) {
          this.field.push([]);
        }
        for(let j = 0; j < num2; j++) {
          // console.log('j: ' + j);
          let tempChar = Math.floor(Math.random() * 50 + 1);
          if((i != 0) || (j != 0)) {
            if(tempChar > 12) {
            this.field[i].push(fieldCharacter);
            // console.log('field');
            } else {
            this.field[i].push(hole);
            // console.log('hole');
            }
          }
        }
      }
      this.field[num1 - 1].splice(num2 - 1, 1, hat);
      this.print();
    }

    getDirection() {
      let stop = false
      do {
        let direction = prompt('Which way do you want to go? (w, d, s, or a)? ')
        
        stop = this.moveDir(direction);
      } while (stop === false)
    }

    moveDir(direction) {
      if(direction === 'w') {
        return this.move(-1, 0);
      } else if(direction === 's') {
        return this.move(1, 0);
      } else if(direction === 'a') {
        return this.move(-1, 1);
      } else if(direction === 'd') {
        return this.move(1, 1);
      } else {
        console.log('Invalid input: Must be (w, d, s, or a)')
      }
    }

    move(move, location) {
      if(this.currentLocation === null) {

      } else {
        let axisArray = [this.field.length, this.field[0].length];
        if(((this.currentLocation[location] + move) >= 0) && ((this.currentLocation[location] + move) < axisArray[location])) {
          // console.log(this.currentLocation);
          // Change location place

            this.currentLocation.splice(location, 1, this.currentLocation[location] + move);

            // Accessing current location character
            // console.log('row: ' + this.currentLocation[0] + ' col: ' + this.currentLocation[1]);
            // let tempArr = this.field[this.currentLocation[0]];
            // let tempNum = this.currentLocation[1];
            // console.log('array: ' + tempArr);
            // console.log('char: ' + tempArr[tempNum])

            // console.log(tempRow);
            // console.log(tempCol);
            let tempRow = this.currentLocation[0];
            let tempCol = this.currentLocation[1];
            // console.log(this.field[tempRow][tempCol]);
            if(this.field[tempRow][tempCol] === fieldCharacter) {
              this.field[tempRow].splice(tempCol, 1, pathCharacter);
              this.print();
              return false;
              // console.log(tempArr[tempNum]);
              // console.log('-----------');
              // console.log(this.field[this.currentLocation[0]]);
              // console.log(this.field[this.currentLocation[1]]);
              // console.log('-----------');
          } else if(this.field[tempRow][tempCol] === hat) {
            console.log('You win!')
            return true;
          } else {
            console.log('You lose!');
            return true;
          }
        } else {
          this.outOfBounds();
          return false;
        }
      }
    }

    outOfBounds() {
        console.log('Cannot move, out of bounds')

    }
  
    print() {
      // console.log(this.currentLocation[0] + 1);
        for(let i = 0; i < this.field.length; i ++) {
            const line = this.field[i].join('');
            console.log(line);
        }
        //for array rows
        // console.log(this.field.length);
        //For an array cols
        // console.log(this.field[0].length);

    }
  }
  
  
  // const test = new Field([[hole, fieldCharacter, hole], [pathCharacter, hat, hole]]);
  // test.print();
  // test.moveDir('s');
  // test.moveDir('s');
  // test.moveDir('n');
  // // test.moveDir('s');
  // test.moveDir('e');
  // test.moveDir('e');
  // test.moveDir('e');
  // test.moveDir('w');
  // test.moveDir('n');
  const test = new Field();
  console.log('Welcome!')
  console.log('Let us play:');
  test.startGame();
























