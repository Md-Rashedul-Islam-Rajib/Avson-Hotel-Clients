import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const {createUser, logOutUser} = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()


      
      const onSubmit= (data) => {
        const {email, password} = data;
          if(password.length < 6){
            return setError('password must be 6 characters')
          }
          if(!/[A-Z]/.test(password)){
            return setError('password must have at least one uppercase characters')
          }
          if(!/[a-z]/.test(password)){
            return setError('password must have at least one lowercase characters')
          }

          setError('');
        createUser(email, password)
        .then(result=>{
            console.log(result.user);
            toast.success('Account created successfully');
            logOutUser()
            navigate('/login')
            
        

        })
        .catch(error=> {
            console.log(error);
        })
      }

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
              <h1 className="text-5xl font-bold">Welcome to Avson Hotel!</h1>
              <p className="py-6">
              We're thrilled to welcome you to Avson Hotel. Whether you're here for business or pleasure, we're committed to making your stay comfortable and enjoyable
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl text-black p-8 bg-base-100">
              <h2 className="py-8 text-center font-bold text-2xl">Register your account</h2>
              <form onSubmit={handleSubmit(onSubmit)}>

                <p>Name</p>
<label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
  <input type="text" className="grow border-0" placeholder="Name" {...register("Name")} />
</label>

            

<p>Email</p>
<label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
  <input type="text" className="grow border-0" placeholder="Email" {...register('email', { required: true })}/>
</label>
  {errors.email && <p className="text-red-600 text-sm">Email is required</p>}

<p>Photo URL</p>
<label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
  <input type="text" className="grow border-0" placeholder="Photo URL" {...register('PhotoURL')} />
  
</label>

<p>Password</p>
<label className="input input-bordered flex items-center gap-2 mb-2 md:mb-4">
  <input type={showPassword ? 'text' : 'password'} className="grow border-0" placeholder="Password" {...register('password', { required: true })}/>
  <span onClick={()=> {setShowPassword(!showPassword)}}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
</label>
  {errors.password && <p className="text-red-600 text-sm">Password is required</p>}
  {error && <p className="text-red-600 text-sm">{error}</p>}

<button className={`btn text-white bg-[#FEA116] w-full`}>Register</button>
</form>

<div className={`flex justify-between font-semibold my-4`}>
    <p>Returning Guest? </p>
    <Link to='/login'><p>Please sign in below</p></Link>
</div>
<Toaster />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
