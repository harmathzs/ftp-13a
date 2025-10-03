import React from "react";
export default class DataTable extends React.Component {
    state = {
        fileContent: []
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.fileContent.length>=1 && 
                            this.state.fileContent.map(([id, name, price])=>(
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{price}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    componentDidMount() {
        fetch(`../src/backend/local/${this.props.filename}`)
        .then(res=>{
            console.log('res', res)
            return res.text()
        })
        .then(fileContent=>{
            console.log('fileContent', fileContent)
            console.log('typeof fileContent', typeof fileContent) // string

            let lines = fileContent.split('\n')
            lines = lines.map(line=>line.trim().split(';').map(
                cellStr=>cellStr.substring(1, cellStr.length-1)
            ) )
            lines.shift()
            lines.pop()

            console.log('lines', lines)

            this.setState({fileContent: lines})
        })
        .catch(console.warn)
    }
}