const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const HOST = '127.0.0.1';
const PORT = 20213;

server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    server.close();
});

server.on('message', (msg, info) => {
    console.log(`server got: ${info.port}:${msg} `);
    server.send("d",info.port,'localhost',function(error){
        if(error){
          server.close();
        }else{
          console.log('Data sent !!!');
          server.close();
        }
      });
});

server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
});



server.bind({
    address: HOST,
    port: PORT,
    exclusive: true
});
