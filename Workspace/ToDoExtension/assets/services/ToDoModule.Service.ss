
function service(request, response)
{
	'use strict';
	try 
	{
		require('Acme.ToDoExtension.ToDoModule.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('Acme.ToDoExtension.ToDoModule.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}