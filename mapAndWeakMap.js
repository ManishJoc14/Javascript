// 1. Understanding strong references
{
  let dog = { name: "badger" };

  const pets = [dog];

  dog = null;

  console.log(pets); // [{ name: "badger" }]
}
//you can see dog obj even if you set dog = null
// since dog was used in pets array
// so dog is not garbage collected (i.e dog is not removed from memory)
// so we can say there is a strong reference betweeen dog obj and pets arr

// a strong reference is a reference that keeps an object in memory.
// In other words, the strong reference prevents removing the object from memory via garbage collection.

// 2. Understanding weak references
{
  let pets = new WeakMap();
  let dog = { name: "badger" };

  pets.set(dog, "okay");
  console.log(pets); // WeakMap{ {...} -> "Okay" } <= dog set to the WeakMap

  dog = null; // Overwrite the reference to the object
  console.log(pets); // WeakMap(0) <= dog has been garbage collected.
}

// A strong reference prevents an object from garbage collection
// (i.e prevents from being removed from mememory)
// while a weak one will not.

// By default, JavaScript uses strong references for all of its references and the only way to use weak references is to use either a WeakMap or a WeakSet.
