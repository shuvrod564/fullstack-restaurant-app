
import React  from 'react' 
import axios from 'axios' 
import BackButton from '@/components/BackButton';
import ProductForm from './ProductForm'

async function getData (){
    try {
        const res = await axios.get(`${process.env.DOMAIN}/api/settings/product/createdata`, {cache: 'no-store'});
        return res.data.data; 
    } catch (error) {
        console.log('supplier list fetch error: ', error);
    }
}


const page = async () => {
     
    const data = await getData();
    // console.log(data);


    return (
        <main className="content__area">
            <div className="flex items-center justify-between mb-5 md:mb-6 lg:mb-7">
                <BackButton /> 
            </div>

            <ProductForm fetchedData={data} />
        </main>
    )
}

export default page;