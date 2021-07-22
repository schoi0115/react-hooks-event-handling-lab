// Code Keypad Component Here
function Keypad(){
    function enter(){
        console.log("Entering password...")

    }
    
    return(
        <input type="password" onChange={enter}/>
    )
}

export default Keypad