const User = (props) => {
    return (
        <div className="user-card">
            <h1>{props.name}</h1>
            <h2>location:bengaluru</h2>
            <h2>contact:9019888267</h2>
        </div>
    )
}

export default User;