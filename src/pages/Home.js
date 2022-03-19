import React from "react"
import { Link } from "react-router-dom"

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>BudgetWise Home</h1>
                {/* Link to List.js */}
                <Link to={"./list"}>
                    <button variant="raised">
                        My List
                    </button>
                </Link>
            </div>
        )
    }
}

export default Home