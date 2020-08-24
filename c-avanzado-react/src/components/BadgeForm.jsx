import React from 'react';


class BadgeForm extends React.Component {

    // en los formularios es importante inicializar el estado con una array vacio 
    // esto se pasó a badgeNew
    // state = {
    //     // jobTitle: 'Designer',
    // };

// se borró porque el objeto se llamará en el padre
    // handleChange = e =>{
    //     // console.log({ 
    //     //     name: e.target.name,
    //     //     values: e.target.value });
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    // }

    handleClick = e =>{
        console.log('Button was click');
    }

    handleSubmit = e =>{
        e.preventDefault();
        console.log("form was submited");
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <h1>
                    New Attendant
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" 
                            name="firstName" 
                            className="form-control"
                            onChange={this.props.onChange}
                            value={this.props.formValues.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>last Name</label>
                        <input type="text"
                            name="lastName"
                            className="form-control"
                            onChange={this.props.onChange}
                            value={this.props.formValues.lastName} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email"
                            name="email"
                            className="form-control"
                            onChange={this.props.onChange}
                            value={this.props.formValues.email} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input type="text"
                            name="jobTitle"
                            className="form-control"
                            onChange={this.props.onChange}
                            value={this.props.formValues.jobTitle} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input type="text"
                            name="twitter"
                            className="form-control"
                            onChange={this.props.onChange}
                            value={this.props.formValues.twitter} 
                        />
                    </div>
                    <button type="submit"
                        className="btn btn-primary"
                        onClick={this.handleClick}
                    >
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;