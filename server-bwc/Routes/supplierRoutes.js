const supplierRoutes = require("express").Router();
const supplierController = require("../Controller/supplierController");

// Get all suppliers
supplierRoutes.get("/", supplierController.getAllSuppliers);

// Get supplier by ID
supplierRoutes.get("/:id", supplierController.getSupplierById);

// Create a new supplier
supplierRoutes.post("/", supplierController.createSupplier);

// Update supplier by ID
supplierRoutes.put("/:id", supplierController.updateSupplier);

// Delete supplier by ID
supplierRoutes.delete("/:id", supplierController.deleteSupplier);

module.exports = supplierRoutes;
