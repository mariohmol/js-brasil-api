
const generateFakerApi = require('../../utils/faker')

const {defaultExport, apiDoc} = generateFakerApi('email')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


