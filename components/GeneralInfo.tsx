import Typography from "@material-ui/core/Typography";
import {Mark, Slider, TextField} from "@material-ui/core";
import { Experience, Size } from '../utils/mappings'
import style from './general-info.module.css';
import { Dog } from "../utils/types";

interface IStepProps {
    breed: Dog;
    setDogProperty: (arg0: string, arg1: any) => void
}

export default function GeneralInfo(props: IStepProps) {
    const experienceMarks: Mark[] = Object.keys(Experience).map((it) => ({ value: +it, label: Experience[it as keyof typeof Experience] }))
    const dogSizeMarks: Mark[] = Object.keys(Size).map((it) => ({ value: +it, label: Size[it as keyof typeof Size] }))

    return <div className={style.generalInfoWrapper}>
        <div className={style.item}>
            <TextField
                value={props.breed.breed_name}
                onChange={(event) => {
                    props.setDogProperty('breed_name', event.target.value)
                }}
                id="standard-basic"
                label="Breed Name"
            />
        </div>

        <div className={style.item}>
            <Typography id="discrete-slider" gutterBottom>
                Experience Required
            </Typography>
            <Slider
                className={style.slider}
                defaultValue={1}
                onChange={(_, value) => { props.setDogProperty('experience_required', value)}}
                value={props.breed.experience_required}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={experienceMarks}
                min={1}
                max={3}
            />
        </div>

        <div className={style.item}>
            <Typography id="discrete-slider" gutterBottom>
                Dog Size
            </Typography>
            <Slider
                className={style.slider}
                defaultValue={1}
                value={props.breed.dog_size}
                onChange={(_, value) => { props.setDogProperty('dog_size', value)}}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={dogSizeMarks}
                min={1}
                max={5}
            />
        </div>
    </div>
}