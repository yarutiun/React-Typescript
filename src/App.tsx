import React, { useState } from 'react';
import Card, { CardVariant } from './components/Card';
import { ITodo, IUser } from './types/types';
import axios from 'axios';
import {useEffect} from 'react';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import EventExample from './components/EventsExample';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    FetchUsers()
    FetchTodos()
  }, [])
  
  async function FetchUsers() {
    try{
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    }
    catch(e){
      alert(e);
    }
  }

  async function FetchTodos() {
    try{
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodos(response.data);
    }
    catch(e){
      alert(e);
    }
  }

  return(
    <div>
      <EventExample />
      <Card variant={CardVariant.primary} width='200px' height='200px'>
        <button>
          Button
        </button>
        <div>Something</div>
      </Card>
      <List
      items={users}
      renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
      />

      <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
      />
      
    </div>
  );
};

export default App;