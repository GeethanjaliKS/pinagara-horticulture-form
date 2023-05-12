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
    