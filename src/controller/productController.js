//req request peticion del usuario -> datos
//res response resultado -> status (200,400,500), json

import * as productService from "../services/productService.js";

export async function crear(req, res) {
  try {
    const { name, price, status, stock } = req.body;
    const productoCreado = await productService.crear(
      name,
      price,
      stock,
      status
    );
    res.status(201).json(productoCreado);
  } catch (error) {
    res.status(500).json({
      mensaje: "error en el servidor",
      error: error,
    });
  }
}

export async function obtenerTodos(req, res) {
  try {
    const productos = await productService.obtenerTodos();
    if (productos) {
      res.status(200).json({
        mensaje: "productos encontrados",
        codigo: 200,
        datos: productos,
      });
    } else {
      res.status(200).json({
        mensaje: "productos no encontrados",
        codigo: 200,
        datos: [],
      });
    }
  } catch (error) {
    res.status(500).json({
      mensaje: "error en el servidor",
      error: error,
    });
  }
}

export async function obtenerUno(req, res) {
  try {
    const { id } = req.params;
    const producto = await productService.obtenerUno(id);
    if (producto) {
      res.status(200).json({
        mensaje: "producto encontrado",
        codigo: 200,
        datos: producto,
      });
    } else {
      res.status(200).json({
        mensaje: "producto no encontrado",
        codigo: 200,
        datos: [],
      });
    }
  } catch (error) {
    res.status(500).json({
      mensaje: "error en el servidor",
      error: error,
    });
  }
}

export async function actualizar(req, res) {
  try {
    const { id } = req.params;
    const { name, price, status, stock } = req.body;
    const productoActualizado = await productService.actualizar(
      id,
      name,
      price,
      stock,
      status
    );
    res.status(201).json(productoActualizado);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "error en el servidor",
      error: error,
    });
  }
}

export async function eliminar(req, res) {
  try {
    const { id } = req.params;
    const productoEliminado = await productService.eliminar(id);
    res.status(200).json(productoEliminado);
  } catch (error) {
    res.status(500).json({
      mensaje: "error en el servidor",
      error: error,
    });
  }
}

export async function habilitar(req, res) {
  try {
    const { id } = req.params;
    const productoHabilitado = await productService.habilitar(id);
    res.status(200).json(productoHabilitado);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "error en el servidor",
      error: error,
    });
  }
}
