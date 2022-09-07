import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import ProductDataService from '../Service/ProductDataService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddToCart() {

    const [id, setId] = useState();
    const [title, setTitle] = useState();
    const [price, setprice] = useState();
    const [category, setcategory] = useState();
    const [image, setimage] = useState();

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        ProductDataService.getProduct(params.id).then(res => {
            setId(res.data.id);
            setTitle(res.data.title);
            setprice(res.data.price);
            setcategory(res.data.category);
            setimage(res.data.image);
            console.log("Id is" + res.data.title);
        })
    }, []);

    const notify = () => {
        toast.success("Order placed successfully !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1900,
            theme: "dark",
        });
        setTimeout(function () {
            navigate("/prod");
        }, 3000);
    };

    return (
        <div className='container-fluid' id="buybutton">
            <div className='row'>
                <div className="col-sm-4 ms-5" >
                    <div className="card-group">
                        <div className='col-3'>
                            <div className="card border-primary" style={{ height: "33rem", width: "24rem" }}>
                                <div className="card-header border-primary">
                                    <p className="card-text">Category :{category}</p>
                                </div>
                                <img src={image} className="card-img-top" alt="Network Issue" id="imagecard" />
                                <div className="card-body">
                                    <p className="card-title">Title :{title}</p>
                                    <p>Rate :{price}</p>
                                </div>
                                <div className="card-footer text-muted d-flex justify-content-between border-primary">
                                    <span></span>
                                    <button className='btn btn-primary' data-toggle="collapse" data-target="#demo">Buy</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-sm-8 collapse' id="demo">
                    <div className="card text-bg-light border-primary" style={{ height: "33rem" }}>
                        <div className="card-header">Payment GateWay</div>
                        <div className="card-body">
                            <form >
                                <div className="mb-3">
                                    <label htmlFor="Email address" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Phone Number" className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                    <label htmlFor="floatingTextarea2">Adress</label>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Amont" className="form-label">Amont</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" value={price} />
                                </div>
                                {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                            </form>
                            <ToastContainer />
                            <button onClick={notify} className="btn btn-primary">Submit!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddToCart
