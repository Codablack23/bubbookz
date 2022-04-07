export default function Button({height,color,callBack,children,custom_styles,border,type}){
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