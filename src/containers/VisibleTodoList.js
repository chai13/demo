import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (state) => {
  console.log(state)
  switch (state.visibilityFilter) {
    case VisibilityFilters.SHOW_ALL:
      return state.todos
    case VisibilityFilters.SHOW_COMPLETED:
      return state.todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return state.todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + state.visibilityFilter)
  }
}

export default connect(
  state => ({
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
    todos: getVisibleTodos(state)
  }),
  dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
  })
)(TodoList)
