const express = require("express");
const routes = require("./routes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
