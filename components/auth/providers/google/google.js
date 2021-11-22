import Image from 'next/image';
import { ProviderButton } from "../../../ui/button";
// or use absolute path. We have the jsconfig.json file that sets the default absolute path to root.
// import {ProviderButton} from "components/ui/buttons"
import google from "./google.png";


// auth with Google
function GoogleProvider({label, ...props}) { 
    return(
    <ProviderButton> 
        <Image 
            src={google} 
            alt="google logo"
            layout="fixed"
            width={20}
            height={20}
            quality={60}
        />
        <span>{label||"Sign up with Google"}</span> 
    </ProviderButton>
    )
}

export default GoogleProvider