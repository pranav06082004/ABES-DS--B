import http from 'http';

const server = http.createServer((req, res) => {
   if(req.url === '/'){
      res.end('welcome to our home page');
   }
   else if(req.url === '/this_is_content_page'){
    res.end('<h1>We are Student of ABES ENGG COLLEGE</h1><img src="https://avatars.githubusercontent.com/u/48626910?s=280&v=4" alt="College Image">');
   }
    else if(req.url === '/contact'){
    res.end('Contact us at: 123-456-7890');
   }
   else{
    res.end('404 page is not found');

   }

});

server.listen(8080,()=>console.log('Server is running on port 8080'));