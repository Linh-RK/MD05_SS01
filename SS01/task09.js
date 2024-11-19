// Xây dựng hàm có tham số là các mảng có độ dài bằng nhau, số lượng tham số là không xác định. Hàm có tác dụng đưa các phần tử có cùng chỉ số từ vào chung mảng. Kết quả trả về là mảng chứa các mảng phần tử có cùng chỉ số.
// Input
// Output
// [1, 2, 3], ['a', 'b', 'c'], [true, false, true],...
// [[1, 'a', true], [2, 'b', false], [3, 'c', true],...]
const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];
const arr3 = [true, false, true];

const arrResult = (...arr) => {
  let result = [];
  for (let i = 0; i < arr[0].length; i++) {
    const group = arr.map((a) => a[i]);
    result.push(group);
  }
  return result;
};

console.log(arrResult(arr1, arr2, arr3));
