import food from '../model/FoodModel.js'

export const addfood =  async (req,res) => {
    // console.log(req.body)
    let {name} = req.body 
    let {cost} = req.body 
    let {description} = req.body
    let {image} = req.body
     

    try{

        let newfood = new food({
            name,cost,description,image
            
        })
       let createdUser = await newfood.save() 
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
export const viewfood= async (req, res) => {
    try {
      const foods = await food.find();
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(200).json({
        status: 'success',
        data: {
          foods,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message,
      });
    }
  };
  
  // delete food
  export const deletefood=async (req,res) => {
    try {
      const {id}= req.params
    console.log(id)
   const dat= await food.findByIdAndRemove(id)
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