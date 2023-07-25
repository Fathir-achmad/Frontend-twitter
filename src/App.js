import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AllTweet } from './component/AllTweet';
import { HomePage } from './pages/Home';
import { LoginPage } from './pages/LoginPage';
import  Axios  from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './redux/userSlice';


function App() {
  
  const router = createBrowserRouter([
    { path: "/", element: <HomePage />, children: [
        { path : '/', element: <AllTweet /> }
      ]
    },

    { path: '/login', element: <LoginPage /> }
  ])

  //---------------------------------------------------- How to keep login
  const token = localStorage.getItem('token')
  const dispatch = useDispatch()
  const keepLogin = async() => {
    try {
      const response = await Axios.get("http://localhost:2000/user/keep",{
        headers : {Authorization: `Bearer: ${token}`}
      })
      console.log(response);
      
      dispatch(login(response.data.result))
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    keepLogin()
  },[])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
