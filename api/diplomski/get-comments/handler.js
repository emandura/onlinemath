'use strict';

const MongoClient = require('mongodb').MongoClient;
const databaseUrl = "mongodb://localhost:27017";


module.exports.hello = async event => {
  const id = event.pathParameters.id;
  const connection = await MongoClient.connect(databaseUrl);
  const database = connection.db("diplomski");
  const collection = database.collection("comments");
  const usersCursor = await collection.find({
    testID: parseInt(id)
  });
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
