import './App.css';
import Products from './Products';
import Login from './Forms/Login';
import Edit from './Edit';
import Signup from './Forms/Signup';
import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense, useState } from 'react';
import Cart from './Cart';
import Checkout from './Checkout';
import SuccessPage from './SuccessPage';
import UploadImg from './UploadImg';
function App() {
  const [data, setData] = useState(null)
  const [cartItem, setcartItem] = useState([])
  const [cartProducts, setcartProducts] = useState([])
  const editfunc = (data) => {
    setData(data)
  }
  const anotherfunction = (cartItem) => {
    console.log(cartItem, "cartItem")
    setcartItem(cartItem)
  }

  const cartfunction = (cartProducts) => {
    setcartProducts(cartProducts)
    console.log(cartProducts, "cartProducts")
  
  }
  const isAuthenticated = localStorage.getItem("password");
  const [loggedin, setLoggedin] = useState(isAuthenticated ? true : false);
  

  return (
    <Routes>
    (!loggedin && )  
   (  <Route path='/edit' element={<Edit editdata={data} />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route> )

      <Route path='/' element={<Products cartfunction={cartfunction} anotherfunction={anotherfunction} editdone={editfunc}  />}></Route>
      <Route path='/cart' element={<Cart Checkout={cartProducts} cartfunction={cartfunction}  />}></Route>
      <Route path='/checkout' element={<Checkout  Checkout={cartProducts} />} />
      <Route path='/successpage' element={<SuccessPage />} />
      <Route path='/upload' element={<UploadImg />}/>
    </Routes>
      
  );
}

export default App;


// import React,{useState} from "react";
// import { Routes, Route } from "react-router-dom";
// import Login from "./Forms/Login";
// import Protected from "./Utils/Protected";
// import Auth from "./Utils/Auth";
// import Products from './Products';
// import Signup from "./Forms/Signup";
// import Cart from './Cart';

// const App = () => {
//   const [loggedin, setLoggedin] = useState(isAuthenticated ? true : false);
//   const isAuthenticated = localStorage.getItem("password");
//   const routeArray = [

//     {
//       path: "/login",
//       component: <Login />,
//       routeType: "Auth",
//     },
//     {
//       path: "/signup",
//       component: <Signup />,
//       routeType: "Auth",
//     },
//     {
//       path: "/cart",
//       component: <Cart />,
//       routeType: "protected",
//     },
//     {
//       path: "/",
//       component: <Products />,
//       routeType: "protected",
//     }
//   ];
//   document.addEventListener("isLoggedIn", ({ detail }) => {
//     setLoggedin(detail);
//   });

//   return (
//     <div className="app">
//       <Routes>
//         {/* {routeArray.map((item, key) => (
//           <Route key={key} path={item.path} element={item.component} />
//         ))} */}

//         {routeArray.map((item, key) => {
//           if (item.routeType == "protected") {
//             return (
//               <Route
//                 key={key}
//                 path={item.path}
//                 element={
//                   <Protected >
//                     {item.component}
//                   </Protected>
//                 }
//               />
//             );
//           } else {
//             return (
//               <Route
//                 key={key}
//                 path={item.path}
//                 element={
//                   <Auth>{item.component}</Auth>
//                 }
//               />
//             );
//           }
//         })}
//       </Routes>

//     </div>
//   );
// };

// export default App;


