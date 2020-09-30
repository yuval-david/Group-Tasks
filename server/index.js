const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

/**** Connect to SQL ****/
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tasksdb"
});

db.connect(
    (err) => {
        if (err) {
            throw err;
        }
        console.log("Connect - SQL")
    }
);
/************************/



/****** Requests *******/

/* GET all MEMBERS */
app.get("/members", async (req, res) => {
    let q = `SELECT * FROM family_members`;

    try {
        const results = await Query(q);
        console.log(results);
        res.json(results);
        res.status(201);
    }
    catch (err) {
        res.sendStatus(500);
        throw err;
    }
});

/* GET all TASKS */
app.get("/tasks", async (req, res) => {
    let q = `SELECT * 
    FROM tasks
    INNER JOIN family_members
    ON tasks.member_id = family_members.memberID`;

    try {
        const results = await Query(q);
        console.log(results);
        res.json(results);
        res.status(201);
    }
    catch (err) {
        res.sendStatus(500);
        throw err;
    }
});

/* ADD a TASK */
app.post("/add", async (req, res) => {
    const { taskDescription, member_id } = req.body;
    let q = `INSERT INTO tasks
    (taskDescription, member_id)
    VALUES
    ("${taskDescription}", ${member_id})`;

    try {
        const results = await Query(q);
        console.log(results);
        res.json(results);
        res.status(201);
    }
    catch (err) {
        res.sendStatus(500);
        throw err;
    }
});

/* DELETE a TASK */
app.delete("/delete/:id", async (req, res) => {
    let q = `DELETE 
    from tasks
    WHERE taskID =${req.params.id}`;

    try {
        const results = await Query(q);
        console.log(results);
        res.json(results);
        res.status(201);
    }
    catch (err) {
        res.sendStatus(500);
        throw err;
    }
});

/**********************/


app.listen(1000, console.log("Server is working! :)"));

/* פונקציה כדי להפוך את הספריה של אסקיואל לבעלת יכולת להחזיר הבטחה */
function Query(q) {
    return new Promise((resolve, reject) => {
        db.query(q, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    })
};