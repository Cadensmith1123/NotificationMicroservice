# NotificationMicroservice
Microservice which listens for requests on a server and responds with data based on whether they're a returning user or not.

# Request Data
To request data from Notification Microservice send a HTTP get request to the correct server endpoint.

# Request Example Call

const axios = require("axios");

async function makeRequest() {

    try {  
        const response = await axios.get("http://localhost:3000");
    } catch (error) {
        console.error("Error making request:", error.message);
    }
}
makeRequest();

# Receive Data
Receive data by sending HTTP request to the exposed endpoint.

# Receive Data Example

 const axios = require("axios");

 async function receiveData() {
    
    try {
        const response = await axios.get("http://localhost:3000");
        console.log("Received Data from Noti.js:", response.data);
    } catch (error) {
        console.error("Error receiving data:", error.message);
    }
}

receiveData();

# UML Diagram

![Screenshot 2024-11-18 171046](https://github.com/user-attachments/assets/34a3132d-4ee2-49a8-9d36-d8d4886ba274)
