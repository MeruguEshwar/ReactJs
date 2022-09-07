import React, { useEffect, useState } from 'react';
import ProductDataService from '../Service/ProductDataService';
import { useNavigate } from 'react-router-dom';

function Product() {

    const [resps, setresp] = useState([]);
    const navigate = useNavigate();

    const getProductData = async () => {
        const pdata = await ProductDataService.getAllProducts();
        setresp(pdata.data);
        //console.log(pdata.data);
    }

    function addToCart(id){
        //console.log("card:"+id);
        navigate(`/addcart/${id}`);
    }

    useEffect(() => {
        getProductData();
    }, []);

   

    return (
        <div className='container-fluid mb-5'>
            <div className="row" >
                <div className="card-group">
                    {resps.map((res) => {
                        return (
                            <div className='col-3 mb-4' key={res.id}>
                                <div className="card border-dark" style={{ height: "34rem", width: "23rem" }}>
                                    <div className="card-header border-dark">
                                        <p className="card-text"><b>Category :{res.category}</b></p>
                                    </div>
                                    <img src={res.image} className="card-img-top" alt="Network Issue" id="imagecard" />
                                    <div className="card-body">
                                        <p className="card-title"> <b>Title :</b>{res.title}</p>
                                        {/* <p className="card-text"><b> Description :</b>{res.description}</p> */}
                                        <p><b>Rate :{res.rating.rate}</b></p>
                                    </div>
                                    <div className="card-footer text-muted d-flex justify-content-between border-dark ">
                                        <button className='btn btn-primary' onClick={()=>addToCart(res.id)}>Add Cart</button>
                                        <p className="card-text"><b>Count :{res.rating.count}</b></p>
                                        <p><b>Price :{res.price}</b></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Product
