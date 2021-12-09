import {useState,useEffect} from "react";
import { Grid, GridColumn,GridPageChangeEvent } from "@progress/kendo-react-grid";
import ManagerService from "../services/ManagerService";
interface PageState {
    skip: number;
    take: number;
  }
  
  const initialDataState: PageState = { skip: 0, take: 10 };

const ManagerHome=()=>{
  const [data, setData] = useState<any[]>([])
  const [page, setPage] = useState<PageState>(initialDataState);
  useEffect(() => {
    ManagerService.getManager("faizal")
    .then(response => {
      setData(response)
    })
}, [])
  
   
    
    const pageChange = (event: GridPageChangeEvent) => {
      setPage(event.page);
    };
    return (<>
        <h1>Managers Home</h1>
        <Grid
             data={data.slice(page.skip, page.take + page.skip)}
             skip={page.skip}
             take={page.take}
             total={data.length}
             onPageChange={pageChange}
             pageable={true}
        >
        <GridColumn field="EmployeeId" title="Employee Id" width="250px" />
        <GridColumn field="Name" title="Name" width="250px" />
        <GridColumn field="Skills" title="Skills" />
        <GridColumn field="Experience" title="Experience" />
        <GridColumn field="Manager" title="Manager" />
        </Grid>
       
    </>)
}

export default ManagerHome