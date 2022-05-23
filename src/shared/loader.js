import User from "../user/model.js";

await User.sync();

export {User}