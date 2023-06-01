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
export const deletemember=async (req,res) => {
  try {
    const {id}= req.params
  console.log(id)
 const dat= await member.findByIdAndRemove(id)
 console.log(dat)
  res.json({data:'Deleted'})
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
      
    });
    console.log(err.message)
  }
  
}

//update member

export const updatemember= async (req, res) => {
  try {
    const memberId = req.params.id;
    const { name, contact, email_id } = req.body;

    // Perform the update operation using the ID and updated data
    const updatedMember = await Member.findByIdAndUpdate(
      memberId,
      { name, contact, email_id },
      { new: true }
    );

    res.json({ data: updatedMember });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }}


// app. delete('/delete-user/:id', async (req,res) => {
//   const id = req.params.id
//   await member.findByIdAndRemove(id).exec()
//   res.send('Deleted')
// })