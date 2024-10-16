import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom"
import Home from './components/Home';
import AboutScreen from './screen/AboutScreen';
import ServicesScreen from './screen/ServicesScreen';
import ContactScreen from './screen/ContactScreen';
import store from './store'
import { Provider } from 'react-redux'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/about' element={<AboutScreen />} />
      <Route path='/services' element={<ServicesScreen />} />
      <Route path='/contact' element={<ContactScreen />} />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
