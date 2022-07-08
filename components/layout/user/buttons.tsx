interface ButtonProps {
    height?:string|number,
    color?:string,
    callBack?:Function,
    children:string,
    custom_styles?:{},
    border?:{},
    type?:string
}


export default function Button<ButtonProps>(props){
    const {height,color,callBack,children,custom_styles,border,type} = props
    return (
        <button className="form--btn"
        type={type}
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