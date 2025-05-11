const KW_1 = 500;
const KW_2 = 650;
const KW_3 = 850;
const KW_4 = 1100;
const KW_5 = 1300;
let totalPrice = 0;

function getByID(id) {
  return document.getElementById(id);
}
function tinhGiaDien(soKw) {
  if (soKw <= 50) {
    totalPrice = calcPhase1(soKw, KW_1);
  } else if (soKw <= 100) {
    totalPrice = calcPhase1(50, KW_1) + calcPhase2(soKw, KW_2);
  } else if (soKw <= 150) {
    totalPrice =
      calcPhase1(50, KW_1) + calcPhase2(100, KW_2) + calcPhase3(soKw, KW_3);
  } else if (soKw > 150) {
    totalPrice =
      calcPhase1(50, KW_1) +
      calcPhase2(100, KW_2) +
      calcPhase3(150, KW_3) +
      calcPhase4(soKw, KW_4);
  } else {
    alert("Nhập đúng giá trị");
    totalPrice = 0;
  }
}
function tinhTongTien() {
  const hoTenKw = getByID("hoTenKw").value;
  const soKw = getByID("soKw").value * 1;

  tinhGiaDien(soKw);
  getByID("xuatTien").innerHTML =
    "Họ và Tên : " +
    hoTenKw +
    " Số tiền điện bạn cần đóng là : " +
    totalPrice +
    " VNĐ";
  getByID("divThanhTien").style.display = "block";
}

function calcPhase1(soKw, price) {
  const rs = soKw * price;
  return rs;
}
function calcPhase2(soKw, price) {
  const rs = (soKw - 50) * price;
  return rs;
}
function calcPhase3(soKw, price) {
  const rs = (soKw - 100) * price;
  return rs;
}
function calcPhase4(soKw, price) {
  const rs = (soKw - 150) * price;
  return rs;
}
