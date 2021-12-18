export const stringWithKeyword = [
    {
        description: 'hello world! => HELLO world!',
        input: 'hello world!',
        keyword: 'hello',
        expected: 'HELLO world!'
    },
    {
        description: 'hello world! HELloo Everywhere! => HELLO world! HELloo Everywhere!',
        input: 'hello world! HELloo Everywhere!',
        keyword: 'hello',
        expected: 'HELLO world! HELloo Everywhere!'
    },
];