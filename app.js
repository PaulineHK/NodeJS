const express =require('express');
const app = express();


app.get("/", function (req, res) {
    console.log("Hello Node!");
});
app.listen(8080);

