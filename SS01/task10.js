// Xây dựng hàm có tham số là các mảng, số lượng tham số là không xác định.
// Hàm có tác dụng tính tổng các phần tử trong các mảng được truyền vào và lưu tổng đó vào một mảng mới.
// Kết quả trả về là mảng chứa tổng của các mảng là đối số truyền vào.
// Input
// Output
// [1,2], [6,7,8], [12,8],…
// [3, 21, 20]

const array = (...arr) => {
  let sum = 0;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const sum = arr[i].reduce((acc, curr) => acc + curr, 0);
    result.push(sum);
  }
  return result;
};
console.log(array([1, 2], [6, 7, 8], [12, 8]));
