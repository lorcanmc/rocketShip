

async function getData() {
    let response = await fetch("https://task-escape-api.herokuapp.com/api")
    let data = await response.json();

    console.log(data);
    console.log(data.message);
    console.log(data.map);
    let logs = data.map[0];
    console.log(logs);
}

getData();

//https://task-escape-api.herokuapp.com/api/logs

async function getLogs() {
    let response = await fetch("https://task-escape-api.herokuapp.com/api/logs")
    let data = await response.json();

    console.log("logs: " + data[0]);
    data.forEach(function(object) {
        console.log(object.date);
        console.log(object.activity);
        console.log(object.result);
    })
}

getLogs();
