function tinhKetQua() {
  const diemChuan = document.getElementById("diemChuan").value * 1;
  const mon1 = document.getElementById("mon1").value * 1;
  const mon2 = document.getElementById("mon2").value * 1;
  const mon3 = document.getElementById("mon3").value * 1;
  const khuVuc = document.getElementById("khuVuc").value;
  const doiTuong = document.getElementById("doiTuong").value * 1;

  if ([mon1, mon2, mon3].some((d) => isNaN(d) || d < 0 || d > 10)) {
    document.getElementById("ketQua").innerText =
      "Vui lòng nhập điểm hợp lệ (0 - 10) cho tất cả các môn.";
    return;
  }

  // Điểm ưu tiên khu vực
  let diemKV = 0;
  if (khuVuc === "A") diemKV = 2;
  else if (khuVuc === "B") diemKV = 1;
  else if (khuVuc === "C") diemKV = 0.5;

  // Điểm ưu tiên đối tượng
  let diemDT = 0;
  if (doiTuong === 1) diemDT = 2.5;
  else if (doiTuong === 2) diemDT = 1.5;
  else if (doiTuong === 3) diemDT = 1;

  const tongDiem = mon1 + mon2 + mon3;
  const tongDiemUT = tongDiem + diemKV + diemDT;

  let ketQua = "";
  if (mon1 === 0 || mon2 === 0 || mon3 === 0) {
    ketQua = "Bạn Đã Rớt Tốt Nghiệp Do Bạn Có Điểm 0";
  } else if (tongDiemUT >= diemChuan) {
    ketQua = `Đậu Tốt Nghiệp - Tổng điểm của bạn là: ${tongDiemUT}`;
  } else {
    ketQua = `Rớt Tốt Nghiệp - Tổng điểm của bạn là: ${tongDiemUT}`;
  }

  document.getElementById("ketQua").innerHTML = ketQua;
}
