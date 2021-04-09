
const jsBrasil = require('js-brasil')
function generateValidateApi(type){
const parameters = [
    {
      name: 'value',
      in: 'path',
      type: 'string',
      required: true,
      description: type.toUpperCase()+" a validar",
    },
  ]
// Showing that you don't need to have apiDoc defined on methodHandlers.
const defaultExport = {
  parameters,
  get: [
    function (req, res, next) {
    if(!jsBrasil.validateBr[type]){
        return res.sendStatus(404)
      }
      res.status(200).json({
        result: jsBrasil.validateBr[type](req.params.value)
      });
    },
  ]
};

const apiDoc = {
  description: 'Validate '+type.toUpperCase(),
  operationId: 'validate'+type.toUpperCase(),
  tags: ['validate'],
  parameters,
  responses: {
    204: {
      description: type.toUpperCase()+' were successfully validated.',
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
module.exports = generateValidateApi