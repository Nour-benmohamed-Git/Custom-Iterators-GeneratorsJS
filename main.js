//Iterators:

const array = ["My", "name", "is", "Nour elhak benmohamed"];
const object = { key_1: "value_1", key_2: "value_2", key_3: "value_3" };

const createIterator = (iterable) => {
  if (typeof iterable[Symbol.iterator] !== "function") {
    throw new TypeError("The provided value is not iterable");
  }
  let index = 0;
  return {
    next: function () {
      return index < iterable.length
        ? { value: iterable[index++], done: false }
        : { done: true };
    },
  };
};
const myCustomIterator = createIterator(array);
console.log(myCustomIterator.next()); //{ value: 'My', done: false }
console.log(myCustomIterator.next()); //{ value: 'name', done: false }
console.log(myCustomIterator.next()); // value: 'is', done: false }
console.log(myCustomIterator.next()); //{ value: 'Nour elhak benmohamed', done: false }
console.log(myCustomIterator.next()); //{ done: true }

//Generators:

function* myGenerator(collection) {
  for (const item of collection) {
    yield item;
  }
}
const generator = myGenerator(array);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
