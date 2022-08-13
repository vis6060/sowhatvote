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

let tableName = "datinguserdb";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + '-' + process.env.ENV;
}

const userIdPresent = false; // TODO: update in case is required to use that definition
const partitionKeyName = "userid";
const partitionKeyType = "S";
const sortKeyName = "";
const sortKeyType = "";
const hasSortKey = sortKeyName !== "";
const path = "/userdbapi";
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
    ProjectionExpression: "unsubscribematchingme",
    KeySchema: [
      { AttributeName: "userid", KeyType: "RANGE" }  //Sort key
    ],
    AttributeDefinitions: [
      { AttributeName: "userid", AttributeType: "S" }
    ],
    KeyConditionExpression: "#zip = :zipppp",
    ExpressionAttributeNames:{
      "#zip": "userid"
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
      res.json(data.Items);
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
      { AttributeName: "userid", KeyType: "RANGE" }  //Sort key
    ],
    AttributeDefinitions: [
      { AttributeName: "userid", AttributeType: "S" }
    ],
    Key: {
      "userid": req.body.userid,
    },
    UpdateExpression: "set  final9type= :val1 ,Qnine1= :val2, Qnine2= :val3, Qnine3= :val4, Qnine4= :val5, Qnine5= :val6, Qnine6= :val7, Qnine7= :val8, Qnine8= :val9, profilecompPartB=:val10",
    ExpressionAttributeValues: {
      ":val1": req.body.final9type, ":val2": req.body.Qnine1, ":val3": req.body.Qnine2, ":val4": req.body.Qnine3, ":val5": req.body.Qnine4,
      ":val6": req.body.Qnine5, ":val7": req.body.Qnine6, ":val8": req.body.Qnine7, ":val9": req.body.Qnine8, ":val10": "yes"
    },
    ReturnValues: "ALL_OLD"
  }

  dynamodb.update(putItemParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: err, url: req.url, body: req.body });
    } else{
      res.json({ success: 'put call succeed!', url: req.url, data: data })
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
      { AttributeName: "userid", KeyType: "RANGE" }  //Sort key
    ],
    AttributeDefinitions: [
      { AttributeName: "userid", AttributeType: "S" }
    ],
    Key: {
      "userid": req.body.userid,
    },
    UpdateExpression: "set Extraoverall = :val1, Agreeoverall= :val2, Conscoverall= :val3, Emotoverall= :val4, Intelloverall= :val5, Qbig1= :val6, Qbig2= :val7, Qbig3= :val8, Qbig4= :val9, Qbig5= :val10, Qbig6= :val11, Qbig7= :val12, Qbig8= :val13, Qbig9= :val14, Qbig10= :val15, Qbig11= :val16, Qbig12= :val17, Qbig13= :val18, Qbig14= :val19, Qbig15= :val20, Qbig16= :val21, Qbig17= :val22, Qbig18= :val23, Qbig19= :val24, Qbig20= :val25, profilecompPartC=:val26",
    ExpressionAttributeValues: {
      ":val1": req.body.Extraoverall, ":val2": req.body.Agreeoverall, ":val3": req.body.Conscoverall, ":val4": req.body.Emotoverall,
      ":val5": req.body.Intelloverall, ":val6": req.body.Qbig1, ":val7": req.body.Qbig2, ":val8": req.body.Qbig3, ":val9": req.body.Qbig4,
      ":val10": req.body.Qbig5, ":val11": req.body.Qbig6, ":val12": req.body.Qbig7, ":val13": req.body.Qbig8, ":val14": req.body.Qbig9,
      ":val15": req.body.Qbig10, ":val16": req.body.Qbig11, ":val17": req.body.Qbig12, ":val18": req.body.Qbig13, ":val19": req.body.Qbig14,
      ":val20": req.body.Qbig15, ":val21": req.body.Qbig16, ":val22": req.body.Qbig17, ":val23": req.body.Qbig18, ":val24": req.body.Qbig19,
      ":val25": req.body.Qbig20, ":val26": "yes"
    },
    ReturnValues: "ALL_OLD"
  }

  dynamodb.update(putItemParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: err, url: req.url, body: req.body });
    } else{
      res.json({ success: 'put call succeed!', url: req.url, data: data })
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
