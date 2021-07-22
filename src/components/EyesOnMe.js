// Code EyesOnMe Component Here
function onBlur(){
    return(
        console.log('Hey! Eyes on me!')
    )
}

function onFocus(){
    return(
        console.log('Good!')
    )
}

function EyesOnMe(){
    return(
        <button onBlur={onBlur} onFocus={onFocus}>
            "Eyes on me"
        </button>
    )
}

export default EyesOnMe