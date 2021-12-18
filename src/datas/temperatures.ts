export const temperatures = [
    {
        description: 'The solution displays 0 if no temperature',
        inputs: [],
        expected: 0
    },
    {
        description: 'Result is correct with a simple data set: {7 5 9 1 4} -> 1',
        inputs: ['7', '5', '9', '1', '4'],
        expected: 1
    },
    {
        description: 'It works with -273 alone',
        inputs: ['-273'],
        expected: -273
    },
    {
        description: 'It works with 5526 alone',
        inputs: ['5526'],
        expected: 5526
    },
    {
        description: 'It works when inputs contains only negative numbers: : {-15 -7 -9 -14 -12} -> -7',
        inputs: ['-15', '-7', '-9', '-14', '-12'],
        expected: -7
    },
    {
        description: 'It works with two negative temperatures that are equal: {-10 -10} -> -10',
        inputs: ['-10', '-10'],
        expected: -10
    },
    {
        description: 'When two temperatures are as close to 0, then the positive wins: {15 -7 9 14 7 12} -> 7',
        inputs: ['15', '-7', '9', '14', '7', '12'],
        expected: 7
    },
];
export const diff = 5526; 
export const temperature = 0;