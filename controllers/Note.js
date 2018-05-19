module.exports = {

    // find one note
    find: function(req, res) {
        db.Note.find({ _headlineId: req.params.id })
        .then(function(dbNote) {
            res.json(dbNote);
        });
    },
    // create new note
    create: function(req, res) {
        db.Note.create(req.body)
        .then(function(dbNote) {
            res.json(dbNote);
        });
    },
    // delete note with an id
    delete: function(req, res) {
        db.Note.remove({ _id: req.params.id })
        .then(function(dbNote) {
            res.json(dbNote);
        });
    }
};