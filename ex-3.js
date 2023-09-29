function isPlainObject(value) {
  //  ถ้าเป็น Object และไม่ใช่ Array และไม่ใช่ Null
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// Example case
let result1 = isPlainObject({ name: "John" });
let result2 = isPlainObject(null);
let result3 = isPlainObject(["apples", "oranges"]);

// ผลลัพธ์ควรที่ได้จาก Example case
console.log(result1); //true
console.log(result2); // false
console.log(result3); // false
