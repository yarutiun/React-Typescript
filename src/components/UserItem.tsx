import React from "react";
import { IUser } from "../types/types";

interface UserItemProps{
    user: IUser;
}

const UserItem: React.FC<UserItemProps> = ({user}) => {
    return(
            <div style={{padding: 15, border: '1px solid gray'}}>
                    {user.id}. {user.name} lives in {user.address.city} on {user.address.street} {user.address.zipcode} and has this mail: {user.email} 
            </div>
    )
}

export default UserItem;