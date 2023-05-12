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
