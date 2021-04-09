
const generateFakerApi = require('../../utils/faker')

const {defaultExport, apiDoc} = generateFakerApi('renavam')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


