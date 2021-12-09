import axios from "axios"
const getManager = (username: any) : Promise<any> => 
{
    return new Promise((onSucess,onFailure)=> 
    {
        axios.post("http://localhost:8000/employees/manager/" + username).then(response=>
        {    
            console.log("check result react") 
            console.log(response.data)       
            //let machine = mapResponseToMachineInfo(response.data);
            onSucess(response.data)
        }).catch(error=> {
            onFailure(error)
        });
    });
};

export default 
{
    getManager
}