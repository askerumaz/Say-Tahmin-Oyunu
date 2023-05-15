/*
 oyunun fonksiyonları:
 -Oyuncu min ve max değerleri arasında olan sayıyı tahmin etmeli
 ,-oyuncunun belirli bir tahmin hakkı olacak
 -oyuncunun kazanma durumunu bildir
 -tekrar denemesi için bir seçenek ver
 */

//  arayüz elemanları

const game = document.querySelector('#game'),
guessBtn = document.querySelector('#guess-btn'),
guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num');

//    oyunda kullanılacak değerler
let min = 1,
    max = 10,
    winningNumber = getRandomNum(min, max),
    guessesLeft = 3;



    // min ve max değerlerini arayüze gönder
minNum.textContent = min;
maxNum.textContent = max;

// yapılan tahmini izleme
guessBtn.addEventListener('click', () => {
    // input içindeki veriyi al ve sayıya çevir
    let guess = parseInt(guessInput.value);
   

    // oyunu kazandı mı kontrol et
    if (guess === winningNumber) {
        // oyunu kazandı
        gameOver(true, `KAZNDIN! Doğru tahmin: ${winningNumber}`);
    } else {
           
        // yanlış sayı tahmini
        guessesLeft--;
        if (guessesLeft === 0) {
            // oyunu kaybetti

            gameOver(false, `KAYBETTİN! Doğru tahmin: ${winningNumber}`);
        } else {
            // kalan hak 0 dan fazla ise
            // çerçeveyi kırmızı yap
            guessInput.style.borderColor = 'red';
            
            // inputu temizle
            guessInput.value = '';
            
            // kullanıcıya kaç hakkının kaldığını söyle
            setMessage(`${guess} doğru değil, ${guessesLeft} hakkınız kaldı`, 'red');
        }
    }

});


// oyunu bitirme
function gameOver(won, msg) {
    let color = won ? 'green' : 'red';
    console.log(color);
    // inputu iptal et
    guessInput.disabled = true;

    // inputun çerçevesini değiştir
    guessInput.borderColor = color;

    // kullanıcıyı bilgilendir
    setMessage(msg);
   
}

// kullanıcıya mesaj verme
function setMessage(msg,color) {
    message.textContent = msg;
    message.style.color = color;
}


    // rastgele sayı bulma metodu
function getRandomNum(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(random);
    return random;
    }

