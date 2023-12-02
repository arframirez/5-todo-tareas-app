import { Todo } from "../models/todos";


/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML = (todo) => {
    if (!todo) throw new Error ('A TODO object is required')

    const { done, description, id } = todo

    const html = `
    <div class="view">
        <input class="toggle" type="checkbox" ${ todo.done ? 'checked': ''}>
        <label>${description}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
`;

    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', id);

    if(done)
    liElement.classList.add('completed')


    return liElement;
}