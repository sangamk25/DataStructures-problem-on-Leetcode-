function fractionalKnapsack(N, W, values, weights) {
  const items = [];

  for (let i = 0; i < N; i++) {
    items.push({
      value: values[i],
      weight: weights[i],
      ratio: values[i] / weights[i],
    });
  }

  // Sort items by the ratio of value to weight in descending order
  items.sort((a, b) => b.ratio - a.ratio);

  let maxTotalValue = 0;

  for (let i = 0; i < N; i++) {
    if (W === 0) {
      break; // Knapsack is full
    }

    const currentItem = items[i];
    const WeightAmountToTake = Math.min(currentItem.weight, W);
    maxTotalValue += (WeightAmountToTake / currentItem.weight) * currentItem.value;
    W -= WeightAmountToTake;

  }

  return maxTotalValue;//.toFixed(6);
}

const N = 3;
const W = 50;
const values = [60, 100, 120];
const weights = [10, 20, 30];

const result = fractionalKnapsack(N, W, values, weights);
console.log("Maximum Total Value: " + result);



//
// Given weights and values of N items, we need to put these items in a knapsack of capacity W to get the maximum total value in the knapsack.
// Note: Unlike 0/1 knapsack, you are allowed to break the item. 

 

// Example 1:

// Input:
// N = 3, W = 50
// values[] = {60,100,120}
// weight[] = {10,20,30}
// Output:
// 240.00
// Explanation:Total maximum value of item
// we can have is 240.00 from the given