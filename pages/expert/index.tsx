import ExpertContainer from "../../containers/ExpertContainer";
import useSWR from 'swr'
import {CircularProgress} from "@material-ui/core";
import fetchDogs from "../../utils/requests/fetch-dogs";

export default function ExpertPage() {
    const { data, error } = useSWR('/api/dog', fetchDogs);

    return <div>
        Expert view
        { !data ? <CircularProgress />
            : <ExpertContainer data={data} />}
    </div>
}