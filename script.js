function ubahProfil() {
  document.getElementById("nama").innerHTML = "Nama Anda";
  document.getElementById("status").innerHTML = "Calon Web Developer";
}

function tambahPengalaman() {
  let list = document.getElementById("pengalaman");
  let item = document.createElement("li");
  item.innerHTML = "Praktik Kerja Lapangan (PKL)";
  list.appendChild(item);
}
