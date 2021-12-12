import { useEffect, useState } from "react"
import { Grid, GridColumn, GridPageChangeEvent, GridCellProps } from "@progress/kendo-react-grid";
import { Modal, Button } from "react-bootstrap";

interface PageState {
    skip: number;
    take: number;
}

const initialDataState: PageState = { skip: 0, take: 10 };
const ManagerHome = ({ userData, employeeData,showRequestModal,getEmployee ,sendRequest}: any) => {
    const [page, setPage] = useState<PageState>(initialDataState);
    const [showModal, setShow] = useState(false);
    const [EmployeeId, setEmployeeId] = useState(0);
    const [RequestMessage,setRequestMessage]=useState("")
    useEffect(() => {
       
        getEmployee(userData)       
    }, [])

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
    const sendSoftlockRequest=()=>{
      
        //getEmployee(userData) //to be uncommented
        let requestData={
            employee_id:EmployeeId,
            username:userData.username,
            requestmessage:RequestMessage,
            token: userData.token
        }
        sendRequest(requestData)
        setShow(showRequestModal)
//        getEmployee(userData) 

    }
    return (
        <>
            <h4 className="text-center mb-5">Manager Home Screen</h4>
            <h5 className="Headings">Managers Request Lock Table</h5>
            <Grid
                data={employeeData.slice(page.skip, page.take + page.skip)}
                skip={page.skip}
                take={page.take}
                total={employeeData.length}
                onPageChange={pageChange}
                pageable={true}
            >
                <GridColumn field="EmployeeId" title="Employee Id" width="100px" />
                <GridColumn field="Name" title="Name" width="250px" />
                <GridColumn field="Skills" title="Skills" width="400px" />
                <GridColumn field="Experience" title="Experience" width="150px" />
                <GridColumn field="Manager" title="Manager" width="150px" />
                <GridColumn field="Request Lock" title="" cell={(row: any) => { return MyCustomCell(row) }} width="232px" />
            </Grid>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Raise Soft Lock Request</Modal.Title>
                    <span className="fa fa-times" onClick={handleClose}></span>
                </Modal.Header>
                <Modal.Body>
                    <label className="mb-2">Please confirm the lock request for <span>{EmployeeId}</span></label>
                    <p className="mb-0">Request Message (must be atleast 10 char long)</p>
                    <textarea className="form-control" rows={3}  onChange={(x:any)=>setRequestMessage(x.target.value)}></textarea>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={sendSoftlockRequest}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ManagerHome