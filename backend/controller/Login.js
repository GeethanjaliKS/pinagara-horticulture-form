import user1 from '../model/UserModel.js'
// import login from '../model/LoginModel.js'

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
      { password:password },
    ],
  })
          console.log(user)
          // return res.status(200).json({message:"login successful"})
          
         if(user){
          return res.status(200).json({message:"login successful",data:user})
         } else
         {
          return res.status(200).json({message:"Give correct information"})
         }
        
          // if (user && user1.password === password){
          //   // console.log(user1.password)
          //   // Login successful
          //   return res.status(200).json({ message: 'ivalid credintial' });
          // } 
          // return res.status(200).json({ message: 'Login successful' });
         
        //   let newLogin = new login({
        //     email_idOrContact,
        //     password
        // });

        // let createdLogin = await newLogin.save();

        // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        // return res.status(201).json({
        //     status: 'Success',
        //     data: {
        //         createdLogin
        //     }
        // });

         
       
        } catch (error) {
          console.log(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
      };
     
      
      
      
      
      
    
