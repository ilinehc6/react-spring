import axios from "axios";

// to set this as an env variable
const REST_API_BASE_URL = "http://localhost:8080/api/employees";

export const ListEmployees = () => {
    return axios.get(REST_API_BASE_URL);
}

export const AddEmployee = (employee) => {
    return axios.post(REST_API_BASE_URL, employee)
}

export const getEmployee = (employeeId) => {
    return axios.get(REST_API_BASE_URL+ '/' +employeeId)
}

export const updateEmployee = (employeeId, employee) => {
    return axios.put(REST_API_BASE_URL+'/'+employeeId, employee)
}

export const deleteEmployee = (employeeId) => {
    return axios.delete(REST_API_BASE_URL+'/'+employeeId)
}