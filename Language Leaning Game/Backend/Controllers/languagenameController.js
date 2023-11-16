import db from "../config/db.js";

export const languagenameController = async (req, res) => {
  const lang_data = await db.query(
    `SELECT lang_id FROM languages WHERE lang_name = '${req.params.languagename}'`
  );
  const lang_id = lang_data[0][0].lang_id;
  console.log(lang_id);
  const user_id = parseInt(req.headers["user-id"]);
  const level = await db.query(
    `SELECT level FROM user_language WHERE lang_id = '${lang_id}' AND user_id = '${user_id}'`
  );
  console.log(level);
  const level_cnt = level[0][0].level;
  res.json(level_cnt);
};
