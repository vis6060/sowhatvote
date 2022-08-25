/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/



const AWS = require('aws-sdk')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const bodyParser = require('body-parser')
const express = require('express')

AWS.config.update({ region: process.env.TABLE_REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();

let tableName = "usercandarraydisplay";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + '-' + process.env.ENV;
}

const userIdPresent = false; // TODO: update in case is required to use that definition
const partitionKeyName = "userid";
const partitionKeyType = "S";
const sortKeyName = "";
const sortKeyType = "";
const hasSortKey = sortKeyName !== "";
const path = "/initsenatedup";
const UNAUTH = 'UNAUTH';
const hashKeyPath = '/:' + partitionKeyName;
const sortKeyPath = hasSortKey ? '/:' + sortKeyName : '';

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

// convert url string param to expected Type
const convertUrlType = (param, type) => {
  switch(type) {
    case "N":
      return Number.parseInt(param);
    default:
      return param;
  }
}


/********************************
 * HTTP Get method for list objects *
 ********************************/

app.get(path + hashKeyPath, function(req, res) {
  const condition = {}
  condition[partitionKeyName] = {
    ComparisonOperator: 'EQ'
  }

  if (userIdPresent && req.apiGateway) {
    condition[partitionKeyName]['AttributeValueList'] = [req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH ];
  } else {
    try {
      condition[partitionKeyName]['AttributeValueList'] = [ convertUrlType(req.params[partitionKeyName], partitionKeyType) ];
    } catch(err) {
      res.statusCode = 500;
      res.json({error: 'Wrong column type ' + err});
    }
  }

  let queryParams = {
    TableName: tableName,
    //  KeyConditions: condition
    ProjectionExpression: "instatesenatearray, HOMEstate",
    KeySchema: [
      { AttributeName: "userid", KeyType: "RANGE" }  //Sort key
    ],
    AttributeDefinitions: [
      { AttributeName: "userid", AttributeType: "S" }
    ],
    KeyConditionExpression: "#zip = :zipppp",
    ExpressionAttributeNames:{
      "#zip": "userid",
    },
    ExpressionAttributeValues: {
      ":zipppp": req.query.userid
    }
  }

  dynamodb.query(queryParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({error: 'Could not load items: ' + err});
    } else {
      arr=[data.Items[0].instatesenatearray[0],data.Items[0].instatesenatearray[1],data.Items[0].instatesenatearray[2],data.Items[0].instatesenatearray.length, data.Items[0].instatesenatearray.slice(-1)[0],data.Items[0].instatesenatearray[3],data.Items[0].HOMEstate] //this gets first and last element of array
      res.json(arr)
    }
  });
});


/************************************
 * HTTP put method for insert object *
 *************************************/

app.put(path, function(req, res) {

  if (userIdPresent) {
    req.body['userId'] = req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH;
  }

  let putItemParams = {
    TableName: tableName,
    Item: req.body,
    KeySchema: [
      {AttributeName: "userid", KeyType: "RANGE"}  //Sort key
    ],
    AttributeDefinitions: [
      {AttributeName: "userid", AttributeType: "S"}
    ],
    Key: {
      "userid":req.body.userid ,
    },
    UpdateExpression: "set  instatesenatearray=instatesenatearrayHOME", //initialize array
    ReturnValues: "ALL_NEW"
  }

  dynamodb.update(putItemParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({error: err, url: req.url, body: req.body});
    } else {
      res.json({success: 'put call succeed!', url: req.url, data: data})
    }
  });
});

/************************************
 * HTTP post method for insert object *
 *************************************/

app.post(path, function(req, res) {

  if (userIdPresent) {
    req.body['userId'] = req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH;
  }

  let putItemParams = {
    TableName: tableName,
    Item: req.body,
    KeySchema: [
      {AttributeName: "userid", KeyType: "RANGE"}  //Sort key
    ],
    AttributeDefinitions: [
      {AttributeName: "userid", AttributeType: "S"}
    ],
    Key: {
      "userid":req.body.userid ,
    },
    UpdateExpression: "set  #m1=:v1,#m2=:v2,#m3=:v3,#m4=:v4,#m5=:v5,#m6=:v6,#m7=:v7,#m8=:v8,#m9=:v9,#m10=:v10,#m11=:v11,#m12=:v12,#m13=:v13,#m14=:v14,#m15=:v15", //initialize array
    ExpressionAttributeNames:{
      "#m1": "comcateg",
      "#m2": "futurecomcandsvotedon",
      "#m3": "futurecomcandsvotedonSenate",
      "#m4": "FutureComPreferArray",
      "#m5": "FutureComPreferArraySenate",
      "#m6": "HOMEstate",
      "#m7": "isscateg",
      "#m8": "prefercateg",
      "#m9": "searchcateg",
      "#m10": "voteactedidsgovern",
      "#m11": "voteactedidshouse",
      "#m12": "voteactedidsissuescandhouse",
      "#m13": "voteactedidsissueshouse",
      "#m14": "voteactedidsSenate",
      "#m15": "webpagevalue",
    },
    ExpressionAttributeValues: {
      ":v1": req.body.comcateg,
      ":v2": req.body.futurecomcandsvotedon,
      ":v3": req.body.futurecomcandsvotedonSenate,
      ":v4": req.body.FutureComPreferArray,
      ":v5": req.body.FutureComPreferArraySenate,
      ":v6": req.body.HOMEstate,
      ":v7": req.body.isscateg,
      ":v8": req.body.prefercateg,
      ":v9": req.body.searchcateg,
      ":v10": req.body.voteactedidsgovern,
      ":v11": req.body.voteactedidshouse,
      ":v12": req.body.voteactedidsissuescandhouse,
      ":v13": req.body.voteactedidsissueshouse,
      ":v14": req.body.voteactedidsSenate,
      ":v15": req.body.webpagevalue,
    },
    ReturnValues: "ALL_NEW"
  }

  dynamodb.update(putItemParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({error: err, url: req.url, body: req.body});
    } else {
      res.json({success: 'put call succeed!', url: req.url, data: data})
    }
  });
});


/**************************************
* HTTP remove method to delete object *
***************************************/

app.delete(path + '/object' + hashKeyPath + sortKeyPath, function(req, res) {
  const params = {};
  if (userIdPresent && req.apiGateway) {
    params[partitionKeyName] = req.apiGateway.event.requestContext.identity.cognitoIdentityId || UNAUTH;
  } else {
    params[partitionKeyName] = req.params[partitionKeyName];
     try {
      params[partitionKeyName] = convertUrlType(req.params[partitionKeyName], partitionKeyType);
    } catch(err) {
      res.statusCode = 500;
      res.json({error: 'Wrong column type ' + err});
    }
  }
  if (hasSortKey) {
    try {
      params[sortKeyName] = convertUrlType(req.params[sortKeyName], sortKeyType);
    } catch(err) {
      res.statusCode = 500;
      res.json({error: 'Wrong column type ' + err});
    }
  }

  let removeItemParams = {
    TableName: tableName,
    Key: params
  }
  dynamodb.delete(removeItemParams, (err, data)=> {
    if (err) {
      res.statusCode = 500;
      res.json({error: err, url: req.url});
    } else {
      res.json({url: req.url, data: data});
    }
  });
});

app.listen(3000, function() {
  console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app