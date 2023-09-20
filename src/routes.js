const { Router } =  require("express");

const routes = Router();

routes.get("/", (req, res) => {
    res.json({ message: "Hello World" });
})

routes.get("/test", (req, res) => {
    res.json({ message: "API running sucessfully" });
})

module.exports = routes;
