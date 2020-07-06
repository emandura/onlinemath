'use strict';

const MongoClient = require('mongodb').MongoClient;
const databaseUrl = "mongodb://localhost:27017";


module.exports.hello = async event => {
  const name = event.pathParameters.name;
  const connection = await MongoClient.connect(databaseUrl);
  const database = connection.db("diplomski");
  const collection = database.collection("chapters");
  const chaptersCursor = await collection.findOne(
    { name: name},
    { id: 1}
)
  connection.close();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Your function executed successfully!",
        data: chaptersCursor,
      }),
  };
};
