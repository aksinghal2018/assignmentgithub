import React from "react";
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar,
    Link,
} from "@material-ui/core";

import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useState } from "react";
import '../styles.css'
import ReCAPTCHA from "react-google-recaptcha";
import Captcha from "demos-react-captcha";
import axios from 'axios'
var CryptoJS = require("crypto-js");
const BRAND_NAME = "NeoSoft Technology";
export function Register() {
    const [firstname, setfirstname] = useState("")
    const [middlename, setmiddlename] = useState("")
    const [lastname, setlastname] = useState("")
    const [mobilenumber, setmobilenumber] = useState("")
    const [age, setage] = useState("")
    const [gender, setgender] = useState("")
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    const [status, setstatus] = useState(false)
    const handleChange = (event) => {
        //alert(event.target.name)
        if (event.target.name == "firstname") {
            setfirstname(event.target.value)
        }
        if (event.target.name == "middlename") {
            setmiddlename(event.target.value)
        }
        if (event.target.name == "lastname") {
            setlastname(event.target.value)
        }
        if (event.target.name == "mobilenumber") {
            setmobilenumber(event.target.value)
        }
        if (event.target.name == "age") {
            setage(event.target.value)
        }
        if (event.target.name == "gender") {
            setgender(event.target.value)
        }
        
        if (event.target.name == "email") {
            setemail(event.target.value)
        }
        if (event.target.name == "address") {
           
            setaddress(event.target.value)
        }
        if (event.target.name == "password") {
            setpassword(event.target.value)
        }
        if(event.target.name=="confirmpassword") {
            setconfirmpassword(event.target.value)
        }
    }
    const onSubmit=(token)=> {
        alert()
     document.getElementById("demo-form").submit();
   }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(password!==confirmpassword){
            alert("password and confirm password not same")
        }
        else{
            var data={"name":firstname+middlename+lastname,"mobilenumber":mobilenumber,"age":age,"gender":gender,"email":email,"address":address,"password":password,"confirm password":confirmpassword}
            var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'my-secret-key@123').toString();
            var data1={data:ciphertext}
            if(status==true){
                axios.post('http://localhost:3002/user',data1).then(
                    res=>{
                        console.log(res.data)}
                )
                alert("register successfull")
            }
        else{
            alert("invalid captcha")
        }
        }
    }
    const onChange = (value) => {
        setstatus(value)
        console.log("Captcha value:", value);
    }
    return (
        <div>
            <Grid container spacing={0} justify="center" direction="row">
                <Grid item>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        spacing={2}
                        className="login-form"
                    >
                        <Paper
                            variant="elevation"
                            elevation={2}
                            className="login-background"
                        >
                            <Grid item>
                                <Typography component="h1" variant="h5">
                                    Register
                                </Typography>
                            </Grid>
                            <Grid item>
                                <form onSubmit={handleSubmit}>
                                    <Grid container direction="column" spacing={4}>
                                        <Grid item>
                                            <TextField
                                                type="text"
                                                placeholder="First Name"
                                                label="First Name"
                                                name="firstname"
                                                variant="outlined"

                                                onChange={handleChange
                                                }
                                                required
                                                autoFocus
                                            />
                                            <TextField
                                                type="text"
                                                label="Middle Name"
                                                placeholder="Middle Name"

                                                name="middlename"
                                                variant="outlined"

                                                onChange={handleChange
                                                }
                                                required

                                            />
                                            <TextField
                                                type="text"
                                                placeholder="Last Name"
                                                label="Last Name"
                                                name="lastname"
                                                variant="outlined"

                                                onChange={handleChange
                                                }
                                                required

                                            />

                                        </Grid>
                                        <Grid Item>
                                            <TextField
                                                type="text"
                                                placeholder="Mobile"
                                                label="Mobile Numer"
                                                name="mobilenumber"
                                                variant="outlined"
                                                fullWidth
                                                onChange={handleChange
                                                }
                                                required

                                            />
                                        </Grid>
                                        <Grid Item>
                                            <TextField
                                                type="text"
                                                placeholder="Age"
                                                label="Age"
                                                name="age"
                                                variant="outlined"
                                                fullWidth
                                                onChange={handleChange
                                                }
                                                required

                                            />
                                        </Grid>
                                        <Grid Item>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={gender}
                                                    name="gender"
                                                    label="Gender"
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={"male"}>Male</MenuItem>
                                                    <MenuItem value={"female"}>Female</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid Item>
                                            <TextField
                                                type="email"
                                                placeholder="Email"
                                                label="Email"
                                                name="email"
                                                variant="outlined"
                                                fullWidth
                                                onChange={handleChange
                                                }
                                                required

                                            />
                                        </Grid>
                                        <Grid Item>
                                            <TextField
                                                placeholder="Address"
                                                label="Address"
                                                variant="outlined"
                                                name="address"
                                                fullWidth
                                                multiline
                                                rows={2}
                                                rowsMax={4}
                                                onChange={handleChange
                                                }
                                                required
                                            />
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                type="password"
                                                placeholder="Password"
                                                fullWidth
                                                name="password"
                                                variant="outlined"

                                                onChange={handleChange
                                                }
                                                required
                                            />
                                        </Grid>

                                        <Grid item>
                                            <TextField
                                                type="password"
                                                placeholder="Confirm Password"
                                                fullWidth
                                                name="confirmpassword"
                                                variant="outlined"
                                                label="Confirm Password"
                                                onChange={handleChange
                                                }
                                                required
                                            />
                                        </Grid>

                            <Grid item>
                               <Captcha onChange={onChange} placeholder="Enter Captcha"/>
                            </Grid>
                                        <Grid item>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                className="button-block"
                                            >
                                                Register
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>

                            <Grid item>
                                <Link href="#" variant="body2">
                                    Forgot Password?
                                </Link>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            
        </div>
    );

}
export default Register;

