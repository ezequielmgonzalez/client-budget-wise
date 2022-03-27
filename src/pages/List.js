import React from "react"

function List () {
    //Initialize the state
    const [list, setList] = React.useState([])

    // Fetch the list on the first mount
    // componentDidMount() {
    //     this.getList()
    // }
    React.useEffect(() => {
        fetch("/api/getList")
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setList(res)
            })
    }, [])

    //Retrieves the list of items from the Express app
    // getList = () => {
    //     fetch("/api/getList")
    //         .then(res => res.json())
    //         .then(list => this.setState({ list }))
    // }

    return (
        <div className="App">
            <h1>List of Items</h1>
            {/* Check to see if any items are found */}
            {list.length ? (
                <div>
                    {/* Render the list of items */}
                    {list.map((item) => {
                        return(
                            <div>
                                {item}
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div>
                    <h2>No List Items Found</h2>
                </div>
            )
            }
        </div>
    )
}

export default List