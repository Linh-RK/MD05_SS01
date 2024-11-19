// Khai báo, gán giá trị cho một mảng và một biến bất kỳ.
// Sử dụng toán tử spread để thực hiện copy mảng đã khai báo đồng thời đẩy thêm biến đã khai báo vào mảng vừa copy.
// In mảng đó ra để kiểm tra kết quả.
const number = 5;
const array = [1, 2, 3, 4];
const array1 = [...array, number];
console.log(array1);
