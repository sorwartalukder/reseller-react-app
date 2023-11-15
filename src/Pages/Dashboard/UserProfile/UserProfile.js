import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const UserProfile = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }
    return (
        <div className='min-h-screen py-14 flex justify-center items-center' >
            <div>
                <form>
                    <div className=''>
                        <div className="avatar online">
                            <div className="w-40 rounded-full">
                                <img
                                    className='bg-slate-900 p-2 rounded-full'
                                    src={user?.photoURL} alt=""
                                />
                            </div>
                        </div>

                        <div>
                            <h5 className='text-xl font-bold'>{user?.displayName}</h5>
                        </div>

                    </div>

                </form>
                <button
                    onClick={handleLogOut}
                    className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-8 hover:shadow-secondary hover:shadow-md">Log out</button>
            </div>
        </div>
    );
};

export default UserProfile;