   const Button = ({color,text,Click}) => {


    return (
        
            <button 
        
            style={{backgroundColor:color}}
            onClick={Click}
            className='btn'>Add</button>

    )
}
export default Button;