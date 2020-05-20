/**
 * 匹配函数
 * @param p 模式串
 * @param s 主串
 * @returns {boolean}
 */
function match(p,s) {
    let obj = {};
    setModel(p);
    let state = start;
    for (let c of s){
        state = state(c)
    }
    return state ===end
}

/**
 * 通过模式串生成状态机内的状态及转移方式
 * @param pattern
 */
function setModel(pattern) {
    obj = {};
    let next =[];
    next[0] = -1;
    let k=-1;
    for (let i=1;i<pattern.length;i++){
        while (k !== -1 && pattern[k + 1] !== pattern[i]) {
            k = next[k];
        }
        if (pattern[k + 1] === pattern[i]) {
            ++k;
        }
        next[i] = k;
    }
    let keys = pattern.split('');
    for (let i=0;i<keys.length;i++){
        obj[i] = function (c) {
            if (c===keys[i]){
                return i===keys.length-1?end:obj[i+1]
            }else {
                if (i>0){
                    return obj[next[i-1]+1](c)
                }

            }
        };
    }
}
function end(c) {
    return end
}
function start(c) {
    return obj[0](c)
}

console.log(match('abababx', 'ababababx'));
