import React from 'react';

export default () => {
  function rotate(nums: number[], k: number): void {
    let len = nums.length;
    k = k % nums.length;
    let newArr = [...nums.slice(len - k), ...nums.slice(0, len - k)];
    for (let i = 0; i < nums.length; i++) {
      nums[i] = newArr[i];
    }
  }

  return (
    <>
      <p>
        输入: nums = [1,2,3,4,5,6,7], k = 3 输出: [5,6,7,1,2,3,4] 解释: 向右轮转 1 步:
        [7,1,2,3,4,5,6] 向右轮转 2 步: [6,7,1,2,3,4,5] 向右轮转 3 步: [5,6,7,1,2,3,4]
      </p>
      <p>输出{JSON.stringify(rotate([1, 2, 3, 4, 5, 6, 7], 3))}</p>
    </>
  );
};
