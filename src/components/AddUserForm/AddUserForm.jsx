import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { axiosBack } from "../../config/axios";
import { ADD_USER_VALUES } from "../../constants";

const AddUserForm = ({handleClose, getUsers}) => {
  const [values, setValues] = useState(ADD_USER_VALUES);

  const handleChange = (e)=>{
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      await axiosBack.post('/users',values);
      getUsers();
      toast.done('Usuario creado');
    } catch (error) {
      toast.error('Error al enviar los datos. Intente nuevamente más tarde.')
    }
  }

  return ( 
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="idUser">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="Ingrese un id" onChange={handleChange} value={values.id} name='id'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userName">
        <Form.Label>Nombre del usuario</Form.Label>
        <Form.Control type="text" placeholder="Pepe" onChange={handleChange} value={values.name} name='name'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="userRole">
        <Form.Label>Rol</Form.Label>
        <Form.Control type="text" placeholder="admin, user, editor, etc... " onChange={handleChange} value={values.role} name='role'/>
      </Form.Group>
      <Button variant="success" type="submit" onClick={handleClose}>
        Agregar
      </Button>
    </Form>
  );
}
 
export default AddUserForm;