const RemoveDuplicate = (st1,st2) => {
    const result1=st1.split("").sort().join("");
    const result2=st1.split("").sort().join("");

    return result1===result2
    // console.log("result.. ",result1)
    // console.log("result.. ",result2)
      
};

const st1 = "geeks";
const st2 = "kseeg";

console.log(RemoveDuplicate(st1,st2));
//RemoveDuplicate(st1,st2);
