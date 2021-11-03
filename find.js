const elements = [1, 2, 3, 4, 5, 5];
let result = find(elements, 4);

console.log("Element 4 is found at index " + result);

function find(elements, key) {
  for (i = 0; i < elements.length; i++) {
    if (key == elements[i]) {
      return i;
    }
  }
  return;
}
