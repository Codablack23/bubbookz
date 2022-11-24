type ButtonType = "button"|"submit"|"reset"
interface ButtonProps {
    height?:string|number,
    color?:{
        text:string,
        bg:string
    },
    callBack?:any,
    children:JSX.Element | string,
    custom_styles?:{},
    border?:{
        isExist:boolean,
        color:string
    },
    type?:ButtonType | string
}


export default function Button(props:ButtonProps){
    const {height,color,callBack,children,custom_styles,border,type} = props
    return (
        <button className="form--btn"
        type={type as ButtonType}
        style={
            {
                height,
                color:color.text,
                backgroundColor:color.bg,
                ...custom_styles,
                border:border.isExist?`1px solid ${border.color}`:'none',
                
            }
        }
        onClick={callBack}
        >
          {children}
        </button>
    )
}