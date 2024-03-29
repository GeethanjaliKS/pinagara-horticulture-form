import React,{useState} from 'react'
import { adduser,updatemember,viewmembers } from './Routes/routes';
import FileBase from 'react-file-base64';


 

function Member(props) {
    // const userForm = () => {
    const{updateFormData,updateForm}=props;
    // console.log(updateFormData);
    // console.log(updateForm);
    // const [id,setId]=useState(updateFormData && updateFormData[0]._id || "") ;
    const [name, setName] = useState(updateFormData && updateFormData[0] .name || "");
    
    const [address, setAddress] = useState(updateFormData && updateFormData[0] .address || "");
    const [contactNumber, setContactNumber] = useState(updateFormData && updateFormData[0] .contact || "");
    const [email, setEmail] = useState(updateFormData && updateFormData[0] && updateFormData[0].email_id || "");
    const [image, setImage] = useState(updateFormData && updateFormData[0] && updateFormData[0].image || "");
    const [successMessage, setSuccessMessage] = useState('');
    const [password,setPassword]=useState();

    const handleSubmit = async (e) => {
      console.log(name,contactNumber,address,email,password)
        e.preventDefault();
        console.log(updateForm)
        if(updateForm){
          await updatemember({name:name,address:address,contact:contactNumber,email_id:email,image:image,password:password}).then((res)=>res.json()).then((res)=>console.log(res))
          console.log("Form submitted");
          // Handle form submission here
        setSuccessMessage('updated member successful!');
        }
        else{
          await adduser({name:name,address:address,contact:contactNumber,email_id:email,image:image}).then((res)=>res.json()).then((res)=>console.log(res))
          console.log("Form submitted");
          // Handle form submission here
        setSuccessMessage('Member add successful!');
        }
       
      // await updatemember({name:name,address:address,contact:contactNumber,email_id:email,image:image}).then((res)=>res.json()).then((res)=>console.log(res))
 setName("");
 setContactNumber("");
 setEmail("");
 setAddress("");
 setImage("");

 };

    console.log(image)



    
  return (
    <div>
     <div className="max-w-md mx-auto my-20 pt-[10%]  ">
{successMessage && <p className="text-green-500">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-7 pt-10 pb-5 justify-center">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div><br/>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="contactNumber">
              Contact Number
            </label>
            <input
              className="appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-80"
              id="contactNumber"
              type="text"
              placeholder="Enter your contact number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <br/>
          <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email ID
          </label>
          <input
            className="appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-80"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
          <div className="col-span-2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
              Address
            </label>
            <textarea
              className="appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-80"
              id="address"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>
        </div> <br/> 
        <div>
           <label className="block text-gray-700 font-bold mb-2" htmlFor="contactNumber">
             Password
           </label>
           <input
             className="appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-80"
             id="password"
             type="password"
             placeholder="Enter your password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
           />
         </div>
        
        <div>
        <FileBase
              type="file"
              multiple={false}
              onDone={({base64}) => setImage(base64)}
              />      
              </div>
       
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
    
  );
};

export default Member