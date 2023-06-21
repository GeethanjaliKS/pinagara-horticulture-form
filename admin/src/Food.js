import React,{useState} from 'react'
import { addfood, updatefood } from './Routes/routes';
import FileBase from 'react-file-base64'


function Food(props) {
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
        await updatefood({name:name,cost:cost,description:description,image:image}).then((res)=>res.json()).then((res)=>console.log(res))
        console.log("Form submitted");
        // Handle form submission here
      setSuccessMessage('updated member successful!');
      } else{
      await addfood({name:name,cost:cost,description:description,image:image,type:'food'}).then((res)=>res.json()).then((res)=>console.log(res))
     // Handle form submission here
      console.log("Form submitted");
      setSuccessMessage('Food added successfully!');
      }
       };
  return (
    <div> 
      <div className="max-w-md mx-auto my-20 pt-[10%]  ">
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
             Food Name
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

export default Food