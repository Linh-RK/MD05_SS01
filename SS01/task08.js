// Xây dựng hàm có 3 tham số là 2 mảng và vị trí để chèn, khi gọi hàm thì tiến hành chèn mảng số 2 vào vị trí của mảng số 1. Nếu vị trí không hợp lệ thì thông báo lên màn hình.
// Input
// Output
// [1,2,3,7,8], [4,5,6], 3
// [1,2,3,4,5,6,7,8]
// [‘a’, ’b’, ’e’, ’f’], [‘c’,’d’], 2
// [‘a’,’b’,’c’,’d’,’e’,’f’]

const arr1 = [1, 2, 3, 7, 8];
const arr2 = [4, 5, 6];
const insert = (array1, array2, index) => {
  if (index > array1.length) {
    console.log("Index khong hop le");
  } else {
    array1.splice(index, 0, ...array2);
    return array1;
  }
};
console.log(insert(arr1, arr2, 3));
