// DOM Selection

// 1. document.getElementById(). (tolong carikan saya elemen yang id nya ..... yang ada didalam dokument)
const judul = document.getElementById('judul');
judul.style.color = 'red';//mengubah warna dari judul
judul.style.backgroundColor = '#ccc';//mengubah warna background
judul.innerHTML = 'Mikael';// mengubah teks pada judul

const oke = document.getElementById('okee');
oke.style.color = 'red';

// 2. document.getElementsByTagName(). (carikan saya elemen-elemen yang nama teksnya apa)
const p = document.getElementsByTagName('p');
//p[2].style.backgroundColor = 'lightblue';//mengubah background element indeks 2
for (let i = 0; i < p.length; i++) {// mengubah warna background semua element
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];//mengacu pada h1 index ke 0
h1.style.fontSize = '50px';//mengubah ukuran font h1

const h2  = document.getElementsByTagName('h2')[0];
h2.style.backgroundColor = 'black';
h2.style.color = 'white';
// 3. document.getElementsByClasssName()
const p1 = document.getElementsByClassName('p1');// mengacu pada p yang memiliki class p1
p1[0].innerHTML = 'Ini diubah dari javascript';//mengubah teks p1 yg ada pada index [0] p

const p4 = document.getElementsByClassName('p4');
p4[0].innerHTML = 'Aku juga Gamteng';
p4[1].innerHTML = 'oke aku juga';