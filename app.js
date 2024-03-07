//17-masala
// function calculateAllScore(twoPoints, threePoints) {
//     if (typeof twoPoints !== "number" || typeof threePoints !== "number") {
//       throw new Error("Input num:");
//     }
  
//     const totalScore = twoPoints * 2 + threePoints * 3;
  
//     return totalScore;
//   }
  
//   const twoPointShotsMade = 7;
//   const threePointShotsMade = 5;
  
//   const totalScore = calculateAllScore(twoPointShotsMade, threePointShotsMade);
  
//   console.log("Natija:", totalScore);

//18-masala
// function nameString(name) {
//     const result = name + "Edabit";
   
//     return result;
//    }
   
//   console.log(nameString("Mubashir"));   // Console: MubashirEdabit
//   console.log(nameString("Matt"));      // Console: MattEdabit
//   console.log(nameString("javaScript")); // Console: javaScriptEdabit
 
//19-masala
// function ikkitaSon(num1, num2) {
//     if (typeof num1 !== "number" || typeof num2 !== "number") {
//       return false;
//     }
  
//     const sum = num1 + num2;
  
//     return sum < 100;
//   }
  
//  console.log(ikkitaSon(22, 15));  //True
//  console.log(ikkitaSon(83, 34));  //False
//  console.log(ikkitaSon(3, 77));  //True
 
// 20-masala
// function printArray(n) {
//     if (!Number.isInteger(n) || n <= 0) {
//       throw new Error("Input num");
//     }
  
//     const array = [];
//     for (let i = 1; i <= n; i++) {
//       array.push(i);
//     }
  
//     console.log(array);
//   }
//
//  printArray(1);  //[1]
//  printArray(3);  //[1, 2, 3]
//  printArray(6);  //[1, 2, 3, 4, 5, 6]
  