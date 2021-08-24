import { MongoClient } from "mongodb";

export async function connectToDatabase(){
  const client = await MongoClient.connect("mongodb+srv://adm1n:bADc7R0KhJfr6DcS@cluster0.yjmar.mongodb.net/prototype?retryWrites=true&w=majority");
  
  return client;
}


