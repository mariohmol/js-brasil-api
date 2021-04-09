
const generateFakerApi = require('../../utils/faker')

const {defaultExport, apiDoc} = generateFakerApi('pis')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


