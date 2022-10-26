import React from 'react';
import {IDog} from "../utils/types";

interface IProps {
    data: IDog[]
}

export default function ExpertContainer(props: IProps): JSX.Element {
    return <div>
        Expert Container
        {JSON.stringify(props.data)}
    </div>
}