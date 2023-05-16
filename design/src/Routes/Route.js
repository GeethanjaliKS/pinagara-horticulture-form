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
