import fertilizer from '../model/FertilizerModel.js'

export const addfer =  async (req,res) => {
    // console.log(req.body)
    let {name} = req.body 
    let {cost} = req.body 
    let {description} = req.body
    let {image} = req.body
     

    try{

        let newfer = new fertilizer({
            name,cost,description,image
            
        })
       let createdUser = await newfer.save() 
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
export const viewfertilizer= async (req, res) => {
    try {
      const fertilizers = await fertilizer.find();
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(200).json({
        status: 'success',
        data: {
          fertilizers,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message,
      });
    }
  };
  