import React from 'react';
import {Dog} from "../utils/types";
import {DogsViewTable} from "../components/DogsViewTable";
import Header from "../components/Header";
import Button from "@material-ui/core/Button";
import Link from "next/link";

interface IProps {
    data: Dog[]
}

export default function Expert(props: IProps): JSX.Element {
    return <div>
        <Header actionBtn={<Link href={'/expert/create-breed'}>
            <Button color="inherit">Create New Breed</Button>
        </Link>}/>
        <div className={'content'}>
            <DogsViewTable dogs={props.data} />
        </div>
    </div>
}