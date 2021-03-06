
/*## 匹配所有 Number 直接量*/
/*/*
* 开头的符号和e、E后面的符号可能有可能没有
* 有e或者E后面必定跟着一个数字
* js小数点前后必须跟着一个值，比如12.表示12，.12表示0.12
* */
let reg= /[+-]?(\d+([.]\d*)?|\d*([.]\d+))([eE][+-]?\d+)?/g;
//二进制
let reg1 = /^0[bB][01]+/g
//八进制
let reg2 = /^0[Oo]?[0-7]+/
//16进制
let reg3 = /^0[xX][0-9a-fA-F]+/;

let regAllNum = /[+-]?(\d+([.]\d*)?|\d*([.]\d+))([eE][+-]?\d+)?|^0[bB][01]+|^0[Oo]?[0-7]+|^0[xX][0-9a-fA-F]+/;



/*匹配所有的字符串直接量*/
let regString = /(?:[^"])\.*"|'(?:[^']|\.)*|^[\u4E00-\u9FA5A-Za-z0-9]+$/g;


/*UTF8 Encoding函数
* JavaScript采用\uxxxx的形式来标识一个字符，其中xxxx标识Unicode码点。
* 但是在ES5以及之前，这种标识方法只限于码点在\u0000~\uFFFF之间的字符。超出这个范围的字符，必须用2个双字节的形式表示。
* ES6解决方法\u{xxxxx}*/
function encodeUTF8(string) {
    let utf8 = '';
    for (let char of string) {
        if (char.length >= 2) { //char.codePointAt(0) > 0xFFFF
            utf8 += '\\u{' + char.codePointAt(0).toString(16) + '}';
        }else{
            utf8 += '\\u' + char.codePointAt(0).toString(16)
        }
    }
    return utf8;
}
