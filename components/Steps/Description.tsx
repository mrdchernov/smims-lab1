import Typography from '@material-ui/core/Typography';
import { Checkbox, FormControlLabel, Mark, Slider } from '@material-ui/core';
import style from '../general-info.module.css';
import { Dog } from '../../utils/types';
import { Experience, Size } from '../../utils/mappings'

interface IStepProps {
    breed: Dog;
    setDogProperty: (arg0: string, arg1: any) => void
}

export default function Description(props: IStepProps) {
    const experienceMarks: Mark[] = Object.keys(Experience).map((it) => ({
        value: +it,
        label: Experience[it as keyof typeof Experience]
    }))
    const dogSizeMarks: Mark[] = Object.keys(Size).map((it) => ({ value: +it, label: Size[it as keyof typeof Size] }))


    return <div className={style.generalInfoWrapper}>
        <div className={style.item}>
            <Typography id="discrete-slider" gutterBottom>
                Experience Required
            </Typography>
            <Slider
                className={style.slider}
                defaultValue={0}
                onChange={(_, value) => {
                    props.setDogProperty('experience_required', value)
                }}
                value={props.breed.experience_required}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={experienceMarks}
                min={0}
                max={3}
            />
        </div>

        <div className={style.item}>
            <Typography id="discrete-slider" gutterBottom>
                Dog Size
            </Typography>
            <Slider
                className={style.slider}
                defaultValue={0}
                value={props.breed.dog_size}
                onChange={(_, value) => {
                    props.setDogProperty('dog_size', value)
                }}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks={dogSizeMarks}
                min={0}
                max={5}
            />
        </div>
        <div className={style.item}>
            <FormControlLabel
                value={props.breed.drools === 1}
                onChange={() => {
                    props.setDogProperty('drools', props.breed.drools === 1 ? 0 : 1);
                }}
                control={<Checkbox name="checkedA"/>}
                label="Can have a lot of drools"
            />
        </div>
    </div>
}