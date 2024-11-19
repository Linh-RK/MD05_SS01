// Tạo mảng các đối tượng sinh viên, mỗi sinh viên gồm các thông tin bao gồm id và name.
// Sử dụng hàm nâng cao, tiến hành duyệt qua tất cả các sinh viên trong mảng và in lời chào với mỗi sinh v
const arrSv = [
  {
    id: 1,
    fullName: "linh",
  },
  {
    id: 2,
    fullName: "huong",
  },
  {
    id: 3,
    fullName: "tac",
  },
  {
    id: 4,
    fullName: "huynh",
  },
];

for (let i = 0; i < arrSv.length; i++) {
  console.log(`Hello ${arrSv[i].fullName}`);
}
