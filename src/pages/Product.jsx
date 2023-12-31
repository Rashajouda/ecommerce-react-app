import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/Breadcrums';
import ProductDisplay from '../components/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts';
function Product(props) {
    const {all_products} = useContext(ShopContext)
    const {id} = useParams()
    const product = all_products.find(item=>+item.id === +id)
    return (
        <div className='product'>
            <Breadcrums product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox />
            <RelatedProducts/>
        </div>
    );
}

export default Product;