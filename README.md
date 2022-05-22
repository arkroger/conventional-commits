
# Install and configure if needed
npm install -g @commitlint/{cli,config-conventional}
# For Windows:
npm install -g @commitlint/config-conventional @commitlint/cli

echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
echo "module.exports = {extends: ['@commitlint/config-angular']};" > commitlint.config.js

//npm install -g  conventional-changelog-conventionalcommits
//npm install -g  @commitlint/config-angular
npx commitlint --help


npm install -g husky
husky install
husky add .husky/commit-msg 'npx commitlint --edit $1'

npm install -g commitizen
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc



