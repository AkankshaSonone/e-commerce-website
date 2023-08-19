import { Link } from "react-router-dom"
import { useState } from "react"
import logo from './Logo.png'

const NavBar = ({ onSearch, cartItemCount }) => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = () => {
        if (searchQuery.trim().length) {
            onSearch(searchQuery.trim())
        }
        setSearchQuery('')
    }

    return (
        <div className="wrapper">
             
                <div className="header p-1 sticky-top ">
                    <div className="grid">
                        <Link to="/" className="link">
                            <img className="brand" src={logo} alt="brand"/>  
                        </Link>
                        <div className="formContainer">
                            <form className="search  ">
                                <div className="form-control " >
                                
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={e => setSearchQuery(e.target.value)}
                                        placeholder="Search products..."
                                    />
                                </div>
                                <button type="button" className="search-btn" onClick={handleSubmit} >
                                    Search
                                </button>
                            </form>
                        </div>
                        <Link to="/cart" className="link headerCart">
                            <img className="cartImg" src="/cart.svg" alt="cart" />
                            {cartItemCount > 0 && (
                                <div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
                            )}
                        </Link>
                    </div>
                </div>
        
        </div>
    )
}

export { NavBar }