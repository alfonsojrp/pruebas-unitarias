const isUpperCase = require('../utils/esmayuscula');

describe('mayusculas', () => {
    test.each`
      firstValue | expectedResult    
      ${"H"}              | ${true}
      ${"h"}              | ${false}
      ${"HELLO"}             | ${true}
      ${"hello"}              | ${false}
      ${"MaYuScUlA"}              | ${false}
      

    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(isUpperCase(firstValue)).toBe(expectedResult);
    });
  });