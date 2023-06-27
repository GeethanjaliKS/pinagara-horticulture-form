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
                console.log('data',data)
                return await fetch(`http://127.0.0.1:4001/cart`,{
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

            export const storefood =async(data)=>{
                try {
                    console.log('data',data)
                    return await fetch(`http://127.0.0.1:4001/cart`,{
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