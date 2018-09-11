const express = require('express');
const port = 8080;

express().use(express.static(__dirname)).listen(port);

console.log(`HTTP server running on port ${port}`);
