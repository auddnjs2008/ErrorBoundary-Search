import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import FilterComponent from '../components/FilterComponent';
import GridComponent from '../components/GridComponent';
import getGridData from '../service/api/getGridData';

const GridContainer = () => {

    const [param, setParam] = useState({ name: "", account: "", calls: "", minutes: "" });
    const { data } = useQuery(["grid", param], getGridData);



    return (
        <div style={{ padding: "20px" }}>
            <FilterComponent setParam={setParam} />
            <GridComponent data={data} />
        </div>
    )
}

export default GridContainer;