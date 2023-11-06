import { useState } from "react"


const Manage = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [allData, setAllData] = useState([]);

    const saveChanges = (e) => {
        e.preventDefault(e);

        let changesDetails = { firstName, lastName, email, address, password, newPassword, confirmPassword }
        setAllData([...allData, changesDetails])

        console.log(allData)

        
    }

    const cancel = () => {
        if (window.confirm('Are you sure you want to cancel registration?')) {
            setAllData({
                firstName: '',
                lastName: '',
                email: '',
                address:'',
                password: '',
                newPassword: '',
                confirmNewPassword: '',
            });
        }
        console.log("cancel");
    }

    return (
        <div className="">
            <div className="container flex flex-col md:flex-row mx-auto mb-10">
                <div className="mx-auto py-8 px-2 w-[350px] md:text-center">
                    <div>
                        <h2 className="font-semibold">Manage My Account</h2>
                        <ul className="px-8 text-gray-500 leading-6 text-[14px]">
                            <a href="#">
                                <li className="hover:text-red-500">My Profile</li>
                            </a>

                            <a href="#">
                                <li className="hover:text-red-500">Address Back</li>
                            </a>

                            <a href="#">
                                <li className="hover:text-red-500">My Payment Options</li>
                            </a>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-semibold mt-3">My Orders</h2>
                        <ul className="px-8 text-gray-500 leading-6 text-[14px]">
                            <a href="#">
                                <li className="hover:text-red-500">My Returns</li>
                            </a>

                            <a href="#">
                                <li className="hover:text-red-500">My Cancellations</li>
                            </a>
                        </ul>
                    </div>

                    <div>
                        <h2 className="font-semibold mt-3">My Wishlist</h2>
                    </div>
                </div>

{/* edit profile */}
                <div className="border-2 rounded-sm shadow-xl mx-16 mt-10 pt-10 pb-10">
                    <div className="mx-16">
                        <div>
                            <h2 className="text-red-500">Edit Your Profile</h2>
                        </div>

                        <div className="flex gap-10 flex-wrap my-1">
                            <div className="mt-2">
                                <label className="block">First Name</label>
                                <input onChange={(e) => setFirstName(e.target.value)} type="text" className="border rounded py-2 px-3 w-60 outline-none" placeholder="Bammy" defaultValue={firstName} />
                            </div>

                            <div className="mt-2">
                                <label className="block">Last Name</label>
                                <input onChange={(e) => setLastName(e.target.value)} type="text" className="border rounded py-2 px-3 w-60 outline-none" placeholder="Toye" defaultValue={lastName} />
                            </div>

                            <div>
                                <label className="block">Email</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" className="border rounded py-2 px-3 w-60 outline-none" placeholder="whatevermail@gmail.com" defaultValue={email} />
                            </div>

                            <div>
                                <label className="block">Address</label>
                                <input onChange={(e) => setAddress(e.target.value)} type="text" className="border rounded py-2 px-3 w-60 outline-none" placeholder="Kingston, 5236, United State" defaultValue={address} />
                            </div>
                        </div>

                        <div className="mt-8">
                            <label>Password Changes</label> <br />
                            <input onChange={(e) => setPassword(e.target.value)} type="password" className="border rounded py-2 px-3 w-full mt-1 outline-none" placeholder="Current Password" /> <br />
                            <input onChange={(e) => setNewPassword(e.target.value)} type="password" className="border rounded py-2 px-3 w-full mt-3 outline-none" placeholder="New Password" required /> <br />
                            <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="border rounded py-2 px-3 w-full mt-3 outline-none" placeholder="Confirm New Password" required />
                        </div>
                    </div>

                    <div className="mt-5 flex justify-end me-16">
                        <button onClick={cancel} className="mx-4 py-2 px-10 sm:px-5 border rounded bg-white-100 hover:bg-red-500">Cancel</button>
                        <button onClick={saveChanges} className="py-2 px-10 sm:px-5 border rounded bg-red-600 text-white"> Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manage