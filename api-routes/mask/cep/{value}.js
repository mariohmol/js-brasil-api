
const generateMaskApi = require('../../../utils/mask')

const {defaultExport, apiDoc} = generateMaskApi('cep')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


