/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  let currentTime = new Date().getTime();
  let start = 0;
  // console.log(currentTime);
  while (start < seconds) {
    start = new Date().getTime() - currentTime;
  }
}
console.log("Started busy waiting");
sleep(2000);
console.log("Busy wait ended");
