/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  let promise1 = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("1 second...");
    }, 1000);
  });
  return promise1;
}

function waitTwoSecond() {
  let promise2 = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("2 second...");
    }, 2000);
  });
  return promise2;
}

function waitThreeSecond() {
  let promise3 = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("3 second...");
    }, 3000);
  });
  return promise3;
}

waitOneSecond().then(function (value) {
  console.log(value);
});

waitTwoSecond().then(function (value) {
  console.log(value);
});

waitThreeSecond().then(function (value) {
  console.log(value);
});

function calculateTime() {
  let d = new Date();
  console.log(d.getDate());
}

calculateTime();
