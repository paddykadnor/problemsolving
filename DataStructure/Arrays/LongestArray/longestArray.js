function LongestWord(sen) { 
    // code goes here  
   return sen.match(/\w+/g).sort((a,b)=>b.length-a.length)[0]
  
  }
   
//case 1  
//Input: "fun&!! time"
//Output: time

//case 2
//Input: "I love dogs"
//Output: love