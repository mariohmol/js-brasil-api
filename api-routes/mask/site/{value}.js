
const generateMaskApi = require('../../../utils/mask')

const {defaultExport, apiDoc} = generateMaskApi('site')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


