let isEnabled = [];

function SwitchCase(x) {
  if (isEnabled.indexOf(x) === -1) {
    isEnabled.push(x);
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let t = document.getElementById(x);
    let word = t.innerText;
    let loop;
    if (word.includes(" ")) {
      loop = (word.length - 2) * 4;
    } else {
      loop = (word.length - 1) * 4;
    }
    let subCount = 1;
    let newWord = "";
    let random;
    let crCount;
    let Timer = setInterval(() => {
      for (let r = 0; r < word.length; r++) {
        crCount = r * 4 - subCount;
        if (crCount <= 0) {
          newWord = newWord + word[r];
        } else {
          random = Math.floor(Math.random() * 26);
          if (word[r] === " ") {
            newWord = newWord + " ";
          } else {
            newWord = newWord + alphabet[random];
          }
        }
      }
      subCount++;
      t.innerText = newWord;
      newWord = "";
      if (loop - subCount === 0) {
        t.innerText = word;
        let m = isEnabled.indexOf(x);
        isEnabled.splice(m, 1);
        clearInterval(Timer);
      }
    }, 50);
  }
}

export { SwitchCase };
