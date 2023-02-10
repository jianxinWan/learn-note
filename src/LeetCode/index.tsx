import React from 'react';

export default () => {
  function isValid(s: string): boolean {
    let arr = [s[0]];
    for (let i = 1; i < s.length; i++) {
      let top = arr[arr.length - 1];
      if (top) {
        if (
          (top === '(' && s[i] === ')') ||
          (top === '[' && s[i] === ']') ||
          (top === '{' && s[i] === '}')
        ) {
          arr.pop();
        } else {
          arr.push(s[i]);
        }
      } else {
        arr.push(s[i]);
      }
    }
    return arr.length == 0;
  }
  return (
    <>
      <p>输入：s = `` 输出：true</p>
      <p>
        输出
        {JSON.stringify(isValid('(){}}{'))}
      </p>
    </>
  );
};
