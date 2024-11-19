// Khởi tạo mảng các chuỗi bất kỳ, hãy nhóm các chuỗi có các ký tự giống nhau vào trong các mảng riêng.
// Kết quả cuối cùng là mảng chứa các mảng chuỗi sau khi nhóm.
// Input
// Output
// ["eat", "tea", "tan", "ate", "nat", "bat"]
// [["eat","tea","ate"], ["tan","nat"], ["bat"]]
const result = [];
const unique = [];
let tem = [];

const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

const outPut = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    tem = arr[i].split("").sort().join("");
    if (unique.indexOf(tem) !== -1) {
      result[unique.indexOf(tem)].push(arr[i]);
    } else {
      unique.push(tem);
      result.push([arr[i]]);
    }
  }
  return result;
};

console.log(outPut(arr));
