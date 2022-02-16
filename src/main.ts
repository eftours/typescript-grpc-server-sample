import { Server, ServerCredentials } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import { loadPackageDefinition } from "@grpc/grpc-js";
import { ProtoGrpcType } from "../proto/greeter_service";
import { greeterHandler } from "./greeter.handler";

const proto = loadPackageDefinition(loadSync("./greeter_service.proto")) as unknown as ProtoGrpcType;

const grpcServer = new Server();
grpcServer.addService(proto.greeter_service.GreeterService.service, greeterHandler);
grpcServer.bindAsync("0.0.0.0:50051", ServerCredentials.createInsecure(), (err, port) => {
	if (err) {
		console.error(err);
	} else {
		console.log(`gRPC Server bound on port: ${port}`);
		grpcServer.start();
	}
});
