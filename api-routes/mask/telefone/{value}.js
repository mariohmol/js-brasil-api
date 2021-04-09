
const generateMaskApi = require('../../../utils/mask')

const {defaultExport, apiDoc} = generateMaskApi('telefone')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


