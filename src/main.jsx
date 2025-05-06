import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromChildren, Route } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Github, { GithubLoadFollwer } from './components/Github/Github.jsx';
import User from './components/User/Settings.jsx';
import Service from './components/Service/Service.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import { AuthProvider } from './context/AuthContext';

import Settings from './components/User/Settings.jsx';
import Profile from './components/User/Profile.jsx';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         path: "github",
//         element: <Github />
//       }
//     ]
//   },

// ])

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="service" element={<Service />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      {/* <Route loader={GithubLoadFollwer} path="github" element={<Github />} /> */}
      {/* <Route path="user/:userid" element={<User />} /> */}
      {/* <Route path="github" element={<Github />} /> */}
      <Route path="settings" element={<Settings />} />
      <Route path="profile/:userid" element={<Profile />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
