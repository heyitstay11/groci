import '../css/addproduct.css';
import { useForm } from 'react-hook-form';
import { useProductQuery, useUpdateProductMutation } from '../redux/services/productApi';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EditProduct = () => {
    const { id } = useParams();
    const { data: productData } = useProductQuery(id);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({defaultValues: {...productData}});
    const [updateProduct] = useUpdateProductMutation();
    const { token } = useSelector((state) => ({...state.auth}));
    const { title, img, measurement: { name: m_name, desc: m_desc } = {}  } = productData || {};
    const navigate = useNavigate();
    const [imgFile, setImageFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const onSubmit = (data) => {
        const { _id, title, desc, img, price, quantity, sale, m_name, m_desc } = data;
        const newProduct = new FormData();
        newProduct.append('_id', _id);
        newProduct.append('title', title);
        newProduct.append('desc', desc);
        newProduct.append('img', imgFile || img);
        newProduct.append('price', price);
        newProduct.append('quantity', quantity);
        newProduct.append('sale', sale);
        newProduct.append('m_name', m_name);
        newProduct.append('m_desc', m_desc);
        updateProduct({ product: newProduct, token, id: _id })
        .then(res => {
            console.log(res);
            if(res.data.id){
                navigate(`/products/${res.data.id}`)   
            }
        }).catch(err => console.log(err));
    }

    useEffect(() => {
        reset({...productData, m_name, m_desc});
    }, [productData]);

    useEffect(() => {
        if(!imgFile){
            setPreview(null);
            return;
        }

        const objectURL = window.URL.createObjectURL(imgFile);
        setPreview(objectURL);

        return () => window.URL.revokeObjectURL(objectURL);
    }, [imgFile]);

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
                       <input {...register('img')} type="url" id="p_img" placeholder="https://imgur.com/abcdxyz" />
                       <div className="">
                          <label htmlFor="img-file">Upload Product Image: </label> 
                          <input type="file" onChange={e => setImageFile(e.target.files[0])} multiple={false} accept="image/png, image/jpeg" />
                          {imgFile ?
                          <>
                            <button type='button' onClick={() => setImageFile(null)}>Cancel File</button>
                            <img src={preview} alt="" style={{ marginTop: '1em', marginLeft: '1em' }} height={200} />
                          </> :
                            <img src={img} alt="" style={{ marginTop: '1em', marginLeft: '1em' }} height={200} />
                          }
                       </div>
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