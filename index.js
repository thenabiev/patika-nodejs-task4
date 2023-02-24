const fs=require('node:fs');


const create=()=>{
    fs.writeFile("employees.json", ' {"name": "Employee 1 Name", "salary": 2000}', 'utf-8', (err)=>{
        if(err){
        console.log(err);

        }
    setTimeout(()=>{
        console.log("File created successfully");
    })

    })
    console.log('create');
}

async function read(){
    await create();

    setTimeout(()=>{
        fs.readFile("employees.json", 'utf-8', (err, data)=>{
            if(err){
                console.log(err);
            }
        setTimeout(()=>{
            console.log(data);
    })
        })
    },1000)
    console.log("read");
}


const del=async()=>{
    await read();

    setTimeout(()=>{
        fs.unlink('employees.json', (err)=>{   // 10 saniyə sonra "employees.json faylı silinəcək"
            if(err){
                console.log(err);
            }
            console.log("Deleting is successful");
        })
    }, 10000)

    console.log("del");
}

function completeTask(){
    del()
}

completeTask()