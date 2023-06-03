import worker from '../model/WorkrsModel.js'
export const addworker =  async (req,res) => {
    // console.log(req.body)
    let {name} = req.body 
    let {contact} = req.body 
    let {email_id} = req.body
    let {address} = req.body  
    

    try{

        let newworker = new worker({
            name,contact,email_id,address
            
        })
       let createdUser = await newworker.save() 
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
export const viewworker= async (req, res) => {
    try {
      const workers = await worker.find();
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(200).json({
        status: 'success',
        data: {
          workers,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message,
      });
    }
  };

 // delete worker
 export const deleteworker=async (req,res) => {
  try {
    const {id}= req.params
  console.log(id)
 const dat= await worker.findByIdAndRemove(id)
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