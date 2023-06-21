// import { useState } from "react";
// import Admin from './Admin';
// import { addadmin } from "./Routes/routes";
 
// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         className="max-w-md p-6 bg-white rounded shadow"
//         onSubmit={handleLogin}
//       >
//         <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
//         <div className="mb-4">
//           <label className="block mb-2 font-medium">Email:</label>
//           <input
//             type="email"
//             className="w-full border border-gray-300 rounded p-2"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 font-medium">Password:</label>
//           <input
//             type="password"
//             className="w-full border border-gray-300 rounded p-2"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );

// }
// export default Login;
