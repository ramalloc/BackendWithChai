import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Home Page !");
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "A joke",
            "content": "This is a joke"
        },
        {
            "id": 2,
            "title": "Another joke",
            "content": "This is another joke"
        },
        {
            "id": 3,
            "title": "A third joke",
            "content": "This is a third joke"
        },
        {
            "id": 4,
            "title": "A fourth joke",
            "content": "This is a fourth joke"
        },
        {
            "id": 5,
            "title": "A fifth joke",
            "content": "This is a fifth joke"
        }
    ];

    res.send(jokes);

})

app.listen(port, (req, res) => {
    console.log(`Server is listening at port no. ${port}!`);
})