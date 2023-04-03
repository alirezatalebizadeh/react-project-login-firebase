import Product from './Components/Product'
import MainProduct from './Components/MainProduct'
import NotFound from './Components/NotFound'
import Home from './Components/Home'
import Contact from './Components/Contact'
import User from './Components/User'



let routes = [
    { path: '/', element: < Home /> },
    { path: '/product', element: <Product /> },
    { path: '/product/:productId', element: <MainProduct /> },
    { path: '/user', element: <User /> },
    // { path: '*', element: <NotFound /> },
    {
        path: '/contact', element: <Contact />, children: [
            { path: 'setting', element: < h2 > این زیر مجموعه این صفحه است.تنظیمات سایت...</h2 > },
            { path: 'dashboard', element: < h2 >.وارد قسمت داشبورد سایت شده اید.</h2 > }
        ]
    },
]

export default routes