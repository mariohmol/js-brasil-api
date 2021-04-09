
const generateMaskApi = require('../../../utils/mask')

const {defaultExport, apiDoc} = generateMaskApi('celular')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


