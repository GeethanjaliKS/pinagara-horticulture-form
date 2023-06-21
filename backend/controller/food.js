import item from '../model/Item.js'

export const addfood =  async (req,res) => {
    // console.log(req.body)
    let {name} = req.body 
    let {cost} = req.body 
    let {description} = req.body
    let {image} = req.body
    let {type} = req.body
     

    try{

        let newfood = new item({
            name,cost,description,image,type
            
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
      const foods = await item.find({type:'food'});
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
   const dat= await item.findByIdAndRemove(id)
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

  export const updatefood= async (req, res) => {
    try {
      // const {id} = req.params;
      // console.log(id)
      const { id,name, cost, description,image,type} = req.body;
      console.log(req.body)
    
  
      // Perform the update operation using the ID and updated data
      const updatedFood = await food.findByIdAndUpdate(
        id,
        { name:name, cost:cost, description:description,image:image,type:type },{new:true}
      );
  
      res.json({ data: updatedFood });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }}
  