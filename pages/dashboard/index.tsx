import Button from  '~/components/layout/user/buttons'
import Link from 'next/link'
import SelectAccountType from '~/components/widgets/dashboard/accountType'
import SelectBookGenre from '~/components/widgets/dashboard/bookGenre'
import LevelMenu from '~/components/widgets/dashboard/LevelMenu'
import ShelfBook from '~/components/widgets/dashboard/ShelfBook'
import DashboardLayout from "~/components/layout/dashboard/DashboardLayout"


export default function DashBoard(){
    const levels:number[] =[
        100,200,300,400,500,600
    ]
    return (
    // //   <SelectAccountType/>
    // <SelectBookGenre/>
    <DashboardLayout activePage={"level"}>
        <header className="bub__level-page-header">
         <div className="bub__level-mobile">
             <select className="bub__level-select">
                 <option value="">Select Level</option>
              {levels.map(level=>(
                  <option key={level} value={level}>{level}</option>
              ))}
             </select>
             <select className="bub__level-select">
             <option value="">Select Semester</option>
             <option value="1">1st Semester</option>
             <option value="2">2nd Semester</option>
             </select>
         </div>
        <h1 className="fw-bold text-accent-1 text-center w-100">
            Hello! your Bookshelf for 1st semsester (level 100)
        </h1><br />
        </header>
       <div className="bub__dashboard-page-content">
         <LevelMenu/>
         <div className="bub__book-shelf-wrapper">
         <ShelfBook/><br />
         <ShelfBook/><br />
         <ShelfBook/>
        </div>
     </div>
    </DashboardLayout>
    )
}
