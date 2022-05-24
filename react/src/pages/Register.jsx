import '../css/about.css'
import '../css/register.css'

const Register = () => {
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
                   <form>
                       <h2>Register</h2>
                       <label htmlFor="username">Username</label>
                       <input type="text" id="username" placeholder="Enter your name" autoComplete="username" />
                       <label htmlFor="email">Email</label>
                       <input type="email" id="email" placeholder="Email" autocomplete="email"/>
                       <label htmlFor="password">Password</label>
                       <input type="password" id="password" placeholder="Password"  autoComplete="new-password"/>
                       <label htmlFor="confirm-password">Confirm Password</label>
                       <input type="password" id="confirm-password" placeholder="Re-enter Password" autoComplete="new-password"/>
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