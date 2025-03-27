// DOM Manipulation


//membuat 2 paragraf baru dan 1 H1 di akhir section a dan memberikan teks pada paragraf tersebut
// --> document.createElement()
// Buat elemen baru <p>
const pBaru = document.createElement('p');
const pBaru2 = document.createElement('p');
const pBaru3 = document.createElement('h1');

// --> document.createTextNode()
// Buat teks "paragraf baru"
const textPbaru = document.createTextNode('paragraf baru');
const textBaru2 = document.createTextNode('Mikael ganteng');
const textBaru3 = document.createTextNode('Sang Pendekar');

// --> node.appendChild()
// Simpan teks ke dalam elemen <p>
pBaru.appendChild(textPbaru);
pBaru2.appendChild(textBaru2);
pBaru3.appendChild(textBaru3);

// Simpan <p> baru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);
sectionA.appendChild(pBaru2);
sectionA.appendChild(pBaru3);

//---------------------------------------------------------------------------------

// Buat elemen <li> baru
const liBaru = document.createElement('li');
const liBaru2 = document.createElement('li');

// Buat teks "Item Baru"
const teksLiBaru = document.createTextNode('Item Baru');
const teksLiBaru2 = document.createTextNode('Aku ganteng');

// Simpan teks ke dalam elemen <li>
liBaru.appendChild(teksLiBaru);
liBaru2.appendChild(teksLiBaru2);

// --> node.insertBefore()
// Pilih elemen <ul> dalam section B
const ul = document.querySelector('section#b ul');
// Pilih elemen <li> kedua dalam <ul>
const li2 = ul.querySelector('li:nth-child(2)');
const li3 = ul.querySelector('li:nth-child(3)')

// Sisipkan <li> baru sebelum <li> kedua
ul.insertBefore(liBaru, li2);
ul.insertBefore(liBaru2, li3);

// --> parentNode.removeChild()
// Pilih elemen <a> pertama dalam dokumen
const link = document.getElementsByTagName('a')[0];

// Hapus elemen <a> dari section A
sectionA.removeChild(link);

// --> parentNode.replaceChild()
// Pilih section B
const sectionB = document.getElementById('b');
// Pilih paragraf pertama dalam section B
const p4 = sectionB.querySelector('p');

// Buat elemen <h2> baru
const h2Baru = document.createElement('h2');
// Buat teks "judul baru!"
const teksH2Baru = document.createTextNode('judul baru!');

// Simpan teks ke dalam elemen <h2>
h2Baru.appendChild(teksH2Baru);

// Gantikan <p> dengan <h2> baru di section B
sectionB.replaceChild(h2Baru, p4);

// Ubah warna latar belakang elemen baru
pBaru.style.backgroundColor = 'lightBlue';  // Warna latar belakang untuk <p> baru
liBaru.style.backgroundColor = 'lightGreen'; // Warna latar belakang untuk <li> baru
h2Baru.style.backgroundColor = 'red';  // Warna latar belakang untuk <h2> baru
