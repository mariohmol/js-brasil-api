
const generateFakerApi = require('../../utils/faker')

const {defaultExport, apiDoc} = generateFakerApi('titulo')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


