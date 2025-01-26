


import * as signalR from '@microsoft/signalr';

const connection = new signalR.HubConnectionBuilder()
    .withUrl("/gamehub")
    .build();

// Start the connection
await connection.start();

// Create a room
const roomId = await connection.invoke("CreateRoom", "Alice");

// Join a room
const success = await connection.invoke("JoinRoom", "ROOM_ID", "Bob");

// Submit a choice
await connection.invoke("SubmitChoice", "ROOM_ID", "A");

// Toggle ready state