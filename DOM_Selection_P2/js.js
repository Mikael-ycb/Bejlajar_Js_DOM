//1. document.querySelector() --> 1 element
const p4 = document.querySelector('#b p');//memilih p yang ada pada #b
p4.style.color = 'green';//mengubah warna teks
p4.style.backgroundColor = 'black';//mengubah warna background

const li2 = document.querySelector('section#b ul li:nth-child(2)');// memilih li anak ke 2 dari ul pada #b
li2.style.backgroundColor = 'orange';//mengubah warna background dari li anak ke 2 dari ul pada #b

//2. document.querySelectorAll() -->semua element yang memiliki jenis sama
const p = document.querySelectorAll('p');
for(let i =0; i<p.length;i++){
    p[i].style.backgroundColor = 'blue';
}