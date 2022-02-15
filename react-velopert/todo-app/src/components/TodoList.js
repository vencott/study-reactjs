import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

// 리스트 관련 컴포넌트를 작성할 때는 1) 리스트 2) 리스트 아이템 을 모두 최적화하는 것이 좋다
export default React.memo(TodoList);
