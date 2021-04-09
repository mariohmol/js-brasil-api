
const jsBrasil = require('js-brasil')
function generateMaskApi(type){
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
      if(!jsBrasil.maskBr[type]){
        return res.sendStatus(404)
      }
      res.status(200).json({
        value: req.params.value,
        result: jsBrasil.maskBr[type](req.params.value)
      });
    },
  ]
};

const apiDoc = {
  description: 'Mask '+type.toUpperCase(),
  operationId: 'mask'+type.toUpperCase(),
  tags: ['mask'],
  parameters,
  responses: {
    204: {
      description: type.toUpperCase()+' were successfully masked.',
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
module.exports = generateMaskApi