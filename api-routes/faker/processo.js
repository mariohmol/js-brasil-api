
const generateFakerApi = require('../../utils/faker')

const {defaultExport, apiDoc} = generateFakerApi('processo')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


