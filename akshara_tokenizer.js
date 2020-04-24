class AksharaTokenizerKannada {
    constructor(include_all = false) {
        let swara = '[\u0c85-\u0c94\u0ce0\u0ce1]';
        let vyanjana = '[\u0c95-\u0cb9\u0cde]';
        let halant = '\u0ccd';
        let vowel_signs = '[\u0cbe-\u0ccc]';
        let anuswara = '\u0c82';
        let visarga = '\u0c83';
        this.include_all = include_all;
        this.expression = new RegExp(`(?:(${swara})|((?:${vyanjana}${halant})*)(${vyanjana})(?:(${vowel_signs})|(${halant}))?)(${anuswara}|${visarga})?`, 'g');
    }

    tokenize(string) {
    	let tokens = [];
    	let last_end_index = 0;
    	for (let match of string.matchAll(this.expression)) {
    		if (this.include_all && match.index !== last_end_index)
    			tokens.push({
					"is_akshara": false,
					"content": string.substring(last_end_index, match.index)
				});
			last_end_index = match.index + match[0].length;
			tokens.push({
				"is_akshara": true,
				"akshara": match[0],
				"svara": match[1],
				"samyukta": match[2],
				"vyamjana": match[3],
				"gunita": match[4],
				"virama": match[5],
				"yogawaha": match[6]
			});
		}
		return tokens;
    }
}

export {AksharaTokenizerKannada}
