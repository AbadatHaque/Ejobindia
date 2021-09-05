import React from 'react';
class From4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            gender: '',
            age: '',
            errorMassage: ''
        }
    }
    handelChange = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        let err = "";
        if (nam === "gender") {
            if (val === "Female") {

            }
            else {
                err = <strong>You gender should be Female</strong>
            }
        }
        if (nam === "age") {
            if (val > 24) {
                err = <strong>You can apply for Laksmi Vander Prokolpo</strong>
            } else {
                err = <strong>You age must be grether than 24 </strong>
            }
        }



        this.setState({ [e.target.name]: [e.target.value] })
        this.setState({ errorMassage: [err] })
    }

    render() {
        return (
            <div>
                <h1>From Validation<br></br> <p>Hello {this.state.userName},
                    Your Gender {this.state.gender},
                    Your Age {this.state.age}</p></h1>

                <input type="text" name="userName" onChange={this.handelChange} /><br />
                <input type="radio" name="gender" value="Male" onChange={this.handelChange} />Male
                <input type="radio" name="gender" value="Female" onChange={this.handelChange} />Female<br />
                <input type="number" name="age" onChange={this.handelChange} />
                {this.state.errorMassage}
            </div>
        );
    }
}
export default From4