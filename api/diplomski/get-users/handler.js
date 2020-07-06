api: 'use strict';
const MongoClient = require ("mongodb");
const databaseUrl = "mongodb://localhost:27017;"
module.exports.hello = async event => {
    const connection = await MongoClient.connect(databaseUrl);
    const database = connection.db("diplomski");
    const collection = database.collection("users");
    const credentials = JSON.parse(event.body);
    const insertResult = await collection.findOne({
      username: credentials.username
    });
    connection.close();
    if (insertResult.password == credentials.password) {
return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "succes"
        }
      ),
    };    
  } return{
      statusCode: 500,
      body: {}
    };
};