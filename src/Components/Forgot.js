import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RegisterService from "../Service/RegisterService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Forgot() {
  const [id, setid] = useState();
  const [email, setEmail] = useState();
  const [fdata, setfdata] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  const getuserdata = async () => {
    const userdata = await RegisterService.getuser();
    setfdata(userdata.data);
    console.log("updated data is:" + fdata);
  };

  useEffect(() => {
    getuserdata();
  }, []);

  const update = (id) => {
    fdata.map((std) => {
      if (std.email == email) {
        setid(std.id);
        toast.success("Email verified successfully !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1900,
          theme: "dark",
        });
        setTimeout(function () {
          navigate(`/forgotauth/${std.id}`);
        }, 3000);
      }
    });
  };

  return (
    <div className="container">
      <div
        className="card text-bg-light mb-3"
        style={{ maxWidth: "30rem" }}
        id="forgotcard"
      >
        <div className="card-header text-center">Forgot Password</div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Enter your Email:
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
            />
          </div>

          <ToastContainer />
          {/* {fdata.filter((res) => {})} */}

          <div className="col-12 d-flex justify-content-between">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => update(`${id}`)}
            >
              Verify Email
            </button>
          </div>
        </div>
        <div className="card-footer text-muted text-center">
          Design & Developed By Eshwar Merugu
        </div>
      </div>
    </div>
  );
}

export default Forgot;
