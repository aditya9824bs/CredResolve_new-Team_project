// import React, { useState } from "react";
// import { Mail, Lock, Eye, EyeOff } from "lucide-react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Both fields are required!");
//       return;
//     }

//     console.log("Login Data:", { email, password });
//     setError(null);
//     // Handle login authentication logic here (API call, Firebase, etc.)
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center  px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-white w-full max-w-md p-8 rounded-xl shadow-xl"
//       >
//         <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Login</h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <div className="mt-1 relative flex items-center">
//               <Mail className="absolute left-3  h-5 w-5 text-gray-400" />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="pl-10 pr-10  py-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 outline-none"
//                 placeholder="john@example.com"
//               />
//             </div>
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <div className="mt-1 relative flex items-center">
//               <Lock className="absolute left-3 h-5 w-5 text-gray-400" />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="pl-10 pr-10  py-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 outline-none"
//                 placeholder="••••••••"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute inset-y-0 right-3 flex items-center"
//               >
//                 {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
//               </button>
//             </div>
//           </div>

//           {/* Error Message */}
//           {error && <p className="text-red-500 text-sm">{error}</p>}

//           {/* Login Button */}
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
//           >
//             Login
//           </motion.button>
//         </form>

//         {/* Links */}
//         <div className="mt-4 text-center">
//           <Link to="/api/forgot-password" className="text-blue-500 hover:text-orange-500 text-sm">
//             Forgot Password?
//           </Link>
//         </div>

//         <div className="mt-3 text-center text-gray-700">
//           Don't have an account?{" "}
//           <Link to="/api/register" className="text-blue-500 hover:text-orange-500 font-medium">
//             Sign up
//           </Link>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;








import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }

    console.log("Login Data:", { email, password });
    setError(null);
    // Handle login authentication logic here (API call, Firebase, etc.)
  };

  const handleGoogleSuccess = (response: any) => {
    console.log("Google Auth Success:", response);
    // Handle Google login authentication here (send token to backend, etc.)
  };

  const handleGoogleFailure = ():void => {
    console.error("Google Auth Failed:");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white w-full max-w-md p-8 rounded-xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <div className="mt-1 relative flex items-center">
              <Mail className="absolute left-3 h-5 w-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10 pr-10 py-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 outline-none"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="mt-1 relative flex items-center">
              <Lock className="absolute left-3 h-5 w-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-10 pr-10 py-2 block w-full rounded-lg border border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 outline-none"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center"
              >
                {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
          >
            Login
          </motion.button>
        </form>

        {/* Google Auth */}
        <div className="mt-4 flex justify-center">
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleFailure} />
        </div>

        {/* Links */}
        <div className="mt-4 text-center">
          <Link to="/api/forgot-password" className="text-blue-500 hover:text-orange-500 text-sm">
            Forgot Password?
          </Link>
        </div>

        <div className="mt-3 text-center text-gray-700">
          Don't have an account?{" "}
          <Link to="/api/register" className="text-blue-500 hover:text-orange-500 font-medium">
            Sign up
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
