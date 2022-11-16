import {Button, Paper} from "@material-ui/core";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import styles from './general-info.module.css';

interface MainBlocksProps {
    label: string;
    linkTo: string;
}

export function MainBlock(props: MainBlocksProps) {
    let content = '';
    switch (props.linkTo) {
        case 'expert':
            content = 'Here you manage dog breeds.';
            break;
        case 'client':
            content = 'Here you can pass a test to find out which breed suits you the best.'
            break;
        default:break;
    }

    return <Paper className={styles.mainBlockItem} elevation={2}>
        <Typography>{content}</Typography>
        <Link href={props.linkTo} >
            <Button color={"primary"} variant={"contained"}>{props.label}</Button>
        </Link>
    </Paper>
}