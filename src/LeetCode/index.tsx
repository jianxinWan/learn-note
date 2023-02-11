import React from 'react';

export default () => {
  function fillCups(amount: number[]): number {
    const [min, mid, max] = amount.sort((a, b) => a - b);
    if (min + mid <= max) return max;

    return max + Math.ceil(min + mid - max) / 2;
  }
  return (
    <>
      <p>
        输入：amount = [1,4,2] 输出：4 解释：下面给出一种方案： 第 1 秒：装满一杯冷水和一杯温水。 第
        2 秒：装满一杯温水和一杯热水。 第 3 秒：装满一杯温水和一杯热水。 第 4 秒：装满一杯温水。
        可以证明最少需要 4 秒才能装满所有杯子。
      </p>
      <p>
        输出
        {JSON.stringify(fillCups([1, 4, 2]))}
      </p>
    </>
  );
};
