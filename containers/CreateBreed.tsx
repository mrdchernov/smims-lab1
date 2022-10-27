import React, {useState} from 'react';
import Header from "../components/Header";
import Button from "@material-ui/core/Button";
import {useRouter} from "next/router";
import {CircularProgress, Step, StepLabel, Stepper} from "@material-ui/core";
import GeneralInfo from "../components/GeneralInfo";
import style from './create-breed.module.css'
import CareInformation from "../components/CareInformation";
import BehaviourInformation from "../components/BehaviourInformation";
import {Dog} from "../utils/types";

export default function CreateBreed(): JSX.Element {
    const router = useRouter();
    const [loader, setLoader] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [newDogBreed, setDog] = useState(new Dog());

    const handleNext = async () => {
        if (activeStep === 2) {
            try {
                setLoader(true);
                await fetch('/api/dog', {
                    method: 'POST',
                    body: JSON.stringify(newDogBreed),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                setLoader(false);
                return router.push('/expert');

            } catch (e) {
                console.error(e);
            } finally {
                setLoader(false);
            }
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const setDogProperty = (propertyName: string, value: any) => {
        setDog({ ...newDogBreed, [propertyName]: value })
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const steps = ['Set general info', 'Provide care information', 'Provide behaviour information' ]
    return <div style={{ height: "100vh" }}>
        <Header actionBtn={<Button onClick={() => router.back()} color="inherit">Cancel</Button>}/>
        <div className={'content'}>
            {activeStep === 0 && <GeneralInfo breed={newDogBreed} setDogProperty={setDogProperty}/>}
            {activeStep === 1 && <CareInformation breed={newDogBreed} setDogProperty={setDogProperty} />}
            {activeStep === 2 && <BehaviourInformation breed={newDogBreed} setDogProperty={setDogProperty}/>}
        </div>
        <div className={style.stepperWrapper}>

        <Stepper activeStep={activeStep} >
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
        <div className={style.stepperBtns}>
            <Button
                disabled={activeStep === 0}
                onClick={handleBack}
            >
                Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
                {loader ? <CircularProgress color={"secondary"} /> : activeStep === steps.length - 1 ? 'Save' : 'Next'}
            </Button>
        </div>
        </div>
    </div>
}