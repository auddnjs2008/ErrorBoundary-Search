import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';



interface IGridComponent {
    data: any
}

const GridComponent = ({ data }: IGridComponent) => {
    const gridRef = useRef<any>(null);
    const containerStyle = useMemo(() => ({ width: '100%', height: '600px' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const [rowData, setRowData] = useState();
    const [columnDefs, setColumnDefs] = useState([
        // group cell renderer needed for expand / collapse icons
        { field: 'name', cellRenderer: 'agGroupCellRenderer' },
        { field: 'account' },
        { field: 'calls' },
        { field: 'minutes', valueFormatter: "x.toLocaleString() + 'm'" },
    ]);
    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
        };
    }, []);
    const detailCellRendererParams = useMemo(() => {
        return {
            detailGridOptions: {
                rowSelection: 'multiple',
                suppressRowClickSelection: true,
                enableRangeSelection: true,
                pagination: true,
                paginationAutoPageSize: true,
                columnDefs: [
                    { field: 'callId', checkboxSelection: true },
                    { field: 'direction' },
                    { field: 'number', minWidth: 150 },
                    { field: 'duration', valueFormatter: "x.toLocaleString() + 's'" },
                    { field: 'switchCode', minWidth: 150 },
                ],
                defaultColDef: {
                    sortable: true,
                    flex: 1,
                },
            },
            getDetailRowData: (params: any) => {
                params.successCallback(params.data.callRecords);
            },
        };
    }, []);

    // const onGridReady = useCallback(() => {
    //     console.log("Grd 준비");
    //     gridRef.current.api?.forEachNode((node: any) => node.expanded = true)
    // }, [gridRef.current]);

    const onFirstDataRendered = useCallback((params: any) => {
        // arbitrarily expand a row for presentational purposes
        setTimeout(function () {
            if (gridRef.current) return;
            gridRef.current?.api.getDisplayedRowAtIndex(1).setExpanded(true);
            gridRef.current?.api.expandAll();
        }, 0);
    }, [gridRef.current]);


    return (
        <div style={containerStyle}>
            <div style={gridStyle} className="ag-theme-alpine">
                <AgGridReact
                    ref={gridRef}
                    rowData={data}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    masterDetail={true}
                    detailCellRendererParams={detailCellRendererParams}
                    // onGridReady={onGridReady}

                    onFirstDataRendered={onFirstDataRendered}
                ></AgGridReact>
            </div>
        </div>
    );
};


export default GridComponent;