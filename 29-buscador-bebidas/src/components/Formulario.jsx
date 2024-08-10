import React, { useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import useCategorias from "../hooks/useCategorias";
import useBebidas from "../hooks/useBebidas";

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });
  const [alerta, setAlerta] = useState("");

  const { categorias } = useCategorias();
  const { consultarBebidas } = useBebidas();

  const handleSubmit = e => {
    e.preventDefault();

    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios.");
      return;
    }
    setAlerta("");
    consultarBebidas(busqueda)
  };

  return (
    <Form onSubmit={handleSubmit}>
      {alerta && <Alert variant='danger text-center'>{alerta}</Alert>}

      <Row>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='nombre'>Nombre Bebida</Form.Label>
            <Form.Control
              id='nombre'
              type='text'
              placeholder='Ejemplo: Tequila, Vodka, ...'
              name='nombre'
              value={busqueda.nombre}
              onChange={e =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                })
              }
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='categoria'>Categoría Bebida</Form.Label>
            <Form.Select
              id='categoria'
              name='categoria'
              value={busqueda.categoria}
              onChange={e =>
                setBusqueda({
                  ...busqueda,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option>-- Seleciona Categoría --</option>
              {categorias.map(categoria => (
                <option
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className='justify-content-end'>
        <Col md={3}>
          <Button
            type='submit'
            variant='danger'
            className='text-uppercase w-100'
          >
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
