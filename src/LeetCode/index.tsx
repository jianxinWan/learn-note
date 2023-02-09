import React from 'react';

export default () => {
  function twoSum(numbers: number[], target: number): number[] {
    const [left, right] = [0, numbers.length - 1];

    while (left < right) {
      let mid = Math.floor(left + right) / 2;
      if (numbers[mid] > target) {
        right;
      } else {
      }
    }

    for (let i = 0; i < numbers.length; i++) {
      let index = numbers.indexOf(target - numbers[i]);
      if (index !== -1 && index !== i) {
        return [i + 1, index + 1].sort((a, b) => a - b);
      }
    }
    return [1, 2];
  }

  return (
    <>
      <p>
        输入：numbers = [2,3,4], target = 6 输出：[1,2] 解释：2 与 7 之和等于目标数 9 。因此 index1
        = 1, index2 = 2 。返回 [1, 2] 。
      </p>
      <p>输出{JSON.stringify(twoSum([1, 0, 3, 2, 2], 4))}</p>
    </>
  );
};
