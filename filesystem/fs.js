const { log } = require('console');
const fs = require('fs');

// fs.readFile('todo.txt', 'utf-8', (error, data)=>{
//     if(error){
//         console.log('Gagal membaca berkas');
//         return;
//     }
//     console.log(data);
// })

// const readableStream = fs.createReadStream('./filesystem/article.txt',{
//     highWaterMark: 10 //file akan dibaca per 10 bytes
// })

// readableStream.on('readable', ()=>{
//     try {
//         process.stdout.write(`[${readableStream.read()}]`);
//     } catch (error) {
//         console.log(error);
//     }
// })

// readableStream.on('end', () => {
//     console.log('Done');
// });

const readableStream = fs.createReadStream('./filesystem/input.txt', {
  highWaterMark: 14,
});

const writeStream = fs.createWriteStream('./filesystem/output.txt');

readableStream.on('readable', () => {
  try {
    const readChunk = readableStream.read();
    writeStream.write(`${readChunk}\n`);
  } catch (error) {
    log(error);
  }
});

readableStream.on('end', () => {
  writeStream.end();
  log('selesai');
});
