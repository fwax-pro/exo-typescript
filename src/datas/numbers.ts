export const number1 = [
    {
        description: '0,1 => 1 0',
        input: '0,1',
        expected: '1 0'
    },
    {
        description: '4,5,6,7,0 => 12 10',
        input: '4,5,6,7,0',
        expected: '12 10'
    },
    {
        description: '7,8,6,3,1,2,1 => 12 16',
        input: '7,8,6,3,1,2,1',
        expected: '12 16'
    },
];

export const number2 = [
    {
        description: 'search 12 in inputs 0 to 20',
        inputs: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        search: 12,
        expected: 12
    },
    {
        description: 'search 13 in inputs 0 to 20',
        inputs: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        search: 13,
        expected: 13
    },
    {
        description: 'search 19 in inputs 0 to 20',
        inputs: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        search: 19,
        expected: 19
    }
];

export const number3 = [
    {
        description: '1234 => 214',
        input: 1234,
        expected: 214
    },
];