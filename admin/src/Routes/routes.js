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

            export const updatemember =async(id)=>{
            try {
                 console.log(id)
            
                return await fetch(`http://127.0.0.1:4001/updatemember/${id}`,{
                        method:"PATCH",
                        // body: JSON.stringify({_id:id}),
                        headers:{
                        "Content-Type":"application/json"
        
                    },
                    });
                  
            } catch (error) {
                console.log(error.message)
            }
            }    

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
            
    