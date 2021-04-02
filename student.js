const fs = require('fs');
let filerdata=[];
console.log('\n');
let writeStream = fs.createWriteStream('student.txt');
writeStream.write( 'Davitt Maruxyan,25 \n Davit Abgaryan,27 \n Vardan Grigoryan,33 \n Hayk Melikyan,11 \n Amran Khachatryan,26 \n Sahak chicheminyan,21');
writeStream.on('finish', () => {
   console.log('good write');
});

writeStream.end();
let students=[];

fs.readFile('student.txt', 'utf8', function (err,data) {
   if (err) {
      return console.log(err);
   }
   
   processData(data)
   print(students);
})


function processData(data){
   let filerdata = data.split('\n');
   filerdata.forEach(d=>{
      let stData = d.split(',');
      //console.log(stData);
      let student={};
      student.firstName = stData[0].trim().split(' ')[0]
      student.lastName = stData[0].trim().split(' ')[1];
      student.age = stData[1];
      students.push(student);
  })
}

function print(students){
   students.forEach(s=>{
      console.log(`firstName:${s.firstName} lastname:${s.lastName} age:${s.age}`);
      //console.log("firstName:"+s.firstName+" lastname:"+s.lastName+" age:"+s.age);)
   })
}
