


import * as signalR from '@microsoft/signalr';

const connection = new signalR.HubConnectionBuilder()
    .withUrl("/gamehub")
    .build();

// Start the connection
await connection.start();

