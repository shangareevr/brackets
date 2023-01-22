module.exports = function check(str, bracketsConfig) {
if (str.length%2 !=0) {
  return false;
}
let stack = [],
    brackets = bracketsConfig.flat();
for (let i = 0; i < str.length; i++) { 
  for (let j = 0; j < brackets.length; j++) {
    if (str[i]==brackets[j]) {
      if (j%2==0) {
        if (brackets[j] == brackets[j+1]) {
          if (stack[stack.length-1]==brackets[j]) {
            stack.pop();
          } else {
            stack.push(brackets[j]);
          }
        } else {
          stack.push(brackets[j + 1]);
        }
      } else {
        if (brackets[j]==brackets[j-1]) {
          break;
        } else
        if (stack[stack.length - 1] == brackets[j]) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
}
    return (stack.length == 0)
}
