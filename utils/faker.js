
const jsBrasil = require('js-brasil')
function generateFakerApi(type){
const parameters = []
// Showing that you don't need to have apiDoc defined on methodHandlers.
const defaultExport = {
  parameters,
  get: [
    function (req, res, next) {
      if(!jsBrasil.fakerBr[type]){
        return res.sendStatus(404)
      }
      res.status(200).json({
        value: req.params.value,
        result: jsBrasil.fakerBr[type](req.params.value)
      });
    },
  ]
};

const apiDoc = {
  description: 'Faker '+type.toUpperCase(),
  operationId: 'faker'+type.toUpperCase(),
  tags: ['faker'],
  parameters,
  responses: {
    204: {
      description: type.toUpperCase()+' were successfully faked.',
      // 204 should not return a body so not defining a schema.  This adds an implicit
      // schema of {"type": "null"}.
    },
  },
};
return {
    defaultExport,
    parameters,
    apiDoc
}
}
module.exports = generateFakerApi