import Typography from "@material-ui/core/Typography";
import {Checkbox, FormControlLabel, Mark, Slider, TextField} from "@material-ui/core";
import { Guard } from '../utils/mappings'
import style from './general-info.module.css';
import {Dog} from "../utils/types";

interface IStepProps {
    breed: Dog;
    setDogProperty: (arg0: string, arg1: any) => void
}

export default function BehaviourInformation(props: IStepProps) {
    const guardMarks: Mark[] = Object.keys(Guard).map((it) => ({ value: +it, label: Guard[it as keyof typeof Guard] }))

    return <div className={style.generalInfoWrapper}>
        <div className={style.item}>
            <Typography id="discrete-slider" gutterBottom>
                Guard Capabilities
            </Typography>
            <Slider
                className={style.slider}
                defaultValue={1}
                value={props.breed.guard}
                onChange={(_, value) => { props.setDogProperty('guard', value)}}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={guardMarks}
                min={1}
                max={3}
            />
        </div>

        <div className={style.item}>
            <FormControlLabel
                value={props.breed.allergy === 1}
                onChange={() => { props.setDogProperty('allergy', props.breed.allergy === 1 ? 0 : 1); }}
                control={<Checkbox name="checkedA" />}
                label="Can provoke allergy"
            />
        </div>
    </div>
}