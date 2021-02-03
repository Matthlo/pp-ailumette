module.exports = async function question1() {}
const display = require ('./display.js')
const readline = require('readline')
const lodash = require("lodash");
const map = [
  ['*','*','*','*','*','*','*','*','*'],
  ['*',' ',' ',' ','|',' ',' ',' ','*'],
  ['*',' ',' ','|','|','|',' ',' ','*'],
  ['*',' ','|','|','|','|','|',' ','*'],
  ['*','|','|','|','|','|','|','|','*'],
  ['*','*','*','*','*','*','*','*','*'],
]

let answer1 = ""
let answer2 = ""
let nombresAlumettes = 0

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Line : ', (answer) => {
      if ( answer > 4 || answer == '0') {
        console.log('Error: this line is out of range')
        return
      }
      else if (answer < 0 || isNaN(answer) || answer == 0){
        console.log('Error: invalid input (positive number expected)')
        return
      }
       answer1 = answer
      resolve()
    })

  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Matches: ', (answer) => {
      if (answer == '0') {
        console.log('Error: you have to remove at least one match')
        return
      }
      else if (answer < 0 || isNaN(answer) || answer == 0){
        console.log('Error: invalid input (positive number expected)')
        return
      }
      else if(answer > 2) {
        console.log('Error: not enough matches on this line')
        return false;
      }
      answer2 = answer
      resolve()
    })
  })
}

const main = async () => {
  await question1()
  await question2()

let count = 0
  for (let i = 0; i < 9; i++) {
        if (map[answer1-1][i] == "|") count++
      }
      if (answer2>count){
        console.log("We have", count, "alumette and you try to remove" ,answer2,", this can't work")
        return
      }
      else {
        for (let i = 0; i < 9; i++) {
          if ((map[answer1-1][i] == "|")&&(answer2>0)) {
            map[answer1-1][i] = " "
            
      }}}
  console.log ("Player removed", answer2, "match(es) from line", answer1)
  
  function display(values) {
    const rows = values.length

    for (let x = 0; x < rows; x++) {
        console.log(map[x].join(''))
    }
}

    lodash.each(map, (line) => {
      nombresAlumettes += lodash.countBy(line)["|"] || 0;
    });




  display(map)
  console.log(nombresAlumettes, "alumettes sur le plateau")
  rl.close()
}
main() 
