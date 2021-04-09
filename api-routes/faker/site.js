
const generateFakerApi = require('../../utils/faker')

const {defaultExport, apiDoc} = generateFakerApi('site')
 module.exports =    defaultExport

  module.exports.get.apiDoc =  apiDoc


