import '../css/addproduct.css';
import { useForm } from 'react-hook-form';
import { useProductQuery, useUpdateProductMutation } from '../redux/services/productApi';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const EditProduct = () => {
    const { id } = useParams();
    const { data: productData } = useProductQuery(id);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {...productData}
    });
    const [updateProduct] = useUpdateProductMutation();
    const { token } = useSelector((state) => ({...state.auth}));
    const { title, measurement: { name: m_name, desc: m_desc } = {}  } = productData || {};
    const navigate = useNavigate();

    const onSubmit = (data) => {
        updateProduct({product: data, token })
        .then(res => {
            if(res.data.id){
                navigate(`/products/${res.data.id}`)   
            }
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        reset({...productData, m_name, m_desc});
    }, [productData])

    return (
        <main>

        <div className="banner">
            <h1>Edit Product</h1>
            <p className="bread-crumbs">Home / edit-product</p>
        </div>
    
        <section className="add-product">
            <div className="wrapper">
                <div className="description" >
                    <h2>Edit - {title}</h2>
                   <form onSubmit={handleSubmit(onSubmit)} >
                       <label htmlFor="p_name">Product Name</label>
                       <input {...register('title', { required: true })} required type="text" id="p_name" placeholder="eg: Nagpur Oranges (1kg)" />
                       <label htmlFor="p_desc">Description</label>
                       <input {...register('desc', { required: true })} required type="text" id="p_desc" placeholder="Fresh and organic ..." />
                       <label htmlFor="p_img">Product Image (Link)</label>
                       <input {...register('img', { required: true })} required type="url" id="p_img" placeholder="https://imgur.com/abcdxyz" />
                       <label htmlFor="p_price">Price (inr)</label>
                       <input {...register('price', { required: true, min: 1 })} required type="number" min={0} id="p_price" placeholder="70" />
                       <label htmlFor="p_quantity">Total Quantity</label>
                       <input {...register('quantity', { required: true, min: 1 })} type="number" min={0} id="p_quantity" placeholder="100" />
                       <label htmlFor="p_sale">Sale (percent)</label>
                       <input {...register('sale', { required: true, min: 0 })} type="number" min={0} max={100} id="p_sale" placeholder="10" />
                       <label htmlFor="p_mname">Measurement (default 1kg)</label>
                       <input defaultValue={'kg'} {...register('m_name')} type="text" id="p_mname" placeholder="1kg, 500ml, 1litre, 1dozen" />
                       <label htmlFor="p_mdesc">Measurement Description (optional)</label>
                       <input {...register('m_desc')} type="text" id="p_mdesc" placeholder="a dozen contains 12 pieces" />
                       <div className="">
                        <button>Edit</button>
                       </div>
                       <br />
                   </form>
                </div>
            </div>
        </section>
    </main>
    )
}

export default EditProduct;