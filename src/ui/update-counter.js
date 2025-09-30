import { getPendingCount } from "../state/todos-state";

/**
 * Actualiza el contador de tareas pendientes
 * @param {HTMLElement} element - Elemento donde se mostrará el contador
 */
export const updateCounter = ( element ) => {
    const pending = getPendingCount();
    element.textContent = pending === 0
        ? `!Felicidades, No tienes tareas pendientes 🎉`
        : `Tienes ${pending} tarea${pending > 1 ? 's' : ''} pendiente${pending > 1 ? 's': ''}`;
}