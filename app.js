const http = require('http');

const server = http.createServer((req, res) => { // Corrected parameter order
    const url = req.url;
    console.log(url);
    if (url === '/') {
        // Set the content type header
        res.setHeader('Content-Type', 'text/html'); 

        res.write('<html>');
        res.write('<head><title>Nodejs web based application</title></head>');
        res.write('<body><h1>Nodejs web based application</h1>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message"> <button type="submit">Send</button>');
        res.write('</form></body>');
        res.write('</html>');
        return res.end();
    }
    // Handle other routes or provide a default response
    res.statusCode = 404;
    res.end('<h1>Page Not Found</h1>');
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
