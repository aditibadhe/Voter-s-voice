import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="wrapper">
        <div className="con2">
          <form
            id="Login"
            method="POST"
            action=""
          >
            
            <div className="form-group ">
              <label style={{ padding: "10px" }}>Full Name</label>
              <input
                name="username"
                className="form-control"
                required
                type="text"
                placeholder="Enter Full Name"
              />
            </div>

            <div className="form-group ">
              <label style={{ padding: "10px" }}>Aadhar Card Number :</label>
              <input
                name="aadharcard"
                className="form-control"
                required
                type="text"
                placeholder="Enter Aadhar card Number "
              />
            </div>

            <div className="form-group ">
              <label style={{ padding: "10px" }}>Voter Id Number :</label>
              <input
                name="voterid"
                className="form-control"
                type="text"
                
                placeholder="Enter Voter Id Number "
                required
              />
            </div>
           
            <br />
            <button className="btn btn-block" type="submit">
              Submit
            </button>
            <br />
            
          </form>
        </div>
      </div>
  );
}

export default App;
