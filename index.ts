function productExceptIndex(
  arr: Array<number>,
  index: number,
  valueToInterpolate: number
) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) {
      product *= valueToInterpolate - arr[i];
    }
  }
  return product;
}

function denominatorProduct(arr: Array<number>, index: number) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) {
      product *= arr[index] - arr[i];
    }
  }
  return product;
}

function interpolate(
  x: Array<number>,
  y: Array<number>,
  valueToInterpolate: number
) {
  let result = 0;

  for (let i = 0; i < x.length; i++) {
    let numerator = productExceptIndex(x, i, valueToInterpolate);
    let denominator = denominatorProduct(x, i);
    result += y[i] * (numerator / denominator);
  }

  return result;
}

var x = [500, 1000, 1500, 2000, 2500, 3000];
var y = [2.74, 5.48, 7.9, 11.0, 13.93, 16.43];
var valueToInterpolate = 1640;

//Printing the data
for (var i = 0; i < x.length; i++) {
  console.log(`x${i}: ${x[i]}, y${i}: ${y[i]}`);
}

let interpolatedValue = interpolate(x, y, valueToInterpolate);
console.log(
  `Interpolated value for ${valueToInterpolate}: ${interpolatedValue.toFixed(
    4
  )}`
);
