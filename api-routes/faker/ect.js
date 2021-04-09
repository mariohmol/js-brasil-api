
const generateFakerApi = require('../../utils/faker')

const {defaultExport, apiDoc} = generateFakerApi('ect')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


