function soundo_note(get_id){
    window.alert(get_id);

    const frequency_do = 261.626;
    const frequency_re = 293.665;
    const frequency_mi = 329.628;
    const frequency_fa = 349.228;
    const frequency_so = 391.995;
    const frequency_ra = 440.000;
    const frequency_si = 493.883;


    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const gainNode = ctx.createGain();
    // 音量の初期値を0.5にする
    gainNode.gain.value = 0.5;
    
    let oscillator;
    let isPlaying = false;
    

      // 再生中なら二重に再生されないようにする
      if (isPlaying) return;
      oscillator = ctx.createOscillator();
      oscillator.type = "sine";
      // frequencyのvalueは直接代入も可能

      if(get_id == "do"){
        oscillator.frequency.value = frequency_do;
      }else if(get_id == "re"){
        oscillator.frequency.value = frequency_re;
      }else if(get_id == "mi"){
        oscillator.frequency.value = frequency_mi;
      }else if(get_id == "fa"){
        oscillator.frequency.value = frequency_fa;
      }else if(get_id == "so"){
        oscillator.frequency.value = frequency_so;
      }else if(get_id == "ra"){
        oscillator.frequency.value = frequency_ra;
      }else if(get_id == "si"){
        oscillator.frequency.value = frequency_si;
      }



      // ここでgainNodeをつなげる
      oscillator.connect(gainNode).connect(ctx.destination);
      oscillator.start();
      isPlaying = true;
    

      chage_color_key(get_id)
      
      SVGFEDisplacementMapElement()
      oscillator.stop();

      isplaying = false
      
    

}

function chage_color_key(get_id){
  document.getElementById(get_id).style.backgroundColor = 'red'

}