
const MongoClient = require('mongodb').MongoClient;
const databaseUrl = "mongodb://localhost:27017";


module.exports.hello = async event => {
  const yearID= event.pathParameters.id;
  console.log(yearID);
  const connection = await MongoClient.connect(databaseUrl);
  const database = connection.db("diplomski");
  const collection = database.collection("chapters");
  const chaptersCursor = await collection.find({
    year: parseInt(yearID)
  });
  const chapters =await chaptersCursor.toArray();
  console.log(chapters);
  connection.close();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Your function executed successfully!",
        data: chapters
      }),
  };
};

