import React, { useCallback, useMemo, useRef, useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';



// row를 그룹핑 하고  그룹 마다 밑에  Group footer를 커스텀 해서 사용을 하쟈 

const GroupComponent = () => {

    const containerStyle = useMemo(() => ({ width: '100%', height: '600px' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const [rowData, setRowData] = useState();
    const [columnDefs, setColumnDefs] = useState([
        { field: 'country', rowGroup: true, hide: true },
        { field: 'year', rowGroup: true, hide: true },
        { field: 'athlete' },
        { field: 'sport' },
        { field: 'total' },
    ]);
    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            minWidth: 100,
            sortable: true,
            resizable: true,
        };
    }, []);
    const autoGroupColumnDef = useMemo(() => {
        return {
            minWidth: 200,
        };
    }, []);

    const onGridReady = useCallback((params: any) => {
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then((resp) => resp.json())
            .then((data) => setRowData(data));
    }, []);

    return (
        <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine">
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    autoGroupColumnDef={autoGroupColumnDef}
                    groupDisplayType={'multipleColumns'}
                    animateRows={true}
                    onGridReady={onGridReady}
                ></AgGridReact>
            </div>
        </div>
    );
}

export default GroupComponent;