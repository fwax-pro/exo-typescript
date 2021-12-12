import { say } from "./helper";

const expectSay = 'Hello World!';

test(`say ${expectSay} to return ${expectSay}`, () => {
    expect(say(expectSay)).toBe(expectSay);
});