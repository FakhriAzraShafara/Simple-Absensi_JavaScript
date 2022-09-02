console.log('Hello!');

let absensi_form = document.getElementById('absensi_form');
let root = document.getElementById('root');

//array untuk menampung data absensi
let absensi_data = [];

// addEventListener element absensi_form
absensi_form.addEventListener('submit', (event) => {
  // mencegah form dari reload page
  event.preventDefault();

  let fullname = event.target.fullname.value;

  if (fullname == '') {
    alert('Silakan masukkan nama lengkap');
    return;
  }

  //push data ke array absensi data
  absensi_data.push({
    nama_lengkap: fullname,
    waktu: new Date().toLocaleTimeString(),
    tanggal: new Date().toLocaleDateString(),
  });

  //reset input field
  event.target.fullname.value = '';

  //panggil function render to html
  renderToHTML();
});

//function untuk render data array ke div root
function renderToHTML() {
  //result element div root
  root.innerHTML = '';

  //mapping array to html element
  absensi_data.forEach((e, i) => {
    root.innerHTML += `
    <div class="card" draggable="true" ondragend="handleDelete(${i})">
      <span> ${i + 1}. &nbsp; ${e.nama_lengkap} </span> 
      <span> ${e.waktu} ${e.tanggal}</span>
    </div>
    `;
  });
}

//delete function
function handleDelete(index) {
  // console.info(index);

  absensi_data.splice(index, 1);

  renderToHTML();
}
