import Activity from "./activity.model";
import Session from "./session.model";
import User from "./user.model";

User.hasMany(Session)
Session.belongsTo(User)
Session.hasMany(Activity)
Activity.belongsTo(Session)