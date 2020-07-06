'use strict';

const MongoClient = require('mongodb').MongoClient;
const databaseUrl = "mongodb://localhost:27017";


module.exports.hello = async event => {
	const connection = await MongoClient.connect(databaseUrl);
	const database = connection.db("diplomski");
	const collection = database.collection("users");
	const usersCursor = await collection.find({});
	const users =await usersCursor.toArray();
	console.log(users);
	connection.close();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Your function executed successfully!",
        data: users,
      }),
  };
};
