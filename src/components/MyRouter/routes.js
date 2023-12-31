import Cart from "../../pages/Cart";
import LoginSinup from "../../pages/LoginSinup";
import Product from "../../pages/Product";
import Shop from "../../pages/Shop";
import ShopCatogry from "../../pages/ShopCatogry";
import men_banner from '../assets/banner_mens.png'
import women_banner from '../assets/banner_women.png'
import kids_banner from '../assets/banner_kids.png'
const ROUTES = [
    {
        index:true,
        path:'/ecommerce-react-app',
        element:<Shop/>
    },
    {
        path:'/login',
        element:<LoginSinup/>
    },
    {
        path:'/men',
        element:<ShopCatogry banner ={men_banner} catogry={'men'}/>
    },
    {
        path:'/women',
        element:<ShopCatogry banner={women_banner} catogry={'women'}/>
    },
    {
        path:'/kids',
        element:<ShopCatogry banner={kids_banner} catogry={'kid'}/>
    },
    {
        path:'/product',
        element:<Product/>
    },
    {
        path:'/product/:id',
        element:<Product/>
    },
    {
        path:'/cart',
        element:<Cart/>
    }
]

export default ROUTES