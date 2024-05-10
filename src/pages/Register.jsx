import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoImagesOutline } from "react-icons/io5";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // const { logInUser, setUser, googleLogin, githubLogin, user,theme } =
  //   useContext(AuthContext);

  // const location = useLocation();
  // const navigate = useNavigate();
  // console.log(location);
  // const destination = location?.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    logInUser(email, password)
      .then((result) => {
        setUser(result.user);
        //   toast.success("Log in Successfully as " + email);
        navigate(destination);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //   toast.error("Log in Failed. Reason :" + errorMessage);
      });
  };

  // const handleGoogle = () => {
  //   googleLogin()
  //     .then((result) => {
  //       setUser(result.user);
  //     //   toast.success("Log in Successfully as " + result.user.email);

  //       navigate(destination);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // const handleGithub = () => {
  //   githubLogin()
  //     .then((result) => {
  //       setUser(result.user);
  //     //   toast.success("Log in successfully with Github");

  //       navigate(destination);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(/register.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl text-black p-8 bg-base-100">
              <h2 className="py-8">Welcome to Avson</h2>
              <form onSubmit={handleSubmit(onSubmit)}>

                <p>Name</p>
<label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
  <input type="text" className="grow" placeholder="Name" {...register("Name")} />
</label>

            

<p>Email</p>
<label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
  <input type="text" className="grow" placeholder="Email" {...register('email', { required: true })}/>
</label>
  {errors.email && <p className="text-red-600 text-sm">Email is required</p>}

<p>Photo URL</p>
<label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
  <input type="text" className="grow" placeholder="Photo URL" {...register('PhotoURL')} />
  
</label>

<p>Password</p>
<label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
  <input type={showPassword ? 'text' : 'password'} className="grow" placeholder="Password" {...register('password', { required: true })}/>
  <span onClick={()=> {setShowPassword(!showPassword)}}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
</label>
  {errors.password && <p className="text-red-600 text-sm">Password is required</p>}
  {error && <p className="text-red-600 text-sm">{error}</p>}

<button className={`btn text-white bg-[#FEA116] w-full`}>Register</button>
</form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
