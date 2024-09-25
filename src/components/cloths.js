import React, { useEffect, useState } from "react";
import logo from "../assets/logo.PNG";
import cart from "../assets/cart.png";
import { useNavigate } from "react-router-dom";



const Cloths = () => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://uniecommerce.onrender.com/getData");
                if (!response.ok) {
                    throw new Error("Network error");
                }
                const result = await response.json();
                setList(result)
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    return (<div className="cloths">
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" onClick={() => navigate("/")}><img className="logo" src={logo} alt="pic" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" onClick={() => navigate("/")}>Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" onClick={() => navigate("/cloths")}>Fashion</a></li>
                            <li class="nav-item"></li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" onClick={() => navigate("/electronics")}>Electronics</a></li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" onClick={() => navigate("/homeapply")}>Home&Appliances</a></li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" onClick={() => navigate("/")}>Sports</a></li>
                            <li class="nav-item">
                                <img className="logo1" src={cart} alt="pic" />
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search Products" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>

        <div className="car" >
            {list.data.map((pro, index) => {
                return (
                    <div key={index} >
                        <div className="mapdiv">
                            <img className="mapimg" src={pro.image} alt="pic" />
                            <div className="mapcontent">
                                <p className="pro-font">{pro.title}</p>
                                <p className="pro-font">{pro.price}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    </div>)
}

export default Cloths;