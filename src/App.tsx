import { GoogleOAuthProvider } from "@react-oauth/google";
import PagesLayout from "./layout/PagesLayout";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registation";
import Home from "./pages/Home";
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import About from "./pages/About";
import Contact from "./pages/Contact";
import ApplyForLoan from "./pages/dashboard/ApplyForLoan";

function App() {

 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
       <Route path="/" element={<PagesLayout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="api/applyloan" element={<ApplyForLoan/>}/>
      </Route>
       
           <Route path="/api/login" element ={<Login/>}/>
       
         
         <Route path="/api/register" element ={<Registration/>}/>
         <Route path="/api/forgot-password" element={<ForgetPassword/>}/>
      </>
     
      
    )
  )


  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
    <div className="min-h-screen">
      <RouterProvider router={router} />
    </div>
  </GoogleOAuthProvider>
  );
}

export default App;