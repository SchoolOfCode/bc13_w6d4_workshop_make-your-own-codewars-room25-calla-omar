//👉 Write your tests below here:

import returnAllFruit from "./main";
import {expect, test} from "@jest/globals"

test("Checking if all fruits are returned in an array", function () {
    let actual = returnAllFruit([123, 456, 323, 678, 986, 333]);
    let expected = [123, 323,333];
    expect(actual).toStrictEqual(expected)
});

test("Checking if all fruits are returned in an array", function () {
    let actual = returnAllFruit([123543, 4, 323563, 67, 9844, 3]);
    let expected = [123543, 323563, 3];
    expect(actual).toStrictEqual(expected)
});

test("Checking if all fruits are returned in an array", function () {
    let actual = returnAllFruit([36, 35625, 2714, 6718, 9, 63]);
    let expected = [63];
    expect(actual).toStrictEqual(expected)
});

test("Checking if all fruits are returned in an array", function () {
    let actual = returnAllFruit([125, 433, 764, 833, 983, 333]);
    let expected = [433, 833, 983, 333];
    expect(actual).toStrictEqual(expected)
});

test("Checking if a list with no fruit returns an empty array", function () {
    let actual = returnAllFruit([122, 456, 322, 678, 986, 332]);
    let expected = [];
    expect(actual).toStrictEqual(expected)
});

