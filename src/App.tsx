import React, { useState } from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';
import axios from 'axios';
import {useEffect} from 'react';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    FetchUsers()
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

  return(
    <div>
      <Card variant={CardVariant.primary} width='200px' height='200px'>
        <button>
          Button
        </button>
        <div>Something</div>
      </Card>
      <UserList users={users}/>
    </div>
  );
};

export default App;