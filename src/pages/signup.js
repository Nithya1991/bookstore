export default function Signup() {
    return (
      <div className="signup-container">
        <div className="signup-box">
          <div className="signup-form">
            <h2 className="text-center">Register</h2>
            <form>
              <div className="form-control">
                <label>Email</label>
                <input type="email" name="email" />
              </div>
              <div className="form-control">
                <label>Phone Number</label>
                <input type="text" name="phone_number" />
              </div>
              <div className="form-control">
                <label>Password</label>
                <input type="password" name="password" />
              </div>
              <div className="form-control">
                <button type="submit" className="submit-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}