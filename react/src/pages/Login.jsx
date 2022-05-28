import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux'
import { setLogin } from '../redux/services/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loading, error } = useSelector((state) => ({...state.auth}));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {

        fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
        .then(data => {
            if(data.token){
                dispatch(setLogin(data));
                navigate('/');
            }else{
                console.log(data);
            }
        })
        .catch(err => console.log(err));
    }

    return (
    <main>

    <div className="banner">
        <h1>Sign In</h1>
        <p className="bread-crumbs">Home / signin</p>
    </div>

    <section className="about-us">
        <div className="about-us-content wrapper login-sp">
            <img src="../imgs/about-us-1.webp" alt="" height="500" width="480"/>
            <div className="description login-desc">
               <form onSubmit={handleSubmit(onSubmit)} >
                   <h2>Login</h2>
                   <label htmlFor="email">Email</label>
                   <input {...register('email', { required: true })} type="email" id="email" placeholder="Email" />
                   <label htmlFor="password">Password</label>
                   <input {...register('password', { required: true})} type="password" id="password" placeholder="Password"  autoComplete="new-password"/>
                   <div className="">
                    <button>Submit</button>
                   </div>
               </form>
            </div>
        </div>
    </section>
</main>
)
}

export default Login;