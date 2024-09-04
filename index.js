const readline = require('readline');
const fs = require('fs');
const http = require('http');

const html = fs.readFileSync('./template/index.html', 'utf-8')

const server = http.createServer((req,res) => {
   let path = req.url;
   
   if(path === '/' || path.toLocaleLowerCase() === '/home'){
    res.writeHead(200);

     const homePage = `
    <h3>Welcome to my life</h3>
    

`;

    res.end(html.replace('{{%CONTENT%}}', homePage));

   }else if(path.toLocaleLowerCase() === '/about_me'){
    res.writeHead(200, {
        'Content-Type' : 'text/html',
        'my-header' : 'Hello World'
    });

    const about_me= `
    <h3>Personal Information</h3>
    <p>Mac Iroh Adeva </p>
    <p>Mangangan 1 Baco </p>
    <p>Oriental Mindoro</p>

`;
   res.end(html.replace('{{%CONTENT%}}', about_me));

   }else if(path.toLocaleLowerCase() === '/contact'){
    res.writeHead(200, {
        'Content-Type' : 'text/html',
        'my-header' : 'Hello World'
    });

    const contactInfo = `
        <h3>Contact Information</h3>
        <p>Email: adevamac2004@gmail.com</p>
        <p>Phone: (09263882474)</p>
    `;
    res.end(html.replace('{{%CONTENT%}}', contactInfo));

   }else if(path.toLocaleLowerCase() === '/educational_attainment'){
    res.writeHead(200, {
        'Content-Type' : 'text/html',
        'my-header' : 'Hello World'
    });

    const educational_attainment = `
        <h3>Primary</h3>
        <p>Mangangan 1 Baco </p>
        <h3>Secondary</h3>
        <p>Jose D. Udasco</p>
    `;
    res.end(html.replace('{{%CONTENT%}}', educational_attainment));
   }else if(path.toLocaleLowerCase() === '/favorite_music'){
    res.writeHead(200, {
        'Content-Type' : 'text/html',
        'my-header' : 'Hello World'
    });

    const favorite_music = `
        <h3>WORSHIP SONG</h3>
        
    `;
    res.end(html.replace('{{%CONTENT%}}', favorite_music));
   }
   else{
    res.writeHead(404, {
        'Content-Type' : 'text/html',
        'my-header' : 'Hello World'
    });
    res.end(html.replace('{{%CONTENT%}}', 'Page not Found!'));
   }

});

server.listen(3034,'127.0.0.1',() => {
    console.log('Server has started');
});