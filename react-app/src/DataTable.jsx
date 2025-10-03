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
                        <tr>
                            <td>1</td>
                            <td>Cerbona</td>
                            <td>499</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    componentDidMount() {
        fetch('../src/backend/local/mueslis.csv')
        .then(res=>{
            console.log('res', res)
            return res.text()
        })
        .then(fileContent=>{
            console.log('fileContent', fileContent)
            this.setState({fileContent})
        })
        .catch(console.warn)
    }
}