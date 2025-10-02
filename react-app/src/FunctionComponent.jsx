export default function FunctionComponent(props) {
    const handleLogClick = ()=>{
        try {
            console.log('handleLogClick props', props)
            console.log('handleLogClick state', state)
        } catch(e) {
            console.warn(e)
        }
    }

    return (
        <div className="card">
            <p><button>Increase Number</button></p>
            <p>Number: {0}</p>
            <p><button onClick={handleLogClick}>Log props, state</button></p>
        </div>
    )
}