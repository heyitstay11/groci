const Login = () => {
    return (
    <main>

    <div className="banner">
        <h1>Sign In</h1>
        <p className="bread-crumbs">Home / signin</p>
    </div>

    <section className="about-us">
        <div className="about-us-content wrapper">
            <img src="../imgs/about-us-1.webp" alt="" height="500" width="480"/>
            <div className="description">
               <form>
                   <h2>Login</h2>
                   <label htmlFor="email">Email</label>
                   <input type="email" id="email" placeholder="Email"/>
                   <label htmlFor="password">Password</label>
                   <input type="password" id="password" placeholder="Password"  autoComplete="new-password"/>
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