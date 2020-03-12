import React from 'react'

class Cell extends React.Component {
    
    constructor(props){
        super()
        
        this.state = {
            color: props.value
        }
    }

    updateHex = () => {
        this.setState({
            color: "#333"
        })
    }

    render(){
        return (
            <div className="cell" onClick={this.updateHex} style={{backgroundColor: this.state.color}}> 
                <p>print this</p>
            </div>
        )
    }

}

export default Cell