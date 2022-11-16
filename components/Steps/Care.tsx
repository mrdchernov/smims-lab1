import Typography from '@material-ui/core/Typography';
import { Checkbox, FormControlLabel, Mark, Slider, TextField } from '@material-ui/core';
import { GroomingTime, WalkDistance } from '../../utils/mappings'
import style from '../general-info.module.css';
import { Dog } from '../../utils/types';

interface IStepProps {
    breed: Dog;
    setDogProperty: (arg0: string, arg1: any) => void
}

export default function Care(props: IStepProps) {
    const groomingMarks: Mark[] = Object.keys(GroomingTime).map((it) => ({
        value: +it,
        label: GroomingTime[it as keyof typeof GroomingTime]
    }))
    const walkDistanceMarks: Mark[] = Object.keys(WalkDistance).map((it) => ({
        value: +it,
        label: WalkDistance[it as keyof typeof WalkDistance]
    }))

    return <div className={style.generalInfoWrapper}>
        <div className={style.item}>
            <Typography id="discrete-slider" gutterBottom>
                Grooming Time
            </Typography>
            <Slider
                className={style.slider}
                defaultValue={1}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                onChange={(_, value) => {
                    props.setDogProperty('grooming_time', value)
                }}
                value={props.breed.grooming_time}
                step={1}
                marks={groomingMarks}
                min={0}
                max={3}
            />
        </div>

        <div className={style.item}>
            <Typography id="discrete-slider" gutterBottom>
                Walk Distance
            </Typography>
            <Slider
                className={style.slider}
                defaultValue={1}
                aria-labelledby="discrete-slider"
                value={props.breed.walk_distance}
                onChange={(_, value) => {
                    props.setDogProperty('walk_distance', value)
                }}
                valueLabelDisplay="auto"
                step={1}
                marks={walkDistanceMarks}
                min={0}
                max={3}
            />
        </div>
    </div>
}