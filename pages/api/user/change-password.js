import  { getSession } from 'next-auth/client';
import { connectToDatabase } from '../../../lib/db'
import { hashPassword, verifyPassword } from '../../../lib/auth'
async function habdler(req, res){
  /**
   * POST | PUT | PATCH
   */
  if(req.method !== 'PATCH'){
    return;
  }
  const session = await getSession({req: req});
  if(!session){
    res.status(401).json({message: 'Not authenticated'});
    return;
  }

  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const client = await connectToDatabase();

  const userCollerction = client.db().collection('users');

  const user = await userCollerction.findOne({email: userEmail});

  if(!user){
    res.status(404).json({message: 'User not found.'});
    client.close();
    return
  }

  const currentPassword = user.password;

  const passwordAreEqual = await verifyPassword( oldPassword, currentPassword);

  if(!passwordAreEqual){
    res.status(403).json({message: 'Password is not equal'});
    client.close();
    return;
  }

  const  hashedPassword = hashPassword(newPassword)
  userCollerction.updateOne(
    { email: userEmail },
    { $set: { password: hashedPassword}}
  )
  client.close();
  res.status(200).json({message: 'Password updated.'})
}

export default habdler;