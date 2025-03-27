// DOM Manipulation


//membuat 2 paragraf baru dan 1 H1 di akhir section a dan memberikan teks pada paragraf tersebut
// --> document.createElement()
// Buat elemen baru <p>
const pBaru = document.createElement('p');//membuat element paragraf yang ada pada document dan menyimpannya ke variabel pBaru
const pBaru2 = document.createElement('p');//membuat element paragraf yang ada pada document dan menyimpannya ke variabel pBaru2
const hBaru1 = document.createElement('h1');//membuat element H! yang ada pada document dan menyimpannya ke variabel hBaru1

// --> document.createTextNode()
// Buat teks "paragraf baru"
const textPBaru = document.createTextNode('paragraf baru');//membuat sebuah teks node yang ada pada document dan disimpan pada variable textPBaru
const textBaru2 = document.createTextNode('Mikael ganteng');
const textBaru3 = document.createTextNode('Sang Pendekar');

// --> node.appendChild()
// Simpan teks ke dalam elemen <p>
pBaru.appendChild(textPBaru);//menyimpan element textPBaru kevariable pBaru
pBaru2.appendChild(textBaru2);
hBaru1.appendChild(textBaru3);

// Simpan <p> baru di akhir section A
const sectionA = document.getElementById('a');//memilih penempatan di section a
sectionA.appendChild(pBaru);//menyimpan variable pBaru ke section a
sectionA.appendChild(pBaru2);
sectionA.appendChild(hBaru1);

//=========================================================================================================

// Buat elemen <li> baru
const liBaru = document.createElement('li');//membuat element li yang ada pada document dan menyimpannya ke variabel liBaru
const liBaru2 = document.createElement('li');

// Buat teks "Item Baru"
const teksLiBaru = document.createTextNode('Item Baru');//membuat teks node "item Baru" pada document dan menyimpan ke variable teksLiBaru
const teksLiBaru2 = document.createTextNode('Aku ganteng');

// Simpan teks ke dalam elemen <li>
liBaru.appendChild(teksLiBaru);//menyimpan variabel teksBaru pada variabel liBaru
liBaru2.appendChild(teksLiBaru2);

// --> node.insertBefore()
// Pilih elemen <ul> dalam section B
const ul = document.querySelector('section#b ul');// memilih ul section b dan disimpan pada variabe ul
// Pilih elemen <li> kedua dalam <ul>
const li2 = ul.querySelector('li:nth-child(2)');//memilih penempatan pada anak ke 2 dari lu dan minyimpan pada variable li2
const li3 = ul.querySelector('li:nth-child(3)')

// Sisipkan <li> baru sebelum <li> kedua
ul.insertBefore(liBaru, li2);//variable liBaru ditaroh ke li2(urutan 2) dan dimasukkan pada lu
ul.insertBefore(liBaru2, li3);

//=======================================================================================


// Pilih section B
const sectionB = document.getElementById('b');

// --> parentNode.removeChild()
// Pilih elemen <a> pertama dalam dokumen
const link = document.getElementsByTagName('a')[0];//memilih a pertama pada document dan disimpan pada variable link
const h2 = document.getElementsByTagName('h2')[0];


// Hapus elemen <a> dari section A
sectionA.removeChild(link);//menghapus link
sectionB.removeChild(h2);

//=========================================================================================================

// --> parentNode.replaceChild()
const pList = sectionB.querySelectorAll('p'); //  Ambil semua paragraf dalam section B
const p4 = pList[0]; //  Paragraf pertama (paragraf 4)
const p5 = pList[1]; //  Paragraf kedua (paragraf 5)



// Buat elemen <h2> baru
const h2Baru = document.createElement('h2');
const h2Baru2 = document.createElement('h2')

// Buat teks "judul baru!"
const teksH2Baru = document.createTextNode('judul baru!');
const teksH2baru2 = document.createTextNode('Aku pun tak tau la');

// Simpan teks ke dalam elemen <h2>
h2Baru.appendChild(teksH2Baru);
h2Baru2.appendChild(teksH2baru2);

// Gantikan <p> dengan <h2> baru di section B
sectionB.replaceChild(h2Baru, p4);
sectionB.replaceChild(h2Baru2, p5);

//=========================================================================================================

// Ubah warna latar belakang elemen baru
pBaru.style.backgroundColor = 'lightBlue';  // Warna latar belakang untuk <p> baru
liBaru.style.backgroundColor = 'lightGreen'; // Warna latar belakang untuk <li> baru
h2Baru.style.backgroundColor = 'red';  // Warna latar belakang untuk <h2> baru
