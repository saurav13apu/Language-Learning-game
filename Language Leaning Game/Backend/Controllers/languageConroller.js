import db from "../config/db.js";

export const languageController = async (req, res) => {
  const lang_data = await db.query(
    `SELECT lang_id FROM languages WHERE lang_name = '${req.params.language_name}'`
  );
  const lang_id = lang_data[0][0].lang_id;
  const user_id = parseInt(req.headers["user-id"]);
  const exercise_data = await db.query(
    `SELECT excercise_count FROM user_language WHERE lang_id = '${lang_id}' AND user_id = '${user_id}'`
  );
  const exercise_count = exercise_data[0][0].excercise_count;
  const level_data = await db.query(
    `SELECT level FROM user_language WHERE lang_id = '${lang_id}' AND user_id = '${user_id}'`
  );
  const level = level_data[0][0].level;
  const exercise_id_data = await db.query(
    `SELECT excercise_id FROM excercises WHERE level = '${level}' AND lang_id = '${lang_id}'`
  );
  let exercise_id = [];
  exercise_id = exercise_id_data[0].map((ele) => {
    return ele.excercise_id;
  });
  exercise_id.sort();
  const current_exercise = exercise_id[exercise_count];
  const questions_data = await db.query(
    `SELECT * FROM questions WHERE excercise_id = '${current_exercise}'`
  );
  const questions = questions_data[0];
  console.log(questions);
  res.json(questions);
};
