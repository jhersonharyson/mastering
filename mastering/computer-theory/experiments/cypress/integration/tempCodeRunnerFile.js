Array(100)
  .fill(1)
  .map((_, index) => {
    let password = "";
    for (let i = 0; i < 8; i++) {
      const letter = 97 + Math.ceil(Math.random() * (122 - 97));
      password += String.fromCharCode(letter);
    }
    const usedIndex = []

    const uppercaseIndex =  Math.ceil( Math.random() * 8);
    usedIndex.push(uppercaseIndex)

    let numberIndex = Math.ceil(Math.random() * 8);
    while(usedIndex.includes(uppercaseIndex)){
      numberIndex = Math.ceil(Math.random() * 8);
    }
    usedIndex.push(numberIndex)
    
    return password.split("")
    .map((char, index) => index != uppercaseIndex ? char : char.toUpperCase())
    .map((char, index) => index != numberIndex ? char : index).join("")
  });