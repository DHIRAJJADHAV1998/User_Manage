import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";


const DeleteUser = () => {
  //1.input lai store garnu parxa
  //let's make object
  let navigate = useNavigate();
  useEffect(()=>{
    before();
  },[])
  const{id}=useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    //spread operator (since we are giving only name field)
    //new update will keep on adding
    setUser({ ...user, [e.target.name]: e.target.value });
    //check in components
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    //we are sending user so User
    await axios.delete(`http://localhost:8080/deleteUser/${id}`);
    navigate("/");
  };

  const before=async()=>{
    const res=await axios.get(`http://localhost:8080/getUser/${id}`)
    setUser(res.data);
  }

  return (
    <div className="container">
      <div className="row">
        {/*col-md-6 : colums of medium size with 6 span */}
        <div
          className={
            "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"
          }
        >
          <h2 className={"text-center m-4"}>Update User</h2>

          <form>
            <div className={"mb-3"}>
              <label htmlFor={"Name"} className={"form-label"}>
                Name
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter your name"}
                name={"name"}
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className={"mb-3"}>
              <label htmlFor={"Name"} className={"form-label"}>
                UserName
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter your username"}
                name={"username"}
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className={"mb-3"}>
              <label htmlFor={"Name"} className={"form-label"}>
                Email
              </label>
              <input
                type={"text"}
                className={"form-control"}
                placeholder={"Enter your email"}
                name={"email"}
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button type={"submit"} className={"btn btn-outline-primary"} onClick={onSubmit}>
              Delete
            </button>

            <Link className={"btn btn-outline-danger mx-2"} to={"/"}>Cancel</Link>

          </form>
        </div>
      </div>
    </div>
  );
};
export default DeleteUser;