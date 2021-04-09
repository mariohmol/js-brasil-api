
const generateFakerApi = require('../../utils/faker')

const {defaultExport, apiDoc} = generateFakerApi('placa')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


