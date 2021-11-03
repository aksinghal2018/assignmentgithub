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
import { useState } from "react";
import '../styles.css'
import axios from 'axios'
import { useEffect } from "react";
var CryptoJS = require("crypto-js");
const BRAND_NAME = "NeoSoft Technology";
export function Crud() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [user, setuser] = useState([])
    const handleChange = (event) => {
        if (event.target.name == "username") {
            setusername(event.target.value)
        }
        else {
            setpassword(event.target.value)
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user)
        if (verify()) {
            alert("successful login")
            window.location.replace('/')
        } else {
            alert('Incorrect Credntials!');
        }
    }
    useEffect(() => {
        axios.get('http://localhost:3002/user').then(
            res => setuser(res.data)
        )
    }, [])

    const verify = () => {
        var status = false
        const userdata=(user[Object.keys(user)[0]])
        console.log(userdata)
        user.map(item => {
            const value=item['data']
            var bytes = CryptoJS.AES.decrypt(value, 'my-secret-key@123');
            var item1 = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            if (item1.email == username && item1.password == password) {
                localStorage.setItem("user", JSON.stringify(item1))
                status = true
            }
        })
        return status
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
                                    Sign in
                                </Typography>
                            </Grid>
                            <Grid item>
                                <form onSubmit={handleSubmit}>
                                    <Grid container direction="column" spacing={2}>
                                        <Grid item>
                                            <TextField
                                                type="email"
                                                placeholder="Email"
                                                fullWidth
                                                name="username"
                                                variant="outlined"

                                                onChange={handleChange
                                                }
                                                required
                                                autoFocus
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
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                className="button-block"
                                            >
                                                Submit
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
export default Crud;

