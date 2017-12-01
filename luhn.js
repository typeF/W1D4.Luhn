module.exports = check;

function check(num){
  var origNum = num.toString();
  var newNum = num.toString();
  var stringNum = [];
  var testString = [2,3,4,5];
  var result = "";
  for (var i = 0; i < newNum.length; i++){
    stringNum.push(newNum.charAt(i));
  }

  for (var j = (stringNum.length - 2); j >= 0; j-=2){
    stringNum[j] *= 2;
    if (stringNum[j] > 9){
      stringNum[j] -= 9;
    }
  }

  var total = stringNum.reduce(function (a, b){
    return parseInt(a,10) + parseInt(b);
  });

  if ((total % 10) === 0){
    result = true;
  }

  else{
   result = false;
  }

  return result;

}
console.log(check(4485402857103703));

