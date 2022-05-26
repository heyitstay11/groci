import '../css/about.css'
import '../css/register.css'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        fetch('http://localhost:5000/auth/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res => res.json())
        .then(data => {
            if(data.token){
                navigate('/login');
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <main>

        <div className="banner">
            <h1>Sign Up</h1>
            <p className="bread-crumbs">Home / signup</p>
        </div>

        <section className="about-us">
            <div className="about-us-content wrapper">
                <img className="about-side-image" src="../imgs/about-us-1.webp" alt="" height="500" width="480" />
                <div className="description">
                   <form onSubmit={handleSubmit(onSubmit)} >
                       <h2>Register</h2>
                       <label htmlFor="username">Username</label>
                       <input {...register('username', { required: true })} type="text" id="username" placeholder="Enter your name" autoComplete="username" />
                       <label htmlFor="email">Email</label>
                       <input {...register('email', { required: true })} type="email" id="email" placeholder="Email" autoComplete="email"/>
                       <label htmlFor="password">Password</label>
                       <input {...register('password', { required: true })} type="password" id="password" placeholder="Password"  autoComplete="new-password"/>
                       <label htmlFor="confirm-password">Confirm Password</label>
                       <input  {...register('confirm-password', { required: true })} type="password" id="confirm-password" placeholder="Re-enter Password" autoComplete="new-password"/>
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

export default Register;