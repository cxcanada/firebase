import Button from "../components/ui/button";
import GoogleProvider from "components/auth/providers/google";

function Home(){

  const props = {
    bgcolor="tomato", color="white"
  }

  return (
    <div>
      <Button bgcolor="tomato" color="white">Sign up with firebase</Button>
      <Button bgcolor="blue" color="white">Sign up with something</Button>
      <GoogleProvider></GoogleProvider>
    </div>
  )
}

function Jim(props) {
  function handleClick(e){
    console.log(e.currentTarget)
  }
    return (
      <div>
        <button onClick={handleClick}>jim</button>
      </div>
    )
  }
  
  export default Jim