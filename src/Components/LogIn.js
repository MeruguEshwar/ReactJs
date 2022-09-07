import React, { useEffect, useState } from 'react'
import RegisterService from '../Service/RegisterService'
import { useNavigate } from 'react-router-dom';

function LogIn() {

    const [email, setemail] = useState();
    const [id, setid] = useState();
    const [pass, setpass] = useState();

    let navigate = useNavigate();

    const [luser, setluser] = useState([]);

    const getuserdetails = async (e) => {
        const userdata = await RegisterService.getuser();
        setluser(userdata.data);
        console.log("User list is:" + JSON.stringify(luser));
    }

    useEffect(() => {
        getuserdetails();
    }, []);

    function login() {
        luser.find((std) => {
            console.log("map data:" + JSON.stringify(std));
            if (std.email == email && std.pass == pass) {
                navigate("/prod");
                alert("login success..");
            }
        })
    }

    function forgot() {
        navigate("/forgot");
    }


    return (
        <div className='container'>
            <div className="card text-bg-light mb-3" style={{ maxWidth: "35rem" }} id="logincard">
                <div className="card-header text-center">Login</div>
                <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Enter your Email:</label>
                        <input type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            placeholder="Enter your Email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Enter Your Pass:</label>
                        <input type="text"
                            className="form-control"
                            id="formGroupExampleInput2"
                            placeholder="Enter your Pass"
                            value={pass}
                            onChange={(e) => setpass(e.target.value)}
                        />
                    </div>
                    <div className="col-12 d-flex justify-content-between">
                        <button type="submit" className="btn btn-primary" onClick={login}>Sign in</button>
                        <button className='btn btn-primary' onClick={forgot}>Forgot Password</button>
                    </div>
                </div>
                <div className="card-footer text-muted text-center">
                    Design & Developed By Eshwar Merugu
                </div>
            </div>
        </div>
    )
}

export default LogIn
