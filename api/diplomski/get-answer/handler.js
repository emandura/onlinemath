
const MongoClient = require('mongodb').MongoClient;
const databaseUrl = "mongodb://localhost:27017";


module.exports.hello = async event => {
  const testID= event.pathParameters.id;
  const connection = await MongoClient.connect(databaseUrl);
  const database = connection.db("diplomski");
  const collection = database.collection("answers");
  const answersCursor = await collection.find({
    year: parseInt(testID)
  });
  const answers =await answersCursor.toArray();
  console.log(chapters);
  connection.close();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Your function executed successfully!",
        data: answers
      }),
  };
};

