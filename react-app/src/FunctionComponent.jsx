import { useState } from "react"

export default function FunctionComponent(props) {
    const [state, setState] = useState(({})) // this.setState(({}))

    const handleLogClick = ()=>{
        const {fruit, callback, children} = props
        callback('handleLogClick call')

        try {
            console.log('handleLogClick props', props) // this.props
            console.log('handleLogClick state', state) // this.state
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