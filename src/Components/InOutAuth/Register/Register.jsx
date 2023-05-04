import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';

const Register = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')
    const [seccess, setSuccess] = useState('')

    const handleEmailChange = (event) => {
        // console.log(event.target.value);
      }
      const handlePasswordBlur = (event) => {
        // console.log(event.target.value);
      }

    const handleSubmit = (event) => {
        event.preventDefault();
         const email = event.target.email.value;
         const password = event.target.password.value;
         console.log(email, password);
    
         createUserWithEmailAndPassword(auth, email, password)
         .then(result => {
          const EPUser = result.user;
          console.log(EPUser);
          setUser(EPUser);
          setError('');
          event.target.reset();
          setSuccess('User has Created Successfully')
    
        } )
        .catch(error => {
          setError(error.message);
          setSuccess('')
        })
      }

      const handleGoogleSignIn = () => {
        signInWithPopup(auth, GoogleProvider)
        .then(result => {
          const googleUser = result.user;
          console.log(googleUser);
          setUser(googleUser);
        } )
        .catch(error => {
          console.log('error', error.message);
        })
      }
    /*--- ----------Google Login----------------*/
      const handleGitHubSignIn = () => {
        signInWithPopup(auth, GitHubProvider)
        .then(result => {
          const GithubUser = result.user;
          console.log(GithubUser);
          setUser(GithubUser);
        })
        .catch(error => {
          console.log('error', error.message);
        })
      }

    return (
        <div className="container mx-auto">
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className='text-center text-2xl font-bold mt-3'>Please Register</div>
              <div className="card-body">
                <form  onSubmit={handleSubmit} >
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
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                  <div className="text-center font-bold text-lg text-green-500 " >OR</div>
                <div className="form-control ">
                  <button className="btn btn-primary"> <a href="/login">login</a></button>
                </div>
                </form>
                  <p className="text-red-500 text-center">{error}</p>
                  <p className="text-green-400 text-center">{seccess}</p>
  
                <div className="divider m-0 p-0"></div> 
  
              </div>
                <div className="form-control px-5">
                  <button className="btn btn-success"
                  onClick={handleGoogleSignIn}>
                    Continue With Google
                    </button>
                </div>
                <div className="form-control my-2 px-5">
                  <button className="btn btn-success"
                  onClick={handleGitHubSignIn}
                  >Continue With GitHub</button>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Register;