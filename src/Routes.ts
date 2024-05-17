import express from "express";
import EmployeeController from "./controllers/EmployeeController";

const router = express.Router();

router.get("/api/employees/:id", EmployeeController.getEmployee);

router.get("/api/employees", EmployeeController.fetchEmployee);

router.post("/api/employees", EmployeeController.createEmployee);

router.put("/api/employees/:id", EmployeeController.updateEmployee);

router.delete("/api/employees/:id", EmployeeController.deleteEmployee);

export default router;
