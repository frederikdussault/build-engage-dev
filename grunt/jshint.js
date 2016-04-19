module.exports = {
	files: ['package.json','Gruntfile.js','**/.js'],
	options: {
		eqnull: false, // true: tolerate use of '== null'
		eqeqeq: false, // true: Require triple equals (===) for comparison
		laxbreak: false, // true: tolerate possibly unsafe line breaking
		camelcase: false, // true: Indentifiers must be in camelCase
		globals: {
		  jquery: true
		}
	}
};
