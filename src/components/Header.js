import { prototype } from 'express-session/session/cookie';
import Button from "./Button"



const Header = (props) => {


   const btnclick =(e)=>{
          console.log("Click");
   }


    return (
        <header className='header'>

                <h1>{props.title}</h1>
                <Button color="red" text='Add' Click={btnclick}></Button>
                
                
        </header>
    )
}

Header.defaultProps={
   title:"Task Tracker",
}



export default Header;
