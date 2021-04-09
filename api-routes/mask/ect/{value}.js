
const generateMaskApi = require('../../../utils/mask')

const {defaultExport, apiDoc} = generateMaskApi('ect')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


