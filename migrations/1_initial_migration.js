const Migrations = artifacts.require('Migrations');
const MyNFT = artifacts.require('MyNFT.sol'); // MyNFT.sol 파일 추가

module.exports = function (deployer) {
	deployer.deploy(Migrations);
	deployer.deploy(MyNFT); // MyNFT를 배포에 추가
};