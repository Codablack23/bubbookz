import DashboardSettingsLayout from "~/components/layout/dashboard/SettingsLayout";
import ProfileForm from '~/components/widgets/dashboard/ProfileForm'
import PasswordForm from '~/components/widgets/dashboard/PasswordForm'

export default function SettingsHomePage(){
    return(
        <DashboardSettingsLayout page={"user-info"}>
          <div className="bub__settings-home container-small">
                <header className="flex justify-content-space-between align-items-center">
                    <p className="bub-text-accent fw-bold">User Preferrences</p>
                    <p className="small-16 text-disabled">Account type: Student</p>
                </header><br /><br />
                <p>Profile Photo</p><br />

                <div className="bub__profile flex align-items-center">
                 <div className="bub__profile-img">
                    <img src="/images/dashboard-profile.svg" alt="" className="img-fluid" />
                 </div>
                 <div className="bub-ml-5">
                    <label htmlFor="upload-img" className="btn-small bg-theme text-white card">Upload Photo</label><br />
                    <input type="file" id="upload-img" style={{width:0}} /><br />
                    <p className="small-14">Maximum size of 1MB. JPG, GIF, or PNG.</p>
                 </div>
                </div><br />

                <ProfileForm/><br /><br />

                <p className="text-accent-1 fw-bold">Change Password</p><br />
                <PasswordForm/>
            </div>  
        </DashboardSettingsLayout>
    )
}