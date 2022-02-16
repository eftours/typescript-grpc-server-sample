import { GreeterServiceHandlers } from "../proto/greeter_service/GreeterService";

export const greeterHandler: GreeterServiceHandlers = {
	Greet: (call, callback) => {
		const { name, location } = call.request;
		callback(null, {
			greeting: `Hello, ${name}, how is the weather in ${location}?`,
		});
	},
}
