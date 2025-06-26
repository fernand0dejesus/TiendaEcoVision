import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const useDataEmployees = () => {
  const ApiRegister = "http://localhost:4000/api/registerEmployees";
  const ApiEmployees = "http://localhost:4000/api/employees";

  const [activeTab, setActiveTab] = useState("list");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dui, setDui] = useState("");
  const [address, setAddress] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [hireDate, setHireDate] = useState("");
  const [isssNumber, setIsssNumber] = useState("");
  const [errorEmpleado, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

  const cleanData = () => {
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setTelephone("");
    setDui("");
    setAddress("");
    setBirthdate("");
    setHireDate("");
    setIsssNumber("");
    setId("");
  };

  // Función corregida para guardar los datos del usuario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !name ||
      !lastName ||
      !email ||
      !password ||
      !telephone ||
      !dui ||
      !address ||
      !birthdate ||
      !hireDate ||
      !isssNumber
    ) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      setLoading(true);

      const newEmployee = {
        name,
        lastName,
        email,
        password,
        telephone,
        dui,
        address,
        // Convertir las fechas a ISO string para evitar errores de formato
        birthdate: new Date(birthdate).toISOString(),
        hireDate: new Date(hireDate).toISOString(),
        isssNumber,
      };

      console.log(newEmployee, "datos nuevo empleado");

      const response = await fetch(ApiRegister, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      });

      if (!response.ok) {
        // Verificar si la respuesta tiene contenido antes de intentar parsear JSON
        let errorMessage = "Hubo un error al registrar el empleado";
        
        try {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const errorResponse = await response.json();
            console.log("Error response del servidor:", errorResponse);
            errorMessage = errorResponse.message || errorMessage;
          } else {
            // Si no es JSON, leer como texto
            const errorText = await response.text();
            console.log("Error response (text):", errorText);
            errorMessage = errorText || errorMessage;
          }
        } catch (parseError) {
          console.log("Error parsing error response:", parseError);
          // Usar mensaje de error por defecto si no se puede parsear la respuesta
        }
        
        throw new Error(errorMessage);
      }

      const data = await response.json();
      toast.success("Empleado registrado");
      setEmployees(data);
      setSuccess("Empleado registrado correctamente");
      cleanData();
      fetchData();
    } catch (error) {
      setError(error.message);
      console.error("Error:", error);
      toast.error(error.message || "Ocurrió un error al registrar el empleado");
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener los datos de los empleados
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(ApiEmployees);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error al obtener los empleados");
    } finally {
      setLoading(false);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      const response = await fetch(`${ApiEmployees}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete employee");
      }

      const result = await response.json();
      console.log("Deleted:", result);
      toast.success("Empleado eliminado");
      fetchData();
    } catch (error) {
      console.error("Error deleting employee:", error);
      toast.error("Error al eliminar el empleado");
    }
  };

  const updateEmployee = (dataEmployee) => {
    setId(dataEmployee._id);
    setName(dataEmployee.name);
    setLastName(dataEmployee.lastName);
    setEmail(dataEmployee.email);
    setTelephone(dataEmployee.telephone);
    setDui(dataEmployee.dui);
    setAddress(dataEmployee.address);
    // Convierte fechas ISO a yyyy-mm-dd para mostrar en inputs tipo date
    setBirthdate(dataEmployee.birthdate ? dataEmployee.birthdate.split("T")[0] : "");
    setHireDate(dataEmployee.hireDate ? dataEmployee.hireDate.split("T")[0] : "");
    setIsssNumber(dataEmployee.isssNumber);
    setError(null);
    setSuccess(null);
    setActiveTab("form");
  };

  // Función corregida para actualizar empleado
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const updatedEmployee = {
        name,
        lastName,
        email,
        password,
        telephone,
        dui,
        address,
        birthdate: new Date(birthdate).toISOString(),
        hireDate: new Date(hireDate).toISOString(),
        isssNumber,
      };

      const response = await fetch(`${ApiEmployees}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEmployee),
      });

      if (!response.ok) {
        let errorMessage = "Error al actualizar el empleado";
        
        try {
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const errorResponse = await response.json();
            errorMessage = errorResponse.message || errorMessage;
          } else {
            const errorText = await response.text();
            errorMessage = errorText || errorMessage;
          }
        } catch (parseError) {
          console.log("Error parsing error response:", parseError);
        }
        
        throw new Error(errorMessage);
      }

      toast.success("Empleado actualizado");
      setSuccess("Empleado actualizado correctamente");
      cleanData();
      setId("");
      setActiveTab("list");
      fetchData();
    } catch (error) {
      setError(error.message);
      console.error("Error:", error);
      toast.error(error.message || "Error al actualizar el empleado");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    activeTab,
    setActiveTab,
    id,
    setId,
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    telephone,
    setTelephone,
    dui,
    setDui,
    address,
    setAddress,
    birthdate,
    setBirthdate,
    hireDate,
    setHireDate,
    isssNumber,
    setIsssNumber,
    errorEmpleado,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    employees,
    setEmployees,
    cleanData,
    handleSubmit,
    fetchData,
    deleteEmployee,
    updateEmployee,
    handleUpdate,
  };
};

export default useDataEmployees;