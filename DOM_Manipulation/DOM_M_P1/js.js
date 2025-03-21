// // 1. innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<i>Mikael</i>';// mengganti teks dari judul menjadi tulisan miring Mikael



//  // 2/ element.style.<propertiCSS>
// const judul = document.querySelector('#judul');
// judul.style.color ='blue';
// judul.style.backgroundColor = 'black';

/* 3.   element.setAttribute()

        kedua kode dibawah bisa digunakan pada Console
        -element.removeAttribute() (a.removeAttribute(href))
        -element.getAttribute() (judul.getAttribute('id'))
*/
// const judul = document.getElementsByClassName('h1')[0];
// judul.setAttribute('nama', 'mikael');
// const a = document.querySelector('section#a a');//a yang ada pada section a


/*4. elment.classList

    semuanya digunakan pada console
    - element.classList.add()       -> menambah kelas baru
    - element.classList.remove()    -> menghapus kelas yang ada
    - element.classList.toggle()    -> jika elemen tidak memiliki kelas tertentu maka dia akan menambahkan, jika ada maka akan menghilangkan kelas tersebut
    - element.classList.item()      -> mengetahui kelas tertentu yang ada pada element
    - element.classList.contains()  -> cek dalam sebuah element punya ga kelas tertentu
    - element.classList.replace()   -> mengganti kelas yang ada dnegan kelas yang baru
*/

const p2 = document.querySelector('.p2');
