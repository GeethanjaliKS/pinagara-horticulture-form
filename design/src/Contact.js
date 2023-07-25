import React,{useState} from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission
    // You can perform your desired actions here, such as sending an email or saving the form data

    // Reset form fields
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div className='m-6 bg-green-100'>
    
    <div style={{ height: '100vh', width: '100%' }} className='grid grid-cols-2'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}  //https://console.cloud.google.com/
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
      {/* <div className='grid grid-col-1'> */}
      <div>
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>


      <div className="border-2 p-6 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
          <address className='font-bold'>
          Vittal, Karnataka 574243, India <br/><br/>

          bantwalfpo@gmail.com<br/><br/>

          9480253747
          </address>

          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-semibold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block mb-1 font-semibold">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-1 font-semibold">
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-4 py-2 text-white rounded bg-green-300 hover:bg-green-600"
          >
            Submit
          </button>
        </form></div>
      </div>
    </div>
      </div>
    // </div>
  );
}

