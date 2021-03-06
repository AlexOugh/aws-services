
var updator = new (require('../../lib/lambda_code_updator'))();

var environment = process.env.NODE_ENV;
var configFile = 'default';
if (environment)  configFile = environment;

var config = require('./particles-aws-federation/config/' + configFile);
console.log(config.s3[0].aws.bucket);

//var functionNames = ['awsconfigrules-security-group-checker','awsconfigrules-enable-rules','awsconfigrules-fetch-rules','awsconfigrules-sg-portrange-checker','awsconfigrules-delete-rules', 'awsconfigrules-ec2-create-trigger-db-update'];
var functionNames = ['index'];

var input = {
  "region": null,
  "bucketName": null,
  "keyName": "particles/assets/aws-federation.zip",
  "zipFile" : "aws-federation.zip",
  "sourceFolder" : "../..",
  //"src" : ["awsconfigrules/index_*.js", "awsconfigrules/json/*.json", "lib/flow_controller.js", "lib/aws/*.js", "lib/aws-promise/*.js"]
  "src" : ["index.js", "lib/flow_controller.js", "lib/aws/*.js", "lib/aws-promise/*.js"]
}
console.log(input);

update(0, functionNames, input);

function update(idx, functionNames, input) {
  input.functionName = functionNames[idx];
  updateFunction(0, config.s3, input, function(err, data) {
    if(err) {
      console.log("Error occurred during updating codes : " + err);
      process.exit(1);
    }
    else if(data) {
      console.log("Successfully updated codes of " + input.functionName + " in all regions");
      if (++idx < functionNames.length) {
        update(idx, functionNames, input);
      }
      else {
        process.exit(0);
      }
    }
    else {
      console.log("Failed to update codes");
      process.exit(1);
    }
  });
}

function updateFunction(idx, s3, input, cb) {
  input.region = s3[idx].aws.region;
  input.bucketName = s3[idx].aws.bucket;
  updator.update(input, function(err, data) {
    if(err) {
      console.log("Error occurred during updating codes : " + err);
      process.exit(1);
    }
    else if(data) {
      console.log("Successfully updated codes of " + input.functionName + " in region " + input.region);
      if (++idx < s3.length) {
        updateFunction(idx, s3, input, cb);
      }
      else {
        cb(null, true);
      }
    }
    else {
      console.log("Failed to update codes");
      process.exit(1);
    }
  });
}
