import {FC} from 'react'

export default function ProfileForm(){
    return (
    <form action="" className="bub__profile-form bub-grid">
        <div className="grid-col-6 grid-col-sm-12">
            <label htmlFor="" className="input-label fw-bold">First Name</label>
            <div className="input-group">
                <input type="text" className="w-95" />
            </div>
        </div>
        <div className="grid-col-6 grid-col-sm-12">
            <label htmlFor="" className="input-label fw-bold">Last Name</label>
            <div className="input-group">
                <input type="text" className="w-95" />
            </div>
        </div>

        <div className="grid-col-6 grid-col-sm-12">
            <label htmlFor="" className="input-label fw-bold">Email</label>
            <div className="input-group">
                <input type="email" className="w-95" />
            </div>
        </div>

        <div className="grid-col-6 grid-col-sm-12">
            <label htmlFor="" className="input-label fw-bold">Phone Number</label>
            <div className="input-group">
                <div className="side side-left w-25">
                <select name="" id="" className="w-100 text-accent-1">
                    <option value="+234">+234</option>
                </select>
                </div>
                <input type="phone" />
            </div>
        </div>
        <div className="grid-col-12">
        <button className="btn-small w-100 bg-theme text-white">Save Changes</button>
        </div>
       
    </form>
    )
}