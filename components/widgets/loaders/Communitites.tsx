import { Skeleton } from "antd";

function LoadingState():JSX.Element{
    return(
    <div className='w-65 w-md-100 min-vh-50'>
      <div className="bub-grid bub-mb-2">
           <div className="grid-col-3 grid-col-md-12">
            <Skeleton.Avatar
            size={200}
           shape="square"
           active
           className='br'
           />
           </div>
           <div className='grid-col-8 grid-col-md-12 bub-pl-4 bub-p-2'>
            <div className="flex justify-content-flex-end">
              <Skeleton.Button/>
            </div>
          <Skeleton active/>
         </div>
      </div>
      <div className="bub-grid bub-mb-2">
           <div className="grid-col-3 grid-col-md-12">
            <Skeleton.Avatar
            size={200}
           shape="square"
           active
           className='br'
           />
           </div>
           <div className='grid-col-8 grid-col-md-12 bub-pl-4 bub-p-2'>
           <div className="flex justify-content-flex-end">
              <Skeleton.Button/>
            </div>
          <Skeleton active/>
         </div>
      </div>
    </div>
    )
  }

  export default LoadingState