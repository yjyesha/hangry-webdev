
var TestSchema = mongoose.Schema({
    message: String
});

var TestModel = mongoose.model("TestModel", TestSchema);

function findAllMessages(req, res) {
    TestModel
        .find()
        .then(
            function(tests) {
                res.json(tests);
            },
            function(err) {
                res.status(400).send(err);
            }
        );
}

function createMessage(req, res) {
    TestModel
        .create(req.body)
        .then(
            function(test) {
                res.json(test);
            },
            function(err) {
                res.status(400).send(err);
            }
        );
}

function deleteMessage(req, res) {
    TestModel
        .remove({_id: req.params.id})
        .then(
            function(result) {
                res.json(result);
            },
            function(err) {
                res.status(400).send(err);
            }
        );
}