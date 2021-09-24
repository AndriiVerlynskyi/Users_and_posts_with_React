import React from 'react';
import { get } from '../shared/ApiHelper.js';

export default async function getUsers () {
    const users = await get('https://jsonplaceholder.typicode.com/users');
    return users
}