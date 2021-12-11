const AcceptLock = () => {
    return(
            <>
            <div className="modal fade" id="approveLock" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Soft Lock Request Confirmation</h5>
                    <a data-bs-dismiss="modal" aria-label="Close"><span className="fa fa-times"></span></a>
                </div>
                <div className="modal-body">      
                    <p className="StatusMsg">Status Update for Request Lock</p>
                    <div>
                        <label className="mb-0">Employee ID</label><span>1019</span>
                    </div>
                    <div>
                        <label className="mb-0">Requestee</label><span>rohit</span>
                    </div>
                    <div>
                        <label className="mb-0">Employee Manager</label><span>karan</span>
                    </div>
                    <div>
                        <label className="mb-0">Request Description</label><span>Need this Employee</span>
                    </div>
                    <div>
                        <label className="mb-0">Request Description</label>
                        <select name="" id="">
                            <option value="Update">Update</option>
                            <option value="Reject">Reject</option>
                        </select>
                    </div>               
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary">Approve Request</button>
                </div>
                </div>
            </div>
            </div>
            </>
    )
}

export default AcceptLock;