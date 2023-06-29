import user1 from '../model/UserModel.js'

export const usereg =  async (req,res) => {
    let { name, contact, address, email_id, password} = req.body

    // console.log(req.body)


    try {

        let newuser = new user1({
        name:name, contact:contact, email_id:email_id, address:address, password:password,membership:false

        }) 
         console.log(newuser)
        let createdUser = await newuser.save()
        console.log(createdUser)
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