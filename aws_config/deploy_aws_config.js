
// node run_awsconfig preconfig
// node run_awsconfig remove_pre
// node run_awsconfig deploy -f checker|enabler|remover -m 128 -t 3
// node run_awsconfig remove -f checker|enabler|remover

var LambdaDeployer = require('../lib/lambda_deployer.js');
var deployer = new LambdaDeployer();

var profile = 'default';
//var profile = 'federated_sgas_admin';
var accountId = '290093585298';
var region = 'us-east-1';
var bucketName = accountId + '.sgas.cto.lambda-files';
var roleName = 'lambda_aws_config_execution';
var assumeRolePolicyName = 'lambda_assume_role_policy';
var inlinePolicyName = 'lambda_aws_config_execution_policy';
var fileName = 'aws_services.zip';

var argv = require('minimist')(process.argv.slice(2));
//console.dir(argv);  // { _: [ 'deploy' ], f: 'checker', m: 128, t: 3 }
var action = argv._[0];
var func = argv.f;
var functionName = 'aws_config-' + func;
var handler = 'aws_config/index_' + func + '.handler';
var memorySize = argv.m;
var timeout = argv.t;

input = {
  profile : profile,
  region: region,
  bucketName: bucketName,
  roleName: roleName,
  assumeRolePolicyName: assumeRolePolicyName,
  inlinePolicyName: inlinePolicyName,
  keyName: 'nodejs/' + fileName,
  functionName: functionName,
  handler: handler,
  roleARN : null,
  memorySize: memorySize,
  timeout: timeout,
  zipFile : '../files/' + fileName
};

console.log("\n>>>Starting to " + action + " ...\n");
console.log(input);

deployer[action](input);
