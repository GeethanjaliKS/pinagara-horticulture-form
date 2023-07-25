export const viewfood =async(data)=>{
    try {
        console.log('data',data)
        return await fetch(`http://127.0.0.1:4001/viewfood`,{
                // mode: 'no-cors',
                method:"GET",
                // body: JSON.stringify(data),
                headers:{
                "Content-Type":"application/json"

            },
            })
    } catch (error) {
        console.log(error.message)
    }
    }
    export const viewfertilizer =async(data)=>{
        try {
            console.log('data',data)
            return await fetch(`http://127.0.0.1:4001/viewfertilizer`,{
                    // mode: 'no-cors',
                    method:"GET",
                    // body: JSON.stringify(data),
                    headers:{
                    "Content-Type":"application/json"
    
                },
                })
        } catch (error) {
            console.log(error.message)
        }
        }


        export const storecart =async(data)=>{
            try {
                // console.log('cartdata',data)
                return await fetch(`http://127.0.0.1:4001/storecart`,{
                        // mode: 'no-cors',
                        method:"POST",
                        body: JSON.stringify(data),
                        headers:{
                        "Content-Type":"application/json"
        
                    },
                    })
            } catch (error) {
                console.log(error.message)
            }
            }


            export const viewcart =async(data)=>{
                try {
                    console.log('viewcartuserid',data)
                    return await fetch(`http://127.0.0.1:4001/viewcart/${data}`,{
                            // mode: 'no-cors',
                            method:"POST",
                            // body: JSON.stringify(data),
                            headers:{
                            "Content-Type":"application/json"
            
                        },
                        })
                } catch (error) {
                    console.log(error.message)
                }
                }

                //delete cart item
                export const deletecart =async(id)=>{
                    try {
                         console.log('data',id)
                    
                        return await fetch(`http://127.0.0.1:4001/deletecart/${id}`,{
                                method:"DELETE",
                                // body: JSON.stringify({_id:id}),
                                headers:{
                                "Content-Type":"application/json"
                
                            },
                            });
                          
                    } catch (error) {
                        console.log(error.message)
                    }
                    }

                    export const orderdetails =async(data)=>{
                        try {
                            console.log('orderDetails',data)
                            return await fetch(`http://127.0.0.1:4001/orderdetails`,{
                                    // mode: 'no-cors',
                                    method:"POST",
                                    body: JSON.stringify(data),
                                    headers:{
                                    "Content-Type":"application/json"
                    
                                },
                                })
                        } catch (error) {
                            console.log(error.message)
                        }
                        }


                        export const allorder =async(data)=>{
                            try {
                                console.log('data',data)
                                return await fetch(`http://127.0.0.1:4001/allorder`,{
                                        // mode: 'no-cors',
                                        method:"GET",
                                        // body: JSON.stringify(data),
                                        headers:{
                                        "Content-Type":"application/json"
                        
                                    },
                                    })
                            } catch (error) {
                                console.log(error.message)
                            }
                            }
                    

                            export const viewworker =async(data)=>{
                                try {
                                    console.log('data',data)
                                    return await fetch(`http://127.0.0.1:4001/viewworker`,{
                                            // mode: 'no-cors',
                                            method:"GET",
                                            // body: JSON.stringify(data),
                                            headers:{
                                            "Content-Type":"application/json"
                            
                                        },
                                        })
                                } catch (error) {
                                    console.log(error.message)
                                }
                                }
    
    //user register
    export const usereg =async(data)=>{
        try {
             console.log('data',data)
            return await fetch(`http://127.0.0.1:4001/usereg`,{
                    // mode: 'no-cors',
                    method:"POST",
                    body: JSON.stringify(data),
                    headers:{
                    "Content-Type":"application/json"
    
                },
                })
        } catch (error) {
            console.log(error.message)
        }
        }

        //user login
        
        export const login =async(data)=>{
            try {
                // const token = sessionStorage.getItem('token');
                // console.log(token)
                 console.log('data',data)
                return await fetch(`http://127.0.0.1:4001/login`,{
                        // mode: 'no-cors',
                        method:"POST",
                
                        body: JSON.stringify(data),
                        headers:{
                        "Content-Type":"application/json",
                        // Authorization: `Bearer ${token}`,
                        },
                       
                    })
            } catch (error) {
                console.log(error.message)
            }
        }

        export const itemcancel =async(id)=>{
            try {
                 console.log('order',id)
            
                return await fetch(`http://127.0.0.1:4001/itemcancel/${id}`,{
                        method:"PATCH",
                        body: JSON.stringify({_id:id}),
                        headers:{
                        "Content-Type":"application/json"
        
                    },
                    });
                  
            } catch (error) {
                console.log(error.message)
            }
            }