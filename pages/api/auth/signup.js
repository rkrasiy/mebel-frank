import { connectToDatabase } from "../../../lib/db";
import { hashPassword } from "../../../lib/auth";

export default async function handler(req, res){
  const error = {
    422: {
      userExist: 'User exists already!',
      emptyInput: 'Invalid input'
    },
    201: {
      createUser: "Creates user!"
    }
  }

  if(req.method === 'POST'){
    const data = req.body;
    const { userName, password } = data;

    if(!userName ||
      userName.trim().length < 3 ||
      !password || password.trim().length < 7 ){
        res.status(422).json({ message: error['422'].emptyInput});
        return;
      }
   
    const client = await connectToDatabase();
    const db = client.db();

    const existUser = await db.collection('users').findOne({userName: userName})

    if(existUser){
      res.status(422).json({ message: error['422'].userExist});
      client.close()
      return;
    }

    const psw = await hashPassword(password) 

    const result  = await db.collection("users").insertOne({
      userName: userName,
      password: psw
    });

    res.status(201).json({message: error['201'].createUser})
    client.close()
  }
}