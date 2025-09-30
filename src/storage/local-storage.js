const STORAGE_KEY = 'todosListState';


/**
 * Guarda los todos en localStorage
 * @param {Array} todos - Lista de ToDos a guarda
 */
export const saveTodos = ( todos ) => {
    localStorage.getItem(STORAGE_KEY, JSON.stringify(todos));
}


/**
 * Carga los todos desde localStorage 
 * @returns {Array|null}  Lista de todos o null si no existe
 */
export const loadTodos = () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
}


/**
 * Limpia todos los datos del localStorage
 */
export const clearTodos = () => {
    localStorage.removeItem(STORAGE_KEY);
}