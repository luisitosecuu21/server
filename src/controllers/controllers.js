import { pool } from "../DB/db.js";

export const getTareas = async (req, res) => {
  try {
    const [response] = await pool.query("SELECT * FROM tasks");
    console.log(response);
    res.json(response);
  } catch (error) {
    res.status(500).send({ message: "error al obtener las tareas" });
  }
};

export const getTarea = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(id)
    const [response] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
      id,
    ]);
    console.log(response[0]);

    if (response[0] == undefined) {
      console.log("no hay ususarios");
      res.json({ message: "No hay una tarea asociada a ese ID" });
      return;
    }
    res.json(response[0]);
    console.log("si hay usuario");
  } catch (error) {
    res.status(500).json({ message: "error al obtener la tarea" });
  }
};

export const updateTarea = async (req, res) => {
  const { id, title, description } = req.body;
  try {
    console.log(id);
    const [response] = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
      req.body,
      id,
    ]);
    if (response.affectedRows === 0) {
      res.json({ message: "no se encontro la tarea" });
      return;
    }
    res.json({ message: "se actualizo la tarea" });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const crearTarea = async (req, res) => {
  const { title, description } = req.body;
  try {
    const [response] = await pool.query(
      "INSERT INTO tasks (title, description) VALUES (?,?)",
      [title, description]
    );
    if (response.affectedRows === 0) {
      res.json({ message: "no se creo la tarea" });
      return;
    }
    console.log(response);
    res.json({ message: "se creo la tarea con exito" });
  } catch (error) {
    res.status(500).send({ message: "error al crear una tarea" });
  }
};

export const deleteTarea = async (req, res) => {
  const { id } = req.body;
  try {
    const [response] = await pool.query("DELETE FROM tasks WHERE id = ?", [id]);

    if (response.affectedRows === 0) {
      // Si no se afectaron filas, entonces el ID no existe
      res
        .status(404)
        .json({ message: "Tarea no encontrada o ya fue eliminada" });
      return;
    }

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar la tarea" });
  }
};


export const pruebaConexion = async (req, res) => {
  const mensaje = "holaaa"
  try {
    const results = await pool.query('SELECT * from empresas')



    console.log("results>>>>>>>> \n" + JSON.stringify(results));

    return {
      statusCode: 200,
      message: mensaje,
    };
  } catch (error) {
    console.log("error>>>> \n" + error);
    return {
      statusCode: 500,
      message: error,
    };
  }
}