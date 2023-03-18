

import './button.component.style.scss'



const Button_Type_Classes = {
    google :'google-sign-in',
    inverted:'inverted'
}
const Button = ({children,buttonType,...otherprops})=>{
    return(
    <button className={`button-container ${Button_Type_Classes[buttonType]}`} {...otherprops}>
          {children}
        </button>
    )
}
export default Button;