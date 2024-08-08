// Mock function with delay to simulate an actual order
export function orderFoodFromBigFoodCompany(food, count) {
  return new Promise<void>((resolve) => {
    console.log(`Ordering ${count} more ${food}`);

    setTimeout(() => {
      console.log("Done!");

      resolve();
    }, 1000 + 2000 * Math.random());
  });
}
