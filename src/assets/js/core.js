/**
 * Created by showzyl on 2017/8/3.
 */

'use strict'

let core = {}


/**
 * 组合算法
 * @param m
 * @param n
 * @returns {number}
 */
core.comb = function(m, n) {
	let v1,
		v2;
	//combo(11,9)<br> =>combo(11,2)
	if (m / 2 < n) {
		n = m - n;
	}
	//处理m,n为负数
	if (m < n || n < 0) {
		return 0;
	}
	//处理combo(3,0)==1
	if (m >= 0 && n === 0) {
		return 1;
	}
	v1 = 1;
	v2 = m;
	for (let i = 1; i <= n; i++) {
		v1 *= i;
		if (i < n) {
			v2 *= (m - i);
		}
	}
	return v2 / v1;
}


core.rmArrEl = function(arr, el) {
	for(let i=0;i<arr.length;i++){
		if(arr[i] == el){
			arr.splice(i, 1)
		}
	}
	return arr
}

export default core






