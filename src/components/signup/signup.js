import React from "react";

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9~]+(?:\.[a-zA-Z0-9]+)*$/);
const formValid = formErrors => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });
};

class Signup extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            username: null,
            email: null,
            password: null,
            formErrors: {
                username: "",
                email: "",
                password: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        if(formValid(this.state.formErrors)){
            console.log(`
                Username: ${this.state.username}
                Email: ${this.state.email}
                Password: ${this.state.email}
                `
            );
        }
        else{
            console.error("form Invalid - display error message");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'username':
                formErrors.username = 
                value.length < 6 && value.length > 0 
                ? 'Minumum 6 charactor required' 
                : "";
            break;
            case 'email':
                formErrors.email = 
                value.length < 2 && value.length > 0 
                ? "Email Required" 
                : "";
            break;
            case 'password':
                formErrors.password = 
                value.length < 6 && value.length > 0 
                ? 'Minumum 6 charactor required' 
                : "";
            break;
        }

        this.setState({formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {
        const { formErrors } = this.state;
        return(
            <div>
                <div className="container">
                    <div className="row"> 
                        <div className="col-sm-6">
                            <h3>Create Form</h3>
                            <form onSubmit={this.handleSubmit} noValidate>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" name="username" className="form-control" onChange={this.handleChange} />
                                    {formErrors.username.length > 0 && (
                                        <span className="errorMessage">{formErrors.username}</span>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label>E-Mail</label>
                                    <input type="email" name="email" className="form-control" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="text" name="password" className="form-control" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Re Enter Password</label>
                                    <input type="text" name="rpassword" className="form-control" onChange={this.handleChange} />
                                </div>
                                <div className="form-group text-right">
                                    <button className="btn btn-primary">Sign In</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;