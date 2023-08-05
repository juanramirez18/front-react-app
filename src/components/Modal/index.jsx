import React from "react";
import styled from "styled-components";

const Modal = ({ children, state, changeState }) => {

  
  return (
    <>
      {state && (
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <h3>Actualizar producto</h3>
            </EncabezadoModal>
            <BotonModal onClick={()=>changeState(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </BotonModal>
            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};

export default Modal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const ContenedorModal = styled.div`
  width: 500px;
  min-height: 100px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-botton: 20px;
  border-botton: 1px solid #e8e8e8;
  h3 {
    font-weight: 500;
    font-size: 16px;
    color: #1766dc;
  }
`;

const BotonModal = styled.button`
    position: absolute;
    top: 20px;
    right:20px;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointerM
    transition: .3s ease all;
    border-radius: 5px;
    color: #1766DC;
    background: none;
    &:hover{
      background: #F2F2F2
    }
    
   

`;
