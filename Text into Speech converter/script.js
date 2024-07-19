function cal(){
    let x = document.getElementById('text').value;
    if (x) {
          let z =  new SpeechSynthesisUtterance(x);
          window.speechSynthesis.speak(z);
    } else {
        alert('Please enter some text');
    } 
}