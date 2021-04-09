
const generateMaskApi = require('../../../utils/mask')

const {defaultExport, apiDoc} = generateMaskApi('titulo')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


