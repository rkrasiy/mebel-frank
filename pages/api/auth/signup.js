import { connectToDatabase } from "../../../lib/db";
import { hashPassword } from "../../../lib/auth";

export default async function handler(req, res){
  if(req.method === 'POST'){
    const data = req.body;
    const { email, password } = data;

    if(!email ||
      !email.includes("@") ||
      !password || password.trim().length < 7 ){
        res.status(422).json({message: 'Invalid input'});
        return;
      }

    const client = await connectToDatabase();
    const db = client.db();

    const existUser = await db.collection('users').findOne({email: email})

    if(existUser){
      res.status(422).json({message: "User exists already!"});
      client.close()
      return;
    }

    const psw = await hashPassword(password) 

    const result  = await db.collection("users").insertOne({
      email: email,
      password: psw
    });

    res.status(201).json({message: "Creates user!"})
    client.close()
  }
}