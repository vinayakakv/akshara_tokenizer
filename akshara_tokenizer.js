class AksharaTokenizerKannada {
	constructor() {
		let swara = '[\u0c85-\u0c94\u0ce0\u0ce1]';
		let vyanjana = '[\u0c95-\u0cb9\u0cde]';
		let halant = '\u0ccd';
		let vowel_signs = '[\u0cbe-\u0ccc]';
		let anuswara = '\u0c82';
		let visarga = '\u0c83';
		this.expression = new RegExp(`(?:(${swara})|((?:${vyanjana}${halant})*)(${vyanjana})(?:(${vowel_signs})|(${halant}))?)(${anuswara}|${visarga})?`, 'g');
	}

	tokenize(string) {
		return Array.from(string.matchAll(this.expression), x => ({
			"swara": x[1],
			"ottu": x[2],
			"vyanjana": x[3],
			"vowelsign": x[4],
			"halant": x[5],
			"yogawaha": x[6]
		}));
	}
}

export { AksharaTokenizerKannada }
