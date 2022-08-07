const { ChiralDbClient } = require('./proto_generated/chiral_db_grpc_web_pb');
// const { RequestDescription, ReplyDescription } = require('./proto_generated/chiral_db_pb');

const { Client } = require('./client')

var chiralDBService = new ChiralDbClient('http://demo.chiral.one:8080')
var client = Client("http://demo.chiral.one", "8080")
// var requestDesc = new RequestDescription();

// chiralDBService.getDescription(requestDesc, {}, function(err, response) {
//     console.log(err);
//     console.log(response.getDesc());
// });

client.get