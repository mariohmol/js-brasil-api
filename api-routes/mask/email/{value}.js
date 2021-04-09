
const generateMaskApi = require('../../../utils/mask')

const {defaultExport, apiDoc} = generateMaskApi('email')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


