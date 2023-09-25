import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

const App = () => {
  const users: IUser[] = [
    {id: 1, name: 'bob', email: 'lol@gmail.com', address: {city: 'Capetown', street: 'momma str.', zipcode: '12345'}},
    {id: 2, name: 'rob', email: 'zaz@gmail.com', address: {city: 'Capetown', street: 'pappa str.', zipcode: '54321'}}
  ]
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