/*import * as React from 'react';
import {Grid,Typography} from "@mui/material";
import {Component} from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import CommonButton from "../../../components/common/Button";
import {Link} from "react-router-dom";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userName: "",
                password: "",
            },
        };
    }

    handleSubmit = async () => {
        console.log("Hi handle");
        console.log(this.state.formData);
    };

    handleChange = (event) => {
        let id = event.target.name;
        switch (id) {
            case "userName":
                const userName = event.target.value;
                this.setState(
                    Object.assign(this.state.formData, { userName: userName })
                );
                // this.setState({ userId });
                break;

            case "password":
                const password = event.target.value;
                this.setState(
                    Object.assign(this.state.formData, { password: password })
                );
                break;

            default:
                break;
        }
    };

    render() {
        return (
            <Grid
                container
                direction={"column"}
                alignItems="center"
                justifyContent={"center"}
                className="h-screen w-screen bg-red-100 drop-shadow-lg"
            >
                <Grid container direction={"column"} alignItems="center">
                    <Grid
                        item
                        container
                        className="min-h-96  w-96 bg-slate-50 rounded-lg p-10 drop-shadow-lg"
                    >
                        <Grid container item direction={"column"} gap="20px" alignItems="center" className="">
                            <Typography variant="h3" className="text-black -mt-3">
                                Login
                            </Typography>
                            <ValidatorForm
                                onSubmit={this.handleSubmit}
                                onError={(errors) => console.log(errors)}
                            >
                                <Grid item container direction={"column"} alignItems rowGap="20px">
                                    <TextValidator
                                        label="User Name"
                                        onChange={this.handleChange}
                                        name="userName"
                                        value={this.state.formData.userName}
                                        validators={["required"]}
                                        errorMessages={["This field is required"]}
                                        className="w-full"
                                        style={{minWidth:'100%'}}
                                    />
                                    <TextValidator
                                        label="Password"
                                        onChange={this.handleChange}
                                        name="password"
                                        value={this.state.formData.password}
                                        validators={["required"]}
                                        errorMessages={["This field is required"]}
                                        type={"password"}
                                        className="w-full"
                                        style={{minWidth:'100%'}}
                                    />

                                    <CommonButton
                                        size="large"
                                        variant="contained"
                                        label="Login"
                                        type="submit"
                                        className="text-white bg-blue-500 font-bold tracking-wide" style={{backgroundColor:'rgba(25, 118, 210, 0.95)'}}
                                    />

                                    <Typography variant="p">
                                        Crrate new user account ?    <Link to={"/userRegistration"} >Register Now</Link>
                                    </Typography>
                                </Grid>
                            </ValidatorForm>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Login;*/

/*
import { Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { styleSheet } from "./styles";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import CommonButton from "../../../components/common/Button";

class LoginAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userName: "",
                password: "",
            },
        };
    }

    handleSubmit = async () => {
        console.log("Hi handle");
        console.log(this.state.formData);
    };

    handleChange = (event) => {
        let id = event.target.name;
        switch (id) {
            case "userName":
                const userName = event.target.value;
                this.setState(
                    Object.assign(this.state.formData, { userName: userName })
                );
                // this.setState({ userId });
                break;

            case "password":
                const password = event.target.value;
                this.setState(
                    Object.assign(this.state.formData, { password: password })
                );
                break;

            default:
                break;
        }
    };

    render() {
        const { classes } = this.props;
        return (
            <Grid
                container
                direction={"row"}
                justifyContent="center"
                alignItems="stretch"
                className="h-screen min-h-min w-screen p-0 m-0 bg-loginAdmin-img bg-no-repeat bg-bottoms bg-cover bg-center bg-blend-overlay   bg-stone-800"
            >
                <Grid
                    container
                    direction={"row"}
                    item
                    xs={12}
                    md={12}
                    lg={12}
                    justifyContent="center"
                    alignItems="center"
                >
                    <div
                        className="flex gap-6 flex-col h-fit w-96 rounded-xl bg-blue-300 p-10 m-5 md:m-0 bg-opacity-10  backdrop-blur-sm"
                        style={{ border: "1px solid rgba(255, 255, 255, 0.09)" }}
                    >
                        <Grid item>
                            <Typography
                                variant="h4"
                                className="text-center uppercase font-bold text-white"
                            >
                                Login
                            </Typography>
                        </Grid>
                        <ValidatorForm
                            onSubmit={this.handleSubmit}
                            onError={(errors) => console.log(errors)}
                        >
                            <Grid item container direction={"column"} rowGap="20px">
                                <TextValidator
                                    label="User Name"
                                    onChange={this.handleChange}
                                    name="userName"
                                    value={this.state.formData.driverId}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-full text-red-500"]}
                                />
                                <TextValidator
                                    label="Password"
                                    onChange={this.handleChange}
                                    name="password"
                                    value={this.state.formData.password}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    type={"password"}
                                    className={[classes.textField, "w-full"]}
                                />

                                <Typography variant="p" className="text-slate-500 -mt-3">
                                    Frogot password ?
                                </Typography>

                                <Link to="dashboard">
                                    <CommonButton
                                        size="large"
                                        variant="contained"
                                        label="Login"
                                        type="submit"
                                        onClick={() => {
                                            this.checkValidity();
                                        }}
                                        className="text-white w-full bg-blue-500 font-bold tracking-wide"
                                    />
                                </Link>

                                <Typography variant="p" className={'text-white'}>
                                   Create new user account ?    <Link to={"/userRegistration"} >Register Now</Link>
                                </Typography>

                            </Grid>
                        </ValidatorForm>
                    </div>
                </Grid>
            </Grid>
        );
    }
}
export default withStyles(styleSheet)(LoginAdmin);
*/

import * as React from 'react';
import {Component} from 'react';
import {Grid, Typography} from "@mui/material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";

import CommonButton from "../../../components/common/Button/index";
import {Link} from "react-router-dom";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userName: "",
                password: "",
            },
        };
    }

    handleSubmit = async () => {
        console.log("Hi handle");
        console.log(this.state.formData);
    };

    handleChange = (event, newValue) => {
        let id = event.target.name;
        this.setState({
            value: newValue
        });
        switch (id) {
            case "userName":
                const userName = event.target.value;

                this.setState(
                    Object.assign(this.state.formData, {userName: userName})
                );
                // this.setState({ userId });
                break;

            case "password":
                const password = event.target.value;
                this.setState(
                    Object.assign(this.state.formData, {password: password})
                );
                break;

            default:
                break;
        }
    };

    render() {
        return (
            <Grid
                container
                direction={"column"}
                alignItems="center"
                justifyContent={"center"}
                className="h-screen w-screen bg-red-100 drop-shadow-lg"
            >
                <Grid container direction={"column"} alignItems="center">
                    <Grid
                        item
                        container
                        className="min-h-96  w-96 bg-slate-50 rounded-lg p-10 drop-shadow-lg"
                    >
                        <Grid container item direction={"column"} gap="20px" alignItems="center" className="">
                            <Typography variant="h3" className="text-black -mt-3">

                                Login
                            </Typography>
                            <ValidatorForm
                                onSubmit={this.handleSubmit}
                                onError={(errors) => console.log(errors)}
                            >
                                <Grid item container direction={"column"} alignItems rowGap="20px">
                                    <TextValidator
                                        label="User Name"
                                        onChange={this.handleChange}
                                        name="userName"
                                        value={this.state.formData.userName}
                                        validators={["required"]}
                                        errorMessages={["This field is required"]}
                                        className="w-full"
                                        style={{minWidth: '100%'}}
                                    />
                                    <TextValidator
                                        label="Password"
                                        onChange={this.handleChange}
                                        name="password"
                                        value={this.state.formData.password}
                                        validators={["required"]}
                                        errorMessages={["This field is required"]}
                                        type={"password"}
                                        className="w-full"
                                        style={{minWidth: '100%'}}
                                    /><CommonButton
                                    size="large"
                                    variant="contained"
                                    label="Login"
                                    type="submit"
                                    className="text-white bg-blue-500 font-bold tracking-wide"
                                    style={{backgroundColor: 'rgba(25, 118, 210, 0.95)'}}
                                />

                                    <Typography variant="p">
                                        Create new user account ? <Link to={"/userRegistration"}>Register Now</Link>
                                    </Typography>
                                </Grid>
                            </ValidatorForm>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Login;