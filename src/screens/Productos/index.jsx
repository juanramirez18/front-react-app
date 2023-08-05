import axios from "axios";
import React from "react"; 
import Modal from "../../components/Modal";
import {Table} from "react-bootstrap"

const ProductosScreen = ()=>{
    const [products, setProducts] = React.useState(null);
    const [estadoModal, setEstadoModal] = React.useState(false)
    const [info, setInfo] = React.useState([])
    const [dataForm, setDataForm] = React.useState([])
    const [idState, setIdState] = React.useState(null)
    const [msn,setMsn] = React.useState(null)
    
    React.useEffect(()=>{
        getAllProducts();

    },[])


    const handleChange = (e)=>{
        console.log(e.target.value)
        setInfo({...info, [e.target.name]:e.target.value})
    }
    

    const getAllProducts = async()=>{
        const products = await axios({
            method:"get",
            url:"http://localhost:3000/api/productos"
        }).then((data)=>{setProducts(data.data)})
    };
    console.log(idState)
    

    const updateProducts = async()=>{
        try {
            console.log("hola")
            const { name, price} = info
            const products = await axios({
                method:"put",
                url:`http://localhost:3000/api/productos/${idState}`,
                data:{
                    name: name,
                    price: price
                }
            }).then(res=>setMsn(res.data.messagge))
            setEstadoModal(false)
        } catch (error) {
            console.log(error)
        }
        
      
    };

    const deleteMethod = async()=>{

    }
   
      


    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <td>id</td>
                                <td>Producto</td>
                                <td>Precio</td>
                            </tr>
                        </thead>
                        <tbody>{products &&
                        products.length > 0 && products.map((data, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.price}</td>
                                    <td>
                                    <button onClick={()=>{setEstadoModal(!estadoModal); setDataForm(data); setIdState(data.id)}}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-pencil"
                              viewBox="0 0 16 16"
                              onC
                            >
                              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                            </svg>
                          </button>
                                    </td>
                                </tr>
                            )
                        })
                        
                        }
                        </tbody>

                    </Table>
                    <Modal state={estadoModal}  changeState={setEstadoModal}>
                        <form>
                            <div className="form-group">
                                <label>Producto</label>
                                <input type="text" className="form-control" name="name" value={dataForm.name} onChange={(e)=>setDataForm(e.target.value)} onBlur={(e)=>handleChange(e)}/>
                            </div>
                            <div className="form-group">
                                <label>Precio</label>
                                <input type="text"className="form-control" name="price" value={dataForm.price} onChange={(e)=>setDataForm(e.target.value)} onBlur={(e)=>handleChange(e)}/> 
                            </div>
                            <div>
                                <button type="button"className="btn btn-success" onClick={(e)=>updateProducts(e)}>Enviar</button>

                            </div>
                            {msn &&
                            <div>
                            <p>{msn}</p>
                        </div>
                            
                            }
                            
                            
                        </form>

                    </Modal>
                </div>
            </div>
        </div>
    )
}
export default ProductosScreen