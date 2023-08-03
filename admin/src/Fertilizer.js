import React,{useState} from 'react'
import {addfer, updatefertilizer} from './Routes/routes'
import FileBase from 'react-file-base64'

function Fertilizer(props) {
  const{updateFormData,updateForm}=props;
// const [id,setId]=useState(updateFormData && updateFormData[0]._id || "");
const [name, setName] = useState(updateFormData && updateFormData[0] .name || "" );
const [cost, setCost] = useState(updateFormData && updateFormData[0] .cost || "" );
const [description, setDescription] = useState(updateFormData && updateFormData[0] .description|| "" );
const [image, setImage] = useState(updateFormData && updateFormData[0] .image || "" );
const [successMessage, setSuccessMessage] = useState('');



const handleSubmit =async (e) => {
    e.preventDefault();
    if(updateForm){
      await updatefertilizer({name:name,cost:cost,description:description,image:image,item:'fertilizer'}).then((res)=>res.json()).then((res)=>console.log(res))
      console.log("Form submitted");
      // Handle form submission here
    setSuccessMessage('updated member successful!');
    } else{
    await addfer({name:name,cost:cost,description:description,image:image,type:'fertilizer'}).then((res)=>res.json()).then((res)=>console.log(res))
    console.log("Form submitted");
    setSuccessMessage('Fertilizer added successful!');
    }
};
  return (
    <div> 
           <div className="max-w-md mx-auto my-20 pt-[5%] ">
           {successMessage && <p className="text-green-500">{successMessage}</p>}
           <h1 className='text-center text-2xl font-bold ' style={{fontFamily:'Bitter'}}>FERTILIZER DETAILS</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 shadow-lg shadow-slate-700">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
             Fertilizer Name
            </label>
            <input
              className="appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-80"
              id="name"
              type="text"
              placeholder="Enter Food name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div><br/>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cost">
              Cost
            </label>
            <input
              className="appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-80"
              id="cost"
              type="text"
              placeholder="Cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </div>
          <br/>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
              Description
            </label>
            <input
              className="appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-80"
              id="description"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          </div><br/>
          <div>

          <FileBase
              type="file"
              multiple={false}
              onDone={({base64}) => setImage(base64)}
              /></div>
          <div className="flex items-center justify-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
          </div>
          </form>
         
           </div>
    </div>
  )
}

export default Fertilizer 