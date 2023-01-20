import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error) {
        this.setState({hasState: true})
        console.log('Something went wrong.!')
    }

    render() {
        if(this.state.hasError) {
            return(
                <p>Something went wrong.!</p>
            )
        }
        return(this.props.children)
    }
}

export default ErrorBoundary

// componentDidCatch() =? triggers whenever one of the child components throws an error
