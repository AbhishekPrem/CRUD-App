import React, { Component } from 'react'

class HeaderComponent extends Component {
    state: {}
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://google.com" className="navbar-brand">Employee Management App</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent