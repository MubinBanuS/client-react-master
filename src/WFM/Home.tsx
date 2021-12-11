import { useState, useEffect } from "react"
import { Grid, GridColumn, GridPageChangeEvent, GridCellProps } from "@progress/kendo-react-grid";
import { Modal, Button } from "react-bootstrap";
import AcceptLock from "./AcceptLock";

interface PageState {
    skip: number;
    take: number;
}
const initialDataState: PageState = { skip: 0, take: 10 };
type WfmInfo = {
    EmployeeId: number;
    Manager: number;
    reqDate: string;
    requestmessage: number;
    wfm_manager: string;
}
const WFMHome = ({ userData, wfmData, getWfmData }: any) => {
    const [page, setPage] = useState<PageState>(initialDataState);
    const [showModal, setShow] = useState(false);
    const [EmployeeId, setEmployeeId] = useState(0);
    useEffect(() => {
        getWfmData(userData)
    }, []
    )
    const handleClose = () => setShow(false);
    const handleShow = (Id: any) => {
        setEmployeeId(Id);
        setShow(true);
    }
    const pageChange = (event: GridPageChangeEvent) => {
        setPage(event.page);
    };
    const MyCustomCell = (props: GridCellProps | any) => (
        <td><button className='customEdit RequestLockButton' type="button" onClick={(Id) => handleShow(props.dataItem.EmployeeId)}>
            <span className="fa fa-lock mr-2"></span>Request Lock</button></td>
    );
    return (<>
        <h4 className="text-center mb-4">WFM Home Screen</h4>
        <h5 className="Headings">Request Awaiting Approval</h5>
        <Grid
            data={wfmData.slice(page.skip, page.take + page.skip)}
            skip={page.skip}
            take={page.take}
            total={wfmData.length}
            onPageChange={pageChange}
            pageable={true}
        >
            <GridColumn field="EmployeeId" title="Employee Id" width="100px" />
            <GridColumn field="Manager" title="Requestee" width="300px" />
            <GridColumn field="reqDate" title="Request Date" width="200px" />
            <GridColumn field="wfm_manager" title="Employees Manager" width="350px" />
            <GridColumn field="Approve Request" title="" cell={MyCustomCell} width="332px" />
        </Grid>

        <AcceptLock />


    </>)
}


export default WFMHome