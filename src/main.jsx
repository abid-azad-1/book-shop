import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Books from './Components/Books/Books'
import About from './Components/About/About'
import BookDetails from './Components/BookDetails/BookDetails'
import Error from './Components/Error/Error'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/header',
        element: <Header></Header>
      },
      {
        path: '/books',
        element: <Books></Books>,
        loader: () => fetch('https://api.itbook.store/1.0/new'),
      },
      
      {
        path: 'book/:id',
        element: <BookDetails></BookDetails>,
        loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      

      {
        path: '/about',
        element: <About></About>,
      },


    ]
  },




])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
