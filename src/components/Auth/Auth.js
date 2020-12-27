import React from 'react'
import Input from '@material-ui/core/Input';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import './Auth.css'
var OTP;
var email;


class Auth extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            otpVerified: 0,
            otgGot: 0,
            otpText: 0
        }

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        email = urlParams.get('email');
        const password = urlParams.get('password');
        console.log('email:', email);
        console.log('password', password);
        
        this.generateOTP = this.generateOTP.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        this.verifyOTP = this.verifyOTP.bind(this);
        
        this.generateOTP();
        this.sendEmail();
    }

    generateOTP() {
        OTP = Math.random();
        OTP = OTP * 1000000;
        OTP = parseInt(OTP);
        console.log('OTP', OTP);
    }

    sendEmail() {
        Email.send({ 
            Host: "smtp.gmail.com", 
            Username: "dummy645645@gmail.com", 
            Password: "Supersecret123*", 
            To: email, 
            From: "dummy645645@gmail.com", 
            Subject: "OTP verification", 
            Body: "Your OTP for verification is " + OTP, 
          }) 
        .then(() => { 
            this.setState({
                otgGot: 1
            })
            console.log(this.state.otpGot); 
        }).then(() => {
            alert("mail sent successfully!");
        }); 
    }

    verifyOTP(event) {
        event.preventDefault();
        console.log('inside verify otp');
        if(this.state.otpText == OTP) {
            this.setState({
                otpVerified: 1
            })
            console.log(this.state.otpVerified);
        }
    }

    render(){
        return(
            <div>
                {this.state.otpVerified == 0 ?
                    <Dialog open={this.state.otpVerified == 0} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Confirm OTP</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        An OTP has been sent to your registered Email ID. Please Enter the OTP to Continue!
                      </DialogContentText>
                      <Input 
                        autoFocus="true" 
                        type="number" 
                        margin="dense"
                        name="otpText" 
                        value={this.state.otpText}
                        onChange={(event) => this.setState({otpText: event.target.value})}
                        placeholder="Enter the OTP"
                    />
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.verifyOTP} color="primary">
                        Submit
                      </Button>
                    </DialogActions>
                  </Dialog>
                : 
                <Link to="/home">
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.sendEmail}
                    >
                    Enter
                    </Button>
                </Link>
                }
        </div>
        ) 
    }
}

export default Auth;
