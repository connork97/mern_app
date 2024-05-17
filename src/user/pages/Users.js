import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {

    const USERS = [
        {
            id: 'u1',
            name: 'Connor Kormos',
            image: 'https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg',
            places: 3
        }
    ];

    return (
        <UsersList items={USERS} />
    );
};

export default Users;