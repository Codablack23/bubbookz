import {Skeleton} from 'antd'

export default function LoadingScreen(){
    return(
      <div className="bub-p-2">
        <Skeleton.Button
          block
          active
          size="large"
          style={{height:"200px"}}
        />
        <div className="bub-mt-3 bub-mb-3">
            <Skeleton
            active
            paragraph={{rows:3}}
            />
        </div>
        <div className="bub-grid">
            <div className="grid-col-8 grid-col-md-12">
                <div className="bub-mb-3">
                <Skeleton.Button
                block
                active
                size="large"
                style={{height:"150px"}}
                />
                </div>
                <div className="bub-mb-3">
                <Skeleton.Button
                block
                active
                size="large"
                style={{height:"150px"}}
                />
                </div>
            </div>
            <div className="grid-col-4 grid-col-md-12">
                <Skeleton
                active
                paragraph={{rows:5}}
                />
            </div>
        </div>
      </div>
        )
  }