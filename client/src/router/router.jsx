import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Shop from "../shop/Shop";
import About from "../component/About";
import Blog from "../component/Blog";
import Home from "../home/Home";
import Singlebook from "../shop/Singlebook";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashBoard from "../dashboard/DashBoard";
import Singup from "../component/Singup";
import Login from "../component/Login";
import PrivateRoute from "../privateroute/PrivateRoute";
import Logout from "../component/Logout";
import OrderPage from "../shop/OrderPage";
import Orders from "../shop/Orders";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBooks from "../dashboard/EditBooks";
import Wishlist from "../shop/Wishlist";
import AddCarts from "../shop/AddCarts";
import SearchResult from "../home/SearchResult";


  const router = createBrowserRouter([
    { 
      path: "/",
      element: <App/>,
      children: [
        {
          path:"/",
          element:<Home/>
        },
        {
            path:"/shop",
            element:<Shop/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/blog",
            element:<Blog/> 
        },
        {
            path:"/books/:id",
            element:<Singlebook/>,
            loader:({params}) => fetch(`${import.meta.env.VITE_API_BASE_URL}/books/${params.id}`)
        },
        {
          path:"/order/:id",
          element:<OrderPage/>,
          loader:({params}) => fetch(`${import.meta.env.VITE_API_BASE_URL}/books/${params.id}`)
        },
        {
          path:"/orders",
          element:<Orders/>
        },
        {
          path:"/wishlist",
          element:<Wishlist/>
        },
        {
          path:"/addcart",
          element:<AddCarts/>
        },
        {
          path: "/search/:keyword",
          element: <SearchResult />,
          loader: ({ params }) =>
            fetch(`${import.meta.env.VITE_API_BASE_URL}/search-books?search=${params.keyword}`)
        }        
      ]
    },
    {
      path: "/admin/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "/admin/dashboard",
          element: <PrivateRoute><DashBoard /></PrivateRoute>,
        },
        {
          path: "/admin/dashboard/upload",
          element: <UploadBook />,
        },
        {
          path:"/admin/dashboard/manage",
          element: <ManageBook />,
        },
        {
          path: "/admin/dashboard/edit-books/:id",
           element: <EditBooks />,
          loader: ({ params }) =>
            fetch(`${import.meta.env.VITE_API_BASE_URL}/books/${params.id}`),
        },
      ],
    },
    {
     path:"sign-up",
    element: <Singup/>
    },{
    path:"login",
    element:<Login/>
    },
    {
     path:"logout",
     element: <Logout/>
    },
  ]);

  export default router;