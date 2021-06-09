import passportLocal from "passport-local";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const LocalStrategy = passportLocal.Strategy;

export default passport => {

	passport.use(new LocalStrategy({
		usernameField: "email",
	}, async (email, password, done) => {

    const userFindOne = await User.findOne({
      email: email,
    });

    if (!userFindOne) return done(null, false, {
      message: "no user with that email",
    });

    try {
      if (await bcrypt.compare(password, userFindOne.password)) {
        return done(null, userFindOne);
      } else {
        return done(null, false, {
          message: "password incorrect",
        });
      }
    } catch (error) {
      return done(error);
    }

  }));

  passport.serializeUser((user, done) => {

    return done(null, user.id);

  });

  passport.deserializeUser(async (id, done) => {

    await User.findById(id, (error, user) => {
      done(error, user);
    });

  });

}