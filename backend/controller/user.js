
import user1 from '../model/UserModel.js'
import cart from '../model/CartModel.js'
import admin from '../model/AdminLoginModel.js';
import bcrypt from 'bcrypt';


export const usereg =  async (req,res) => {
    let { name, contact, address, email_id, password,image} = req.body

    // console.log(req.body)


    try {
      const saltRounds = 10; 
      const hashedPassword = await bcrypt.hash(password, saltRounds);

        let newuser = new user1({
        name:name, contact:contact, email_id:email_id, address:address, password:hashedPassword,membership:false,image:image

        }) 
         console.log(newuser)
        let createdUser = await newuser.save()
    
        let usercart= new cart({userId:newuser._id,item:[ '']})
        let createdCart=await usercart.save()
        console.log(createdCart)
    
    //   console.log(user)
     


        // console.log(createdUser)
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
        // used for connect front end
        res.status(201).json({
            status: 'Success',
            data: {
                createdUser
            }
        })
    } catch (err) {
        console.log(err)
    }
}


//login user

export const loginUser =  async (req,res) =>{

    const { email_idOrContact, password } = req.body;
    console.log(req.body)

    try{
      
  const user = await user1.findOne({
    $and: [
      {
        $or: [
          { email_idOrContact: email_idOrContact },
          { email_idOrContact: email_idOrContact },
        ],
      },
      // { password:password },
    ],
  })
          console.log(user)

          bcrypt.compare(password,user.password)
          // return res.status(200).json({message:"login successful"})
          
         if(user){
          return res.status(200).json({message:"login successful",data:user})
         } else
         {
          return res.status(200).json({message:"Give correct information"})
         } 
       
        } catch (error) {
          console.log(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
      };

export const adminLogin= async(req,res)=>{

  const {name,password} =req.body;
  try{
  const admindetails= await admin.findOne({name:name,password:password})
  if(admindetails.name && admindetails.password){
    console.log("admin login success")
  } else{
    console.log("Incorrect password")
  }
  }catch(error)
  {
   console.log(error)
  }
}
