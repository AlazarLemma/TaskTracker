   const Button = ({color,text,Click,dClick}) => {


    return (
        
            <button 
        
            style={{backgroundColor:color}}
            onClick={Click}
            className='btn'>{text}</button>

    )
}
export default Button;