import db from '../config/db.js'

export const langIdController = async(req, res)=>{
    const lang_data = await db.query(`SELECT lang_id FROM languages WHERE lang_name = '${req.params.language_name}'`)
    const lang_id = lang_data[0][0].lang_id;
    res.json(lang_id);
}