// const userQuestion = 'Will I become a wereworlf tonight?';
// console.log(`The user asked: ${userQuestion}`);
// let eightBall = Math.floor(Math.random() * 8);
// let eightBallStr = [
//     'It is certain',
//     'It is decidedly so',
//     'Reply hazy try again',
//     'Cannot predict now',
//     'Do not count on it',
//     'My sources say no',
//     'Outlook not so good',
//     'Signs point to yes'
// ][eightBall];
// console.log(`The eight ball answered: ${eightBallStr}`);




const userQuestion = 'Will I become a wereworlf tonight?';
console.log(`The user asked: ${userQuestion}`);
let eightBall = Math.floor(Math.random() * 8);
let eightBallStr = 'No answered';
switch (eightBall) {
  case 0:
    eightBallStr = 'It is certain';
    break;
  case 1:
    eightBallStr = 'It is decidedly so';
    break;
  case 2:
    eightBallStr = 'Reply hazy try again';
    break;
  case 3:
    eightBallStr = 'Cannot predict now';
    break;
  case 4:
    eightBallStr = 'Do not count on it';
    break;
  case 5:
    eightBallStr = 'My sources say no';
    break;
  case 6:
    eightBallStr = 'Outlook not so good';
    break;
  case 7:
    eightBallStr = 'Signs point to yes';
    break;
}
console.log(`The eight ball answered: ${eightBallStr}`);