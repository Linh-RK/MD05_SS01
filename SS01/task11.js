// Khởi tạo hai mảng đã được sắp xếp theo thứ tự tăng dần, hãy hợp nhất hai mảng thành một mảng sao cho trong quá trình này thứ tự sắp xếp tăng dần vẫn được giữ nguyên.

// Input
// Output
// [1, 2, 3, 5, 9], [4, 6, 7, 8]
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
const insertAndSort = (...arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result = [...result, ...arr[i]];
  }
  return result.sort();
};
console.log(insertAndSort([1, 2, 3, 5, 9], [4, 6, 7, 8]));
