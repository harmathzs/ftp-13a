import { useEffect, useState } from "react"

export default function FunctionComponent(props) {
    const [state, setState] = useState(({})) // this.setState(({}))

    const componentDidMount = ()=>
        {
            console.log('componentDidMount')
            setState({number: 0})
        }
    const componentDidUnmount = ()=>console.log('componentDidUnmount')
    const componentDidUpdate = (prevProps, prevState) => {
        console.log('componentDidUpdate prevProps, props', prevProps, props)
        console.log('componentDidUpdate prevState, state', prevState, state)
    }

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
    const handleIncClick = () => setState(prevState=>({...prevState, number: prevState.number+1}))

    useEffect( ()=>{
        componentDidMount()
    } , [])

    return (
        <div className="card">
            <p><button onClick={handleIncClick}>Increase Number</button></p>
            <p>Number: {state.number}</p>
            <p><button onClick={handleLogClick}>Log props, state</button></p>
        </div>
    )
}