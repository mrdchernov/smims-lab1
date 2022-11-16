import style from '../containers/create-breed.module.css';
import { CircularProgress, Step, StepLabel, Stepper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import { Dog } from '../utils/types';
import Description from '../components/Steps/Description';
import Care from '../components/Steps/Care';
import Behaviour from '../components/Steps/Behaviour';
import Header from '../components/Header';
import { useRouter } from 'next/router';

interface IClientProps {
    form: Dog;
    setForm: (value: Dog) => void;
    loading: boolean;
    triggerSearch: () => void;
    headerAction: () => void
}

export default function ClientInputComponent({ form, setForm, loading, headerAction, triggerSearch }: IClientProps) {
    const router = useRouter();

    const [ activeStep, setActiveStep ] = useState(0);

    const setDogProperty = (propertyName: string, value: any) => {
        setForm({ ...form, [propertyName]: value })
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleNext = async () => {
        if (activeStep === 2) {
            triggerSearch();
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const steps = [ 'Describe dog in general', 'How would you like to care about', 'What behaviour do you expect' ]

    return <div style={{ height: '100vh' }}>
        <Header title={'Client View'}
                actionBtn={<Button onClick={headerAction} color="inherit">Reset</Button>}/>
        <div className={'content'}>
            {activeStep === 0 && <Description breed={form} setDogProperty={setDogProperty}/>}
            {activeStep === 1 && <Care breed={form} setDogProperty={setDogProperty}/>}
            {activeStep === 2 && <Behaviour breed={form} setDogProperty={setDogProperty}/>}
        </div>
        <div className={style.stepperWrapper}>
            <Stepper activeStep={activeStep}>
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
                    {loading ?
                        <CircularProgress color={'secondary'}/> : activeStep === steps.length - 1 ? 'Get Info' : 'Next'}
                </Button>
            </div>
        </div>
    </div>
}