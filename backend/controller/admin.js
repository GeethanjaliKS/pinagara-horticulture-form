
// import admin from '../model/AdminLoginModel.js';



// export const addadmin =  async (req,res) => {
//     const { email, password } = req.body;
  
//     try {
//       // Find the admin with the given email
//       const admin = await admin.findOne({ email });
  
//       // If admin not found, return error
//       if (!admin) {
//         return res.status(401).json({ error: 'Invalid email or password' });
//       }
  
//       // Compare the password with the stored hash
//       const passwordMatch = await bcrypt.compare(password, admin.password);
  
//       // If password doesn't match, return error
//       if (!passwordMatch) {
//         return res.status(401).json({ error: 'Invalid email or password' });
//       }
  
//       // Password is correct, authentication successful
//       res.json({ message: 'Login successful' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Server error' });
//     }
//   };
  
