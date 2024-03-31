const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
  