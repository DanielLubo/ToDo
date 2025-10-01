import { v4 as uuid } from "uuid";

const VALID_PRIORITIES = ['high', 'medium', 'low'];

export class Todo  {
    constructor(description, priority = 'low'){
        this.id = uuid();

        if(!description || description.trim() === ''){
            throw new Error ('La descripcion de la tarea no puede estar vacia');
        }
        this.text = description.trim();
        this.completed = false;
        this.date = new Date();

        const normalizedPriority  = priority.toLowerCase();
        if(VALID_PRIORITIES.includes(normalizedPriority)){
            this.priority = normalizedPriority;
        } else {
            console.log(`Prioridad inválida: "${priority}". Se asignó 'low'.`);
            this.priority = 'low';
        }
    }
}