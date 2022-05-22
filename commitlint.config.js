const Configuration = {

    extends: ['@commitlint/config-angular'],
  
    /*
     * Any rules defined here will override rules from @commitlint/config-conventional
     */
    rules: {      
        'subject-case': [
			2,
			'never',
			[ 'pascal-case'],
		]
    },
  };
  
  module.exports = Configuration;
