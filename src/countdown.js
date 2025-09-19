/**
 * Function: countdownTimer
 * Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0.
 *
 * Steps:
 * 1. Accept two parameters: `startTime` (in seconds) and `interval` (in milliseconds).
 * 2. Use `setInterval` to decrement the time and log the remaining time.
 * 3. Stop the timer using `clearInterval` when the remaining time reaches 0.
 * 4. Return the timer ID so it can be used for test validation.
 *
 * Example Usage:
 * countdownTimer(10, 1000); // Logs remaining time every second for 10 seconds.
 */

  // Initialize the remaining time
  // Set up a timer using setInterval
  // Log the remaining time and decrement it
  // Stop the timer when time reaches 0
  // Return the timer ID for validation

function countdownTimer(startTime, interval) {


  let remainingTime = startTime;
  let timerId = setInterval(() => {
  console.log(remainingTime);
  remainingTime--;

  //stop condition
  if(remainingTime === 0){
    clearInterval(timerId);
  }
}, interval);

  return timerId;
  
}

countdownTimer(5, 1000);

module.exports = { countdownTimer };


// let timerId = setInterval(() => {
//     console.log(`Remaining time: ${startTime}`);

//     clearInterval(timerId);
//     console.log("Timer finished")
//   }, interval);

//   return timerId;