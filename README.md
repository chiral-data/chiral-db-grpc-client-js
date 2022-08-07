# gPRC JavaScript/TypeScript Client for ChiralDB

## Examples
- [TypeScript Example](https://github.com/grpc/grpc-web/tree/master/net/grpc/gateway/examples/echo/ts-example), [Build TypeScript Client](https://github.com/grpc/grpc-web/blob/master/net/grpc/gateway/docker/ts_client/Dockerfile)

## Install protobuf

- To have ```protoc``` available, [Installing protoc](http://google.github.io/proto-lens/installing-protoc.html)
- Install protoc-gen-grpc-web
    - ```git clone git@github.com:grpc/grpc-web.git```
    - ```cd grpc-web```
    - change the file javascript/net/grpc/web/generator/Makefile if necessary by adding the followings
        - CPPFLAGS="-I/usr/local/opt/protobuf@3/include"
        - LDFLAGS="-L/usr/local/opt/protobuf@3/lib"
    -  ```sudo make install-plugin```


## Issues

### protoc-gen-js: program not found or is not executable
[Bug of protobuf](https://stackoverflow.com/questions/72572040/protoc-gen-js-program-not-found-or-is-not-executable), downgrade to version 20.1
```brew install protobuf@3.20```