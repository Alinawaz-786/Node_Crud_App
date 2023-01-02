const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');
const employeeController = require('../controller/EmployeeController');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/add-user', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/update-user', services.update_user)


// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

// Employee
/**
 *  @description add Employee
 *  @method GET /add-employee
 */
route.get('/employee/create', services.create_employee)
//API's
route.post('/api/employee_create',employeeController.EmployyeCreate)
route.get('/api/employee_list',employeeController.EmployyeList)


module.exports = route