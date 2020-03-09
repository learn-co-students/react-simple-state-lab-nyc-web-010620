import React from 'react'

class Cell extends React.Component{
    constructor(props){
        super()

        //console.log(props)
        this.state = {
            color: props.value
        }
    }

    handleClick = () => {
        this.setState({
            color: "#333"
        })
    }

    render(){
        //console.log(this.state)
        return(
            <div className="cell" onClick={this.handleClick} style={{backgroundColor: this.state.color}}>hi</div>

        )
    }


}

export default Cell