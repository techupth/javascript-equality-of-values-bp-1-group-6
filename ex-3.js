function isPlainObject(name) {
    if (typeof name === 'object') {
        if (!Array.isArray(name)) {
            return true; 
        } else {
            return false; 
        }
        if (null(name)) {
            return true; 
        } else {
            return false; 
        }
    } else {
        return "This is not an object"; 
    }
}

console.log(isPlainObject({})); 
console.log(isPlainObject([])); 
console.log(isPlainObject(null)); 
console.log(isPlainObject("")); 


// Example case
let result1 = isPlainObject({ name: "John" });
let result2 = isPlainObject(null);
let result3 = isPlainObject(["apples", "oranges"]);

// ผลลัพธ์ควรที่ได้จาก Example case
console.log(result1); //true
console.log(result2); // false
console.log(result3); // false
