import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RegisterService from "../Service/RegisterService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgotAuth() {
  const [id, setId] = useState();
  const [email, setemail] = useState();
  const [pass, setpass] = useState();

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    RegisterService.getUser(params.id).then((res) => {
      setId(res.data.id);
      setemail(res.data.email);
      console.log("auth id is:" + JSON.stringify(res.data));
    });
  }, []);

  const update = (e) => {
    e.preventDefault();
    RegisterService.UpdateUser(id, { id, email, pass }).then((res) => {
      console.log(res.data);

      toast.success("Password changed successfully !", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1900,
        theme: "dark",
      });

    }); setTimeout(function () {
      navigate("/prod");
    }, 3000);

  };

  return (
    <div>
      <div
        className="card text-bg-light mb-3"
        style={{ maxWidth: "30rem" }}
        id="forgotAuth"
      >
        <div className="card-header text-center">Forgot Password</div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Email:
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter your Email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Enter Your New Pass:
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter your Pass"
              value={pass}
              onChange={(e) => setpass(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Enter Your Conform Pass:
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter your Conform Pass"
              value={pass}
              onChange={(e) => setpass(e.target.value)}
            />
          </div>
          <div className="col-12 d-flex justify-content-between">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => update(e)}
            >
              Update
            </button>
            <ToastContainer />
          </div>
        </div>
        <div className="card-footer text-muted text-center">
          Design & Developed By Eshwar Merugu
        </div>
      </div>
    </div>
  );
}

export default ForgotAuth;
