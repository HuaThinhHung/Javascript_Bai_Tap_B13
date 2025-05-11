let totalPriceThue = 0;

function getEleByID(id) {
  return document.getElementById(id);
}
function thuNhapChiuThue(thuNhap, soNguoi) {
  let tongThuNhap = thuNhap - 4000000 - soNguoi * 1600000;
  return tongThuNhap;
}

function tinhThueThuNhap() {
  const hoTen = getEleByID("hoTenThuNhap").value;
  const thuNhap = getEleByID("thuNhapNam").value * 1;
  const soNguoi = getEleByID("soNguoiPhuThuoc").value * 1;
  let thuNhapTinhThue = thuNhapChiuThue(thuNhap, soNguoi);

  if (thuNhap >= 10000000) {
    if (thuNhap <= 60000000) {
      totalPriceThue = thuNhapTinhThue * 0.05;
    } else if (60000000 < thuNhap && thuNhap <= 120000000) {
      totalPriceThue = thuNhapTinhThue * 0.1;
    } else if (120000000 < thuNhap && thuNhap <= 210000000) {
      totalPriceThue = thuNhapTinhThue * 0.15;
    } else if (210000000 < thuNhap && thuNhap <= 384000000) {
      totalPriceThue = thuNhapTinhThue * 0.2;
    } else if (384000000 < thuNhap && thuNhap <= 624000000) {
      totalPriceThue = thuNhapTinhThue * 0.25;
    } else if (624000000 < thuNhap && thuNhap <= 960000000) {
      totalPriceThue = thuNhapTinhThue * 0.3;
    } else if (thuNhap > 960000000) {
      totalPriceThue = thuNhapTinhThue * 0.35;
    }
  } else {
    alert("Thu nhập cả năm không hợp lệ, vui lòng nhập lại.");
    return;
  }
  getEleByID("xuatThue").innerHTML =
    "Họ và Tên: " +
    hoTen +
    " Tiền thuế thu nhập cá nhân: " +
    totalPriceThue +
    "VNĐ";
  getEleByID("divThueThuNhap").style.display = "block";
}
