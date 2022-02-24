module.exports = function check(str, bracketsConfig) {
  const stack = [];
	const objectBrackets = Object.fromEntries(bracketsConfig);
  
	for (let i = 0; i < str.length; i++) {
		let closedBracket = objectBrackets[str[i]];
		// проверка на закрытую скобку в пустом стеке
		if (stack.length == 0 && closedBracket == undefined) return false;
		
		if (stack.length > 0 || str[i] !== closedBracket) {
			
			if (str[i] !== closedBracket && closedBracket !== undefined) {
				stack.push(str[i]);
			}
			if (closedBracket == undefined && stack.length > 0) {
				// если закрываюзий аналог ласт скобки стака равен
				if (objectBrackets[stack[stack.length-1]] == str[i]) {
					stack.pop();
				}
			}	
		} 
	}
	return stack.length == 0;
}