export const adduser =async(data)=>{
    try {
        console.log('data',data)
        return await fetch(`http://127.0.0.1:4001/adduser`,{
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

    //viewmember
    export const viewmembers =async(data)=>{
        try {
            // console.log('data',data)
            return await fetch(`http://127.0.0.1:4001/viewmember`,{
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

        //delete member
        export const deletememberapi =async(id)=>{
            try {
                 console.log('data',id)
            
                return await fetch(`http://127.0.0.1:4001/deletemember/${id}`,{
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
            
            // upadte member

            export const updatemember =async(data)=>{
            try {
                //  console.log(data)
            
                return await fetch(`http://127.0.0.1:4001/updatemember/${data}`,{
                        method:"PATCH",
                        body: JSON.stringify({id:data.id,name:data.name, email:data.email_id,contact:data.contact,image:data.image,address:data.address}),
                        headers:{
                        "Content-Type":"application/json"
        
                    },
                    });
                  
            } catch (error) {
                console.log(error.message)
            }
            }  
            //add food  

    export const addfood =async(data)=>{
        try {
            console.log('data',data)
            return await fetch(`http://127.0.0.1:4001/addfood`,{
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
            //view food
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
            //update food

            export const updatefood =async(data)=>{
                try {
                    //  console.log(data)
                
                    return await fetch(`http://127.0.0.1:4001/updatefood/${data}`,{
                            method:"PATCH",
                            body: JSON.stringify({id:data.id,name:data.name, cost:data.cost,description:data.description,image:data.image,type:data.type}),
                            headers:{
                            "Content-Type":"application/json"
            
                        },
                        });
                      
                } catch (error) {
                    console.log(error.message)
                }
                }  
     //delete fertilizer
     export const deletefoodapi =async(id)=>{
        try {
             console.log('data',id)
        
            return await fetch(`http://127.0.0.1:4001/deletefood/${id}`,{
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


        export const addfer =async(data)=>{
            try {
                console.log('data',data)
                return await fetch(`http://127.0.0.1:4001/addfer`,{
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

            //delete fertilizer
        export const deletefertilizerapi =async(id)=>{
            try {
                 console.log('data',id)
            
                return await fetch(`http://127.0.0.1:4001/deletefertilizer/${id}`,{
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
    

            export const updatefertilizer =async(data)=>{
                try {
                    //  console.log(data)
                
                    return await fetch(`http://127.0.0.1:4001/updatefertilizer/${data}`,{
                            method:"PATCH",
                            body: JSON.stringify({id:data.id,name:data.name, cost:data.cost,description:data.description,image:data.image}),
                            headers:{
                            "Content-Type":"application/json"
            
                        },
                        });
                      
                } catch (error) {
                    console.log(error.message)
                }
                } 

            export const addworker =async(data)=>{
                try {
                    console.log('data',data)
                    return await fetch(`http://127.0.0.1:4001/addworker`,{
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
            
    //delete worker
    export const deleteworkapi =async(id)=>{
        try {
             console.log('data',id)
        
            return await fetch(`http://127.0.0.1:4001/deletework/${id}`,{
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

         // upadte worker

         export const updateworker =async(data)=>{
            try {
                //  console.log(data)
            
                return await fetch(`http://127.0.0.1:4001/updateworker/${data}`,{
                        method:"PATCH",
                        body: JSON.stringify({id:data.id,name:data.name, email:data.email_id,contact:data.contact,image:data.image,address:data.address}),
                        headers:{
                        "Content-Type":"application/json"
        
                    },
                    });
                  
            } catch (error) {
                console.log(error.message)
            }
            }    


            // export const addadmin =async(data)=>{
            //     try {
            //         console.log('data',data)
            //         return await fetch(`http://127.0.0.1:4001/addadmin`,{
            //                 // mode: 'no-cors',
            //                 method:"POST",
            //                 body: JSON.stringify(data),
            //                 headers:{
            //                 "Content-Type":"application/json"
            
            //             },
            //             })
                
            
            //     } catch (error) {
            //       console.error(error);
            //     }
            //   };        


              