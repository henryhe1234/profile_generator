const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let profile = [];
rl.question('What do you think of Node.js? ', (answer) => {
  profile.push(answer);
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question('What \'s your name? ', (answer) => {
    profile.push(answer);
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question(`What's an activity you like doing `, (answer) => {
      profile.push(answer);
      console.log(`Thank you for your valuable feedback: ${answer}`);
      rl.question(`what do you listen to while doing that?`, (answer) => {
        profile.push(answer);
        console.log(`Thank you for your valuable feedback: ${answer}`);
        console.log(profile);
        rl.close();
      });
    });
  });

});
