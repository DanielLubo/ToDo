import { removeTodoFromState, getTodos } from "../state/todos-state";
import { saveTodos } from "../storage/local-storage";


/**
 * Elimina un todo por su ID
 * @param {String} id - ID del todo a eliminar
 */
export const deleteTodo = (id) => {
    removeTodoFromState(id);
    saveTodos(getTodos());
}