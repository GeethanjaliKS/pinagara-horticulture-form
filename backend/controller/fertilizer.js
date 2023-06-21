import item from '../model/Item.js'

export const addfer =  async (req,res) => {
    // console.log(req.body)
    let {name} = req.body 
    let {cost} = req.body 
    let {description} = req.body
    let {image} = req.body
    let {type}=req.body
     

    try{

        let newfer = new item({
            name,cost,description,image,type
            
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
      const fertilizers = await item.find({type:'fertilizer'} );
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
  
// delete fertilizer
  export const deletefertilizer=async (req,res) => {
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
//update fertilizer
  export const updatefertilizer= async (req, res) => {
    try {
      // const {id} = req.params;
      // console.log(id)
      const { id,name, cost, description,image,type} = req.body;
      console.log(req.body)
    
  
      // Perform the update operation using the ID and updated data
      const updatedFertilizer = await item.findByIdAndUpdate(
        id,
        { name:name, cost:cost, description:description,image:image,type:type },{new:true}
      );
  
      res.json({ data: updatedFertilizer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }}
 

  //   export const cartstore =  async (req,res) => {
  //     // console.log(req.body)
  //     let {name,cost,description,image} = req.body 
      
  
  //     try{
  
  //         let newcart = new cart({
  //             name,cost,description,image
              
  //         })
  //        let createdUser = await newcart.save() 
  //         res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  //         // used for connect front end
  //          res.status(201).json({
  //         status : 'Success',
  //         data : {
  //             createdUser
  //         }
  //     })
  //     }catch(err){
  //         console.log(err)
  //     }
  // }