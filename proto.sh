echo "Download the proto file from the repository chiral-db-grpc ..."
curl -O https://raw.githubusercontent.com/chiral-data/chiral-db-grpc/main/proto/chiral_db.proto
echo ""
# echo "Generate the protobuf stub files ..."
# mkdir -p ./proto_generated_js
# /usr/local/Cellar/protobuf@3/3.20.1/bin/protoc -I=./ chiral_db.proto --js_out=import_style=commonjs:./proto_generated_js --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./proto_generated_js
echo "Generate the protobuf stub files in TypeScript ..."
mkdir -p ./client_ts/proto_generated_ts
/usr/local/Cellar/protobuf@3/3.20.1/bin/protoc -I=./ chiral_db.proto --js_out=import_style=commonjs,binary:./client_ts/proto_generated_ts --grpc-web_out=import_style=typescript,mode=grpcweb:./client_ts/proto_generated_ts
echo ""
echo "Clean ..."
rm chiral_db.proto

