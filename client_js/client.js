const { ChiralDbClient } = require('./proto_generated/chiral_db_grpc_web_pb');
const { RequestDescription } = require('./proto_generated/chiral_db_pb');

class Client {
    constructor(host, port) {
        this.channel = new ChiralDbClient(host + ":"  + port);
    }

    get_description(success, error) { // callback: function (desc)
        this.channel.getDescription(new RequestDescription(), {}, function(err, reply_description) {
            if (err) {
                error(err);
            } else {
                success(reply_description.getDescription());
            }
        })
    }
}

module.exports.Client = Client;