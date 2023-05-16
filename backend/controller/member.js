import member from '../model/MemberModel.js'
import { Express } from 'express';
const app = express();

export const adduser =  async (req,res) => {
    // console.log(req.body)
    let {name} = req.body 
    let {contact} = req.body 
    let {email_id} = req.body
    let {address} = req.body  
    let {image} = req.body 


    try{

        let newuser = new member({
            name,contact,email_id,address,image
            
        })
       let createdUser = await newuser.save() 
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        // used for connect front end
         res.status(201).json({
        status : 'Success',
        data : {
            createdUser
        }
    })
    }catch(err){
        console.log(err)
    }
}

// Backend API route to get all member details
export const viewmember= async (req, res) => {
    try {
      const members = await member.find();
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(200).json({
        status: 'success',
        data: {
          members,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message,
      });
    }
  };


//delete memeber
  app.delete('/delete-user/:id', async (req,res) => {
    const id = req.params.id
    await User.findByIdAndRemove(id).exec()
    res.send('Deleted')
})