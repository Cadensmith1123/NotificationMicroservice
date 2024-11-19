const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

// Parse cookies
app.use(cookieParser());

// HTTP request handler
app.get("/", (req, res) => {
    const isFirstTime = !req.cookies.firstTimeUser;
    const accessDate = new Date().toLocaleString(); // Current date and time

    if (isFirstTime) {
        // Set a cookie to indicate the user has visited
        res.cookie("firstTimeUser", "false", { maxAge: 24 * 60 * 60 * 1000 }); // Expires in 1 day

        // Display message in the command prompt
        console.log(`Accessed: [${accessDate}] New user detected. Display Help Notification`);
       

        // Respond to the HTTP request
        res.send(`Accessed: ${accessDate} 
        ================================
        Welcome to Our Service!
        This is your first visit.
        Here's a quick guide to get started:
        ================================`);
    } else {
        // Display returning user message in the command prompt
        console.log(`Accessed: [${accessDate}] Returning user detected. Display Welcome Back Message`);
        

        // Respond to HTTP request
        res.send(`Accessed: ${accessDate} 
            Welcome back!`);
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log("Waiting for incoming requests...");
});
