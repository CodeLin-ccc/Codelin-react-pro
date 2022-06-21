"use strict";
exports.__esModule = true;
exports.twoArrayCompare = exports.getBigSecondNumber = void 0;
/**
 * 求第一第二大数
 *
 * @return [number, number]
 */
function getBigSecondNumber(arr) {
    // let arr = [1, 2, 3, 5, 22, 3, 56, 3, 2222, 55555]
    if (arr.length < 2) {
        throw new Error("请检查数组长度，数组长度应不低于2");
    }
    var _a = [arr[0], arr[1]], a = _a[0], b = _a[1];
    if (a > b) {
        var c = a;
        a = b;
        b = c;
    }
    for (var i = 2; i < arr.length; i++) {
        if (arr[i] > a) {
            var d = a;
            a = arr[i];
            b = d;
        }
        if (arr[i] < a && arr[i] > b) {
            b = arr[i];
        }
    }
    return [a, b];
}
exports.getBigSecondNumber = getBigSecondNumber;
/**
 * 两数组是否相等
 *
 * @return [number, number]
 */
function twoArrayCompare(arr1, arr2) {
    if (!arr1 || !arr2) {
        return false;
    }
    ;
    if (Array.isArray(arr1) !== Array.isArray(arr2)) {
        return false;
    }
    ;
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
            // console.log(arr1[i]);
            // 如果子元素中不相等，那么就返回false；
            if (!twoArrayCompare(arr1[i], arr2[i])) {
                return false;
            }
        }
        else {
            if (arr1[i] !== arr2[i])
                return false;
        }
    }
    ;
    return true;
}
exports.twoArrayCompare = twoArrayCompare;
