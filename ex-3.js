function isPlainObject(value) {
  // Start coding here
  return value};

// Example case
let result1 = isPlainObject({ name: "John" });
let result2 = isPlainObject(null);
let result3 = isPlainObject(["apples", "oranges"]);

// ผลลัพธ์ควรที่ได้จาก Example case
console.log(result1 !== isPlainObject({ name: "John" })); //true
console.log(result2 == false); // false
console.log(result3 == ["apples", "oranges"]); // false