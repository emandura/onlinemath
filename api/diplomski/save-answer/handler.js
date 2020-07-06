'use strict';

const MongoClient = require('mongodb').MongoClient;
const databaseUrl = "mongodb://localhost:27017";


module.exports.hello = async event => {
	const connection = await MongoClient.connect(databaseUrl);
	const database = connection.db("diplomski");
	const collection = database.collection("answers");

  const newAnswer = JSON.parse(event.body);

  const insertResult = await collection.insert(newAnswer);


	connection.close();
  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: "Your function executed successfully!",
        data: {},
      }),
  };
};
