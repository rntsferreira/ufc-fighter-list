module.exports = (Schema) => new Schema({
  wins: Number,
  statid: Number,
  losses: Number,
  last_name: String,
  weight_class: String,
  title_holder: Boolean,
  draws: Number,
  first_name: String,
  fighter_status: String,
  thumbnail: String
});