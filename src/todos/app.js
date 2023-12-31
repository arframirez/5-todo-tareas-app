import todoStore from "../store/todo.store";
import html from "./app.html?raw"
import { renderTodos } from "./use-cases";


const ElementIDs = {
    todoList:'.todo-list'
}
/**
 * 
 * @param {String} elementId 
 */
export const App = ( elementId ) => {

const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos()
}
    //Cuando la funcion App() se llama
    (()=> {
        const app = document.createElement(`div`);
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
    })()
}