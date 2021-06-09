export default function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-formgroup">
                    <h2>Login</h2>
                    <div className="form-control">
                        <label>Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className="form-control">
                        <label>Password</label>
                        <input type="password" name="password" />
                    </div>
                    <div className="form-control">
                        <button type="submit" className="submit-button">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}