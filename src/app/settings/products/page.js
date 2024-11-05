import BackButton from "@/components/BackButton"
import axios from "axios";
import Link from "next/link"

export const metadata = { title: "Product Management" }

async function getData(){
    try {
        const res = await axios.get(`${process.env.DOMAIN}/api/settings/product`);
        return res.data.data;
    } catch (error) {
        console.log(error, 'Error for product fetch');
    } 
}

const page = async () => {
    const data = await getData();
    // console.log(data);


    return (
        <main className="content__area">
            <div className="flex items-center justify-between mb-5 md:mb-6 lg:mb-7">
                <BackButton />  
                <Link href={"/settings/products/create"} className="btn btn-primary">Create</Link>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>    
                            <th>image</th>    
                            <th>title</th>    
                            <th>barcode</th>    
                            <th>category</th>    
                            <th>unit</th>    
                            <th>price</th>    
                            <th>supplier</th>    
                            <th>action</th>    
                        </tr> 
                    </thead>
                    <tbody> 
                        {data.map((product, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td> 
                                <td> </td> 
                                <td className="capitalize">{product.title}</td> 
                                <td>{product.barcode}</td> 
                                <td>{product.category}</td> 
                                <td>{product.purchase_unit}</td> 
                                <td> 
                                    <span className="text-primary font-medium">{product.price}$</span>
                                </td> 
                                <td className="capitalize">{(product.supplier).slice(0,1)}</td> 
                                <td></td> 
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



        </main>
    )
}

export default page