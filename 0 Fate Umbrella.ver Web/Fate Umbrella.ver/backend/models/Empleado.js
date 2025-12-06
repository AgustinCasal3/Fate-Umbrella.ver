import mongoose from "mongoose";

const EmpleadoSchema = new mongoose.Schema({
    id: String,
    name: String,
    link: String
}, { collection: 'Empleados' });

export const Empleado = mongoose.model('Empleados', EmpleadoSchema);