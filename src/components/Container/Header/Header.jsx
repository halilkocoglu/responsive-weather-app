import "./header.css"

function Header () {

    return (
        <div className="header-container">
            <div className="header-container_logo">
                WeatherApp
            </div>
            <div className="header-conatiner_search">
                <form action="">
                    <input className="input" type="text"  />
                    <a>Search</a>
                </form>
            </div>
        </div>
    )
}


export default Header;