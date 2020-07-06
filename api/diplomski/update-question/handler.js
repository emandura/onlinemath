'use strict';

const MongoClient = require('mongodb').MongoClient;
const databaseUrl = "mongodb://localhost:27017";


module.exports.hello = async event => {
  const id = event.pathParameters.id;
	const connection = await MongoClient.connect(databaseUrl);
	const database = connection.db("diplomski");
	const collection = database.collection("tests");
	const testsCursor = await collection.updateMany(
   { "chapterID": "" },
   {
     $set: { "chapterID": parseInt(id) }
   }
  )
  console.log(id);
  console.log(testsCursor);

  //const tests =await testsCursor.toArray();
	connection.close();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Your function executed successfully!",
        data: testsCursor,
      }),
  };
};
