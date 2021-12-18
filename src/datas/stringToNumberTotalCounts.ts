export const stringToNumberTotalCounts = [
    {
        description: 'Hello World ! => 0',
        input: 'Hello World !',
        expected: 0
    },
    {
        description: 'xxxxxxxxxx => 0',
        input: 'xxxxxxxxxx',
        expected: 0
    },
    {
        description: 'l337 5p3k 15 c00l => 9',
        input: 'l337 5p3k 15 c00l',
        expected: 9
    },
    {
        description: '5pr34d 7h3 w0rd ! => 9',
        input: '5pr34d 7h3 w0rd !',
        expected: 6
    },
    {
        description: 'abcd1234 => 4',
        input: 'abcd1234',
        expected: 4
    },
    {
        description: 'a1b2c3d4 => 4',
        input: 'a1b2c3d4',
        expected: 4
    },
    {
        description: '1111111111 => 10',
        input: '1111111111',
        expected: 10
    },
];