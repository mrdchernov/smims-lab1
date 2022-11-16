import {DataGrid, GridValueGetterParams} from '@material-ui/data-grid';
import { Dog } from "../utils/types";
import {Experience, Allergy, Size} from '../utils/mappings';
import Button from '@material-ui/core/Button';
import Header from './Header';
import React from 'react';


export const ResultView = (props: { dogs: Dog[], result: Dog, headerAction: () => void }): JSX.Element  => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        {
            field: 'breed_name',
            headerName: 'Breed Name',
            width: 400,
        },
        {
            field: 'experience',
            headerName: 'Experience',
            width: 200,
            valueGetter: (params: GridValueGetterParams) => {
                const experience = params.row.experience_required || '0';
                return Experience[experience as keyof typeof Experience];
            }
        },
        {
            field: 'allergyCol',
            headerName: 'Allergy',
            width: 200,
            valueGetter: (params: GridValueGetterParams) => {
                const allergy = params.row.allergy || '0';
                return Allergy[allergy as keyof typeof Allergy];
            }
        },
        {
            field: 'sizeCol',
            headerName: 'Size',
            width: 200,
            valueGetter: (params: GridValueGetterParams) => {
                const size = params.row.dog_size || '0';
                return Size[size as keyof typeof Size];
            }
        },
        {
            field: 'probability',
            headerName: 'Probability',
            width: 150,
            valueGetter: (params: GridValueGetterParams) => {
                const percent = params.row.probability || '0';
                return `${percent}%`
            }
        }
    ];
    return <div style={{ height: 'calc(100vh - 100px)', width: '100%' }}>
        <Header title={'Client View'}
                actionBtn={<Button onClick={props.headerAction} color="inherit">Reset</Button>}/>
        <DataGrid rowCount={props.dogs.length} disableSelectionOnClick columns={columns} rows={props.dogs} />
    </div>
}