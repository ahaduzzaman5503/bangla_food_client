import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {

  const {user, createUser} = useContext(AuthContex);
  console.log(user, createUser);
  const navigate = useNavigate()

    // const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const [seccess, setSuccess] = useState('')

    const handleEmailChange = (event) => {
        // console.log(event.target.value);
      }
      const handlePasswordBlur = (event) => {
        // console.log(event.target.value);
      }
      const handlePhotoUrl = (event) => {
        console.log(event.target.value);
      }

    const handleRegister = (event) => {
        event.preventDefault();
         const name = event.target.name.value;
         const email = event.target.email.value;
         const password = event.target.password.value;
         const photourl = event.target.photourl.value;
    
         console.log(name, email, password, photourl);

         createUser(email, password)
         .then(result => {
          const EPUser = result.user;
          updateProfile(EPUser, {
            displayName: name, photoURL: photourl 
          })
          console.log(EPUser);
          // setUser(EPUser);
          setError('');
          event.target.reset();
          setSuccess('User has Created Successfully')
          navigate('/login')
        } )
        .catch(error => {
          setError(error.message);
          setSuccess('')
        })
      }


    return (
        <div className="container mx-auto">
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className='text-center text-2xl font-bold mt-3'>Please Register</div>
              <form onSubmit={handleRegister} className="card-body">
            
  {/* --- ----------Name Field---------------- */}
  <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-xl">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    id="name"
                    required
                  />
                </div>

  {/* --- ----------Email Field---------------- */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-xl">Email</span>
                  </label>
                  <input
                    onChange={handleEmailChange}
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    id="email"
                    required
                  />
                </div>
  {/* --- ----------PassWord Field---------------- */}
  
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-xl">Password</span>
                  </label>
                  <input
                    onBlur={handlePasswordBlur}
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    id="password"
                    required
                  />
                  <label className="label font">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold text-xl">Photo Url</span>
                  </label>
                  <input
                    onChange={handlePhotoUrl}
                    type="text"
                    placeholder="photo url"
                    className="input input-bordered"
                    id="photourl"
                    required
                  />
                </div>


                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>

                  <p className="text-red-500 text-center">{error}</p>
                  <p className="text-green-400 text-center">{seccess}</p>
  
              </form>

              <div className='flex items-center gap-2 text-center mx-10'>
                  <h1>Already have an Accaunt?</h1>
                  <button className='btn btn-secondary'>
                    <Link to="/login">login</Link> 
                  </button>
                </div>

            </div>
          </div>
        </div>
    );
};

export default Register;