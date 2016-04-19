module.exports = {
  options: {
  },

  scripts: {
	files: ['**/.json','**/.js'],
	tasks: ['jshint']
  },

  styles: {
	files: ['**.scss', '**.css'],
	tasks: ['sass','csslint']
  }
};
