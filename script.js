document.addEventListener('DOMContentLoaded', function() {
    
    // 1. FITUR SAPAAN WAKTU OTOMATIS
    // Ini biar web seolah-olah tau jam berapa sekarang
    const greetingElement = document.getElementById('greeting');
    const jam = new Date().getHours();
    let sapaan = "";

    if (jam >= 4 && jam < 11) {
        sapaan = "Selamat Pagi ☀️";
    } else if (jam >= 11 && jam < 15) {
        sapaan = "Selamat Siang 🌤️";
    } else if (jam >= 15 && jam < 18) {
        sapaan = "Selamat Sore 🌇";
    } else {
        sapaan = "Selamat Malam 🌙";
    }

    if(greetingElement) {
        greetingElement.textContent = sapaan ;
    }

    // 2. FITUR EFEK MENGETIK (HACKER STYLE)
    // Teks ini akan muncul ganti-ganti di bawah perkenalan
    const textElement = document.getElementById('typing-text');
    const words = ["Semangat", "Berjuang", "sukses", "selalu"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!textElement) return;

        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Menghapus huruf
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Mengetik huruf
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = 55; // Kecepatan ngetik normal

        if (isDeleting) {
            typeSpeed /= 2; // Hapus lebih cepat
        }

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Tunggu 2 detik setelah selesai ngetik
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Pindah ke kata berikutnya
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }
    // Jalankan fungsinya
    typeEffect();

    // 3. FITUR TOMBOL HOME
    const homeBtn = document.getElementById('homeBtn');
    if(homeBtn){
        homeBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Efek berkedip saat diklik
            homeBtn.style.backgroundColor = '#b200ff';
            homeBtn.style.color = 'white';
            setTimeout(() => {
                homeBtn.style.backgroundColor = 'transparent';
                homeBtn.style.color = '#ffffff';
            }, 300);
            
            console.log("Tombol Home ditekan.");
        });
    }

    console.log("Website Yeheskiel Loaded - Mode Interaktif Aktif!");
});
