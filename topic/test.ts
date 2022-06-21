/**
 * 求第一第二大数
 * 
 * @return [number, number]
 */
export function getBigSecondNumber(arr: number[]):[number, number] {
  // let arr = [1, 2, 3, 5, 22, 3, 56, 3, 2222, 55555]
  if( arr.length < 2 ) {
    throw new Error("请检查数组长度，数组长度应不低于2")
  }
  let [a, b] = [arr[0], arr[1]];
  if (a > b) {
    let c = a;
    a = b;
    b = c;
  }
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > a) {
      let d = a;
      a = arr[i];
      b = d;
    }
    if (arr[i] < a && arr[i] > b) {
      b = arr[i];
    }
  }
  return [a, b]
}

/**
 * 两数组是否相等
 * 
 * @return [number, number]
 */
export function twoArrayCompare(arr1: any[], arr2: any[]) {
  if(!arr1 || !arr2){
    return false;
  };
  
  if(Array.isArray(arr1) !== Array.isArray(arr2)){
    return false;
  };
  
  if(arr1.length !== arr2.length){
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])){
      // console.log(arr1[i]);
      // 如果子元素中不相等，那么就返回false；
      if(!twoArrayCompare(arr1[i], arr2[i])){
        return false;
      }
    } else {
      if (arr1[i] !== arr2[i])
      return false;
    }
  };
  return true;
}

