import { Skeleton } from 'antd';

export function LoadingState(props:{isGrid:boolean}){
    return (
     <div className={`bub-p-2 ${props.isGrid?"bub-grid":""}`}>
        <div className={`grid-col-4 grid-col-md-6 bub-mb-2 ${!props.isGrid && ("bub-grid")}`}>
          <div className="grid-col-4 grid-col-md-6 grid-col-sm-12">
          <Skeleton.Avatar
          shape='square'
          size={150} 
          active      
          />
          </div>
          <div className="grid-col-8 bub-mt-2 grid-col-md-6 grid-col-sm-12">
            <Skeleton active/>
            </div>
        </div>
        <div className={`grid-col-4 grid-col-md-6 bub-mb-2 ${!props.isGrid && ("bub-grid")}`}>
          <div className="grid-col-4 grid-col-md-6 grid-col-sm-12">
          <Skeleton.Avatar
          shape='square'
          size={150}  
          active      
          />
          </div>
          <div className="grid-col-8 bub-mt-2 grid-col-md-6 grid-col-sm-12">
            <Skeleton active/>
            </div>
        </div>
        <div className={`grid-col-4 grid-col-md-6 bub-mb-2 ${!props.isGrid && ("bub-grid")}`}>
          <div className="grid-col-4 grid-col-md-6 grid-col-sm-12">
          <Skeleton.Avatar
          shape='square'
          size={150}   
          active     
          />
          </div>
          <div className="grid-col-8 bub-mt-2 grid-col-md-6 grid-col-sm-12">
            <Skeleton style={{width:"100%"}} active/>
            </div>
        </div>
     </div>
    )
}