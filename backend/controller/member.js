import member from '../model/MemberModel.js'

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

