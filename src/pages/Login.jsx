import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

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
      style={{ backgroundImage: "url(/login.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
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
                <p className="mb-2">Email</p>
                <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-600 text-sm">
                      Email is required
                    </span>
                  )}
                </label>

                <p className="mb-2">password</p>
                <label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="grow"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  <span
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {errors.password && (
                    <span className="text-red-600 text-sm">
                      Password is required
                    </span>
                  )}
                </label>

                <button className={`btn text-white bg-[#FEA116] w-full`}>
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;