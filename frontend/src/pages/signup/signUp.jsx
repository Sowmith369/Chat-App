 import GenderCheckbox from "./GenderCheckbox.jsx"
const signUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <span className='text-teal-500 font-thin text-5xl p-4'> ChatApp</span>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300 pb-3'>
                Sign Up 
            </h1>

            <form>
                <div className="pb-3">
                    <label className='label'>
                        <span className='text-base label-text'>Full Name</span>
                    </label>
                    <input type='text' placeholder='Full Name' className='w-full input input-bordered  h-10' />
                </div>

                <div className="pb-3">
                    <label className='label'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type='text' placeholder='Username' className='w-full input input-bordered h-10' />
                </div>

                <div className="pb-3">
                    <label className='label'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input
                        type='password'
                        placeholder='Enter Password'
                        className='w-full input input-bordered h-10'
                    />
                </div>

                <div className="pb-3"> 
                    <label className='label'>
                        <span className='text-base label-text'>Confirm Password</span>
                    </label>
                    <input
                        type='password'
                        placeholder='Confirm Password'
                        className='w-full input input-bordered h-10'
                    />
                </div>

                <GenderCheckbox />

                <a className='text-sm hover:underline hover:text-teal-500 mt-2 inline-block p-1' href='#'>
                    Already have an account?
                </a>

                <div>
                <button className="btn btn-block btn-sm mt-2 btn-outline btn-accent">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default signUp
