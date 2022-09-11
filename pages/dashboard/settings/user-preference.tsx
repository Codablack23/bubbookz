import DashboardSettingsLayout from "~/components/layout/dashboard/SettingsLayout";
import SelectBookCategory from '~/components/widgets/dashboard/selectBookCategory'
export default function SettingsHomePage(){
    return(
        <DashboardSettingsLayout page={"user-preference"}>
            <div className="container-small">
             <p className="small-22 bub-text-accent fw-bold">User Preference</p>
             <p className="small-14 bub-mt-1">We use your favourite genres to make better book recommendations for you</p>
            <SelectBookCategory/>
            </div>
        </DashboardSettingsLayout>
    )
}