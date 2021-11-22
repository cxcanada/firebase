import {ButtonBase} from "./styles"


// destructure the props(properties), taking children, bgcolor color out of props object
function Button({children, color, bgcolor, ...props}){
    return (
    <ButtonBase bgcolor={bgcolor}>
        {children}
    </ButtonBase>)
}

export default Button