import Expert from "../../containers/Expert";
import useSWR from 'swr'
import {CircularProgress} from "@material-ui/core";
import fetchDogs from "../../utils/requests/fetch-dogs";

export default function ExpertPage(): JSX.Element {
    const { data, error } = useSWR('/api/dog', fetchDogs);

    if (error) {
        return <div>
            {error.message}
        </div>
    }
    return  !data
        ? <div style={{ position: 'absolute', top: '50vh', right: '50vw' }}><CircularProgress /></div>
        : <Expert data={data} />
}