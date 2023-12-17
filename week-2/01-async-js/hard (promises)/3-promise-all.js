/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  let promise1 = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(`${t} second...`);
    }, t * 1000);
  });
  return promise1;
}

function wait2(t) {
  let promise2 = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(`${t} second...`);
    }, t * 1000);
  });
  return promise2;
}

function wait3(t) {
  let promise3 = new Promise(function (resolve) {
    setTimeout(function () {
      resolve(`${t} second...`);
    }, t * 1000);
  });
  return promise3;
}

async function calculateTime(t1, t2, t3) {
  let startTime = new Date().getTime();

  wait1(t1);
  wait1(t2);
  wait1(t3);
  let endTime = new Date().getTime();

  let totalTime = endTime - startTime;
  console.log(totalTime);
}

// calculateTime(1, 2, 3);
module.exports = calculateTime;
