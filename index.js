#!/usr/bin/env node

// Function to log your details in the terminal 
function logDetails() {
    const message = "Hi, I'm Aditya 👋Software Engineer + Content Creator. I love creating content, building things and helping people. Open to talk anywhere 😁."
    const linkedInLink = "https://www.linkedin.com/in/adityat1702/";
    const websiteLink = "https://adityatrivedi.in/";
    const youtubeLink = "https://www.youtube.com/@Coding_Adda";

    // Create a colorful box using ANSI enscape codes
    const colorfulBox = `  \x1b[38;5;51m+---------------------------------------------------------------+
    |   \x1b[38;5;105m${message}\x1b[38;5;51m    |
    +---------------------------------------------------------------+
    | \x1b[38;5;93mYoutube:\x1b[0m \x1b[38;5;39m${youtubeLink}                     \x1b[38;5;51m|
    | \x1b[38;5;93mLinkedIn:\x1b[0m \x1b[38;5;39m${linkedInLink}                 \x1b[38;5;51m|
    | \x1b[38;5;93mPortfolio:\x1b[0m  \x1b[38;5;39m${websiteLink}                      \x1b[38;5;51m|
    +----------------------------------------------------------------+\x1b[0m`;

    // Log the colorful box in the terminal
    console.log(colorfulBox);
}

logDetails();