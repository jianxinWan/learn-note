import React from 'react';

export default () => {
  function balancedString(s: string): number {
    const n = s.length;
    const avg = Math.floor(s.length / 4);
    const charMap: Record<string, number> = { Q: 0, W: 0, E: 0, R: 0 };
    for (let i of s) {
      charMap[i]++;
    }
    if (
      charMap['Q'] === avg &&
      charMap['W'] === avg &&
      charMap['E'] === avg &&
      charMap['R'] === avg
    ) {
      return 0;
    }

    let minLen = n;
    let fast = 0;
    let slow = 0;
    while (fast < n) {
      let curChar = s[fast];
      charMap[curChar]--;
      while (
        slow <= fast &&
        charMap['Q'] <= avg &&
        charMap['W'] <= avg &&
        charMap['E'] <= avg &&
        charMap['R'] <= avg
      ) {
        minLen = Math.min(minLen, fast - slow + 1);
        let slowChar = s[slow];
        charMap[slowChar]++;
        slow++;
      }
      fast++;
    }

    return minLen;
  }
  return (
    <>
      <p>输入：s = "QWER" 输出：0 解释：s 已经是平衡的了。</p>
      <p>
        输出
        {JSON.stringify(balancedString('WQWRQQQW'))}
      </p>
    </>
  );
};
