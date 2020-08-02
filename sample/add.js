if (process.argv.length != 4) {
  console.error('You must provide 2 numbers to add.');
  process.exit(1);
}

// capture the arguments from the command line as strings
var num1 = process.argv[2];
var num2 = process.argv[3];

// convert the arguments into integers numbers
num1 = parseInt(num1);
num2 = parseInt(num2);

var sum = num1 + num2;

// Tell the user the result
console.log('The total is:', sum);

// Exit the program successfully
process.exit(0);
