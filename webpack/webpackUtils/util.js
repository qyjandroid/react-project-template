const fs = require('fs');
const packageConfig = require('../../package.json');

function readFile(curPath) {
  const content = fs.readFileSync(curPath, 'utf-8');
  return content;
}

/**
 *
 * 获取版本
 * @export
 * @returns
 */
function getVersion() {
  //const version = readFile(path.join(__dirname, '../../version')).trim();  // return version;
  return packageConfig.version || '1.0.0';
}

/**
 *
 * 获取测试版本
 * @export
 * @returns
 */
function getTestVersion() {
  return packageConfig.testVersion || '1.0.0';
}

/**
 *
 * 获取env
 * @returns
 */
function getEnv() {
  return process.env.NODE_ENV || 'dev';
}

module.exports = {
  readFile,
  getVersion,
  getTestVersion,
  getEnv,
};
