const CountVowel = (myString) => {
  const vowels = ["A", "E", "I", "O", "U"];

  const st = myString.split("");
  console.log("st",st)

  let count = 0;

  for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < st.length; j++) {
        //console.log(st[j])
      if (st[i] ==vowels[j]) {
       console.log([i])
        count ++;
      }
    }
  }

  return count;
};

const myString = "Bangladesh";

console.log(CountVowel(myString));
