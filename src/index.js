const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
}
const sep = (xs, s) =>
	xs.length ? [xs.slice(0, s), ...sep(xs.slice(s), s)] : []

function decode(expr) {
	let res =''
	sep(expr, 10).forEach(item => {
		let subRes=''
		if(item==='**********') {
			res += ' '
		}else{
			sep(item,2).forEach(subItem=>{
				if(subItem==='00') {}
				if(subItem==='10') subRes+='.'
				if(subItem==='11') subRes+='-'
			})
			res+=MORSE_TABLE[subRes]
		}
	})
	return res
}

module.exports = {
	decode,
}
