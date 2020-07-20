
const MongoClient = require('mongodb').MongoClient;
const databaseUrl = "mongodb://localhost:27017";


module.exports.hello = async event => {
  const id = event.pathParameters.id;
  const user = event.pathParameters.user;
  const connection = await MongoClient.connect(databaseUrl);
  const database = connection.db("diplomski");
  const collection = database.collection("answers");
  var tempDate = new Date();
  var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours();
        
  const testsCursor = await collection.find({
    testID: parseInt(id),
    user: user,
    date: date
  });
  const test =await testsCursor.toArray();
  console.log(test);
  connection.close();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Your function executed successfully!",
        data: test,
      }),
  };
};
