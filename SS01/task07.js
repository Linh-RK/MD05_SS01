// Xây dựng hàm có tham số là các đối tượng, số lượng tham số là không xác định.
// Hàm có tác dụng hợp nhất các đối tượng được truyền vào thành một đối tượng duy nhất.
// Nếu tên thuộc tính bị trùng nhau thì lấy thuộc tính của đối tượng cuối cùng.
// Kết quả trả về của hàm là đối tượng sau khi hợp nhất.
let result = {};
const mergeObjects = (...obj) => {
  for (let i = 0; i < obj.length; i++) {
    result = { ...result, ...obj[i] };
  }
  return result;
};
console.log(
  mergeObjects(
    {
      id: 1,
      fullName: "Linh",
    },
    {
      fullName: "Vi",
      address: "HN",
    },
    {
      gender: "Female",
      email: "linh@gmail.com",
    }
  )
);
