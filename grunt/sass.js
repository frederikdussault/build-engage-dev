module.exports = {
	dist: {
		files: {
			'<%= data.theme.sass.dest %>/main.css': '<%= data.theme.sass.src %>/main.scss'
		} // dest: target  '*.css': 'targetname.scss'
	}
};