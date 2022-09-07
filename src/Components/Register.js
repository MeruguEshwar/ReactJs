import React, { useState } from 'react'
import RegisterSerivce from '../Service/RegisterService';

function Register() {

    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [pass, setPass] = useState();
    const [cpass, setCpass] = useState();

    let newUser = {
        email: email,
        name: name,
        pass: pass,
        cpass: cpass
    }

    const [larr, setlarr] = useState(newUser);

    function register() {
        alert("register");
        createuserDetails();
    }


    const createuserDetails = () => {
        RegisterSerivce.createuser(newUser).then((res)=>{
            console.log("user list is:"+JSON.stringify(res.data));
        })
    }

    return (
        <div className='container'>
            <div className="card text-bg-light mb-3" style={{ maxWidth: "35rem" }} id="registercard">
                <div className="card-header text-center">Register</div>
                <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">Enter your Email:</label>
                        <input type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your Email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Enter Your name:</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Enter Your Pass:</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Enter your Pass" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Enter Your ConformPass:</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" value={cpass} onChange={(e) => setCpass(e.target.value)} placeholder="Enter your ConformPass" />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={register}>Sign in</button>
                    </div>
                </div>
                <div className="card-footer text-muted text-center">
                    Design & Developed By Eshwar Merugu
                </div>
            </div>

        </div>
    )
}

export default Register
