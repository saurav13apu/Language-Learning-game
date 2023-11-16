import db from '../config/db.js'

module.exports.getLangId = async(language_name) => {
    const lang_id = await db.execute('SELECT lang_id from languages where language_name = '. language_name);
}