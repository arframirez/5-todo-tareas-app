import { Todo } from "../todos/models/todos.js";

const Filter = {
    All: 'all',
    completed:'completed',
    pendings:'Pending'
}

const state = {
    todos: [
        new Todo('piedra del alma'),
        new Todo('piedra del mente'),
        new Todo('piedra del tiempo'),
        new Todo('piedra del realidad'),
        new Todo('piedra del poder'),
    ],
    filter : Filter.All,
}

const initStore = () => {
    console.log(state);
    console.log('initStore'); 
};

const loadStore = () => {
    throw new Error('Not Implemented')
}


const getTodos = ( filter = Filter.All) => {

    switch (filter) {
        case filter.All:
            return [...state.todos]

        case Filter.completed:
            return state.todos.filter( todo => todo.done)
    
         case Filter.pendings:
                return state.todos.filter( todo => !todo.done);
        
        default:
            throw new Error(`Option ${ filter} is not valid.`);
            }   
    
    }

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if (!description )throw new Error('Description is required');
    state.todos.push(new Todo(description));
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    
    state.todos = state.todos.map( todo => {
        if (todo.id === todoId ){
            todo.done = !todo.done;
        }
        return todo;
    })
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId )
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done )
}

/**
 * 
 * @param {Filter} newFilter 
 */
const setFilter = (newFilter = Filter.All) => {
    state.filter = newFilter
}
const getCurrentFilter = () => {
    return state.filter;
}

export default {
    initStore,
    loadStore,
    deleteCompleted,
    toggleTodo,
    setFilter,
    getTodos,
    getCurrentFilter,
    deleteTodo
}