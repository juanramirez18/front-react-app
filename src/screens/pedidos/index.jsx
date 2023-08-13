import React from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import Modal from "../../components/Modal";
import { useSelector, UseSelector } from "react-redux";

const PedidosScreen = () => {
    const [pedidos, setPedidos] = React.useState(null)
    const [estadoModal, setEstadoModal] = React.useState(false)
    const token = useSelector(data => data.userData.token)
    React.useEffect(()=>{
        getAllSells()
       

    }, [])
    const getAllSells = async()=>{
        const pedidos = await axios(
            {
                method:"get",
                url:"http://localhost:3000/api/pedidos",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": token
                }
            }
        ).then(data=>setPedidos(data.data))
        
        console.log(pedidos)
    }
    return(
        <div className="mt-2">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nombre</td>

                    </tr>
                </thead>
                <tbody>
                    {pedidos && pedidos.length > 0 && pedidos.map((data, index)=>{
                        return(
                            <tr key={index}>
                                <td>{data.id}</td>

                                <td>{data.name}</td>
                                <td>
                                    <button onClick={()=>setEstadoModal(!estadoModal)}><svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-pencil"
                              viewBox="0 0 16 16"
                              onC
                            >
                              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                            </svg></button>
                                </td>

                            </tr>
                        )
                    }
                        

                    )}

                </tbody>
            </Table>
            <Modal state={estadoModal} changeState={setEstadoModal}>
                <form>
                    <div className="form-group">
                        <label>Cliente</label>
                        <input className="form-control"></input>
                        <button style={{margin: 6}}className="btn btn-success">Crear nuevo pedido</button>
                    </div>
                </form>

            </Modal>
            

        </div>
    )
}

export default PedidosScreen;