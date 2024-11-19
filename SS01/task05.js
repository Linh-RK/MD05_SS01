// Sử dụng toán tử rest để xây dựng hàm có số lượng tham số không xác định. Khi gọi hàm có thể truyền vào số lượng đối số bất kỳ và hàm có tác dụng in ra tất cả các đối số được truyền vào.
const rest = (...number) => {
  for (let i = 0; i < number.length; i++) {
    console.log(i);
  }
};
rest(1, 2, 3, 4);
