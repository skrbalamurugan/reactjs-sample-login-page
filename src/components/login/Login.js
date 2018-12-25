import React from "react";

class Login extends React.Component{
    render() {
        return(
            <div className="container">
                <div className="row">
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="col-sm-6">
                            <h3>Login Form</h3>
                            <div className="form-group">
                                <label>E-Mail</label>
                                <input type="email" name="email" className="form-control" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" className="form-control"/>
                            </div>
                            <div className="form-group text-right">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;