import express from "express";
import app from "../app.js";
import montadoras from "./montadorasRoutes.js";
import cars from "./carsRoutes.js";
import tipos from "./tiposRoutes.js";
const routes =(app) => {
    app.route('/').get((req, res) =>
    {
        res.status(200).send({titulo: "Curso de Node"})
    }
    )


app.use(
    express.json(),
    cars,
    montadoras,
    tipos,
)
}
export default routes;