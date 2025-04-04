require("dotenv").config();
const express = require("express");
const {Pool} = require("pg");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

//POSTGRESQL Connections...
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

//GET all projects
app.get("/projects", async (req, res)=>{
    try{
        const result = await pool.query("SELECT * FROM completed_projects");
        res.json(result.rows);
    }catch(err) {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});

app.post("/projects", async(req, res) => {
    try{
        const {project_name, description, date_completed, technologies_used, project_url} = req.body;

        //Insert data
        const result = await pool.query(
            "INSERT INTO completed_projects (project_name, description, date_completed, technologies_used, project_url) VALUES ($1,$2,$3,$4,$5) RETURNING *",
            [project_name, description, date_completed, technologies_used, project_url]
        );
        res.status(201).json(result.rows[0]);
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));