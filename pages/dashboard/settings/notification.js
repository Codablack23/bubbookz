import DashboardSettingsLayout from "../../../components/layout/dashboard/SettingsLayout";

export default function SettingsHomePage(){
    return(
        <DashboardSettingsLayout page={"notification"}>
            <div className=" container-small">
            <p className="bub-text-accent small-22 bub-mb-1 fw-bold">Notifications Settings</p>
                <p className="small-16">What notifications you recieve</p>
                <ul className="bub__notification-list bub-mt-2">
                <li>
                    <input type="checkbox" />
                    <span className="bub-ml-1">Community</span>
                </li>
                <li>
                    <input type="checkbox" />
                    <span className="bub-ml-1">Notify me when someone like or reply to my comment</span>
                </li>
                <li>
                    <input type="checkbox" />
                    <span className="bub-ml-1">Email me about the events I have joined</span>
                </li>
                <li>
                    <input type="checkbox" />
                    <span className="bub-ml-1">Email me about new book arrivals</span>
                </li>
                </ul>
            </div>
        </DashboardSettingsLayout>
    )
}