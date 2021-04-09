
const generateMaskApi = require('../../../utils/mask')

const {defaultExport, apiDoc} = generateMaskApi('processo')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


