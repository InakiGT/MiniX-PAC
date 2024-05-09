import { Strategy } from 'passport-local';
import AuthManager from '../../auth/model/AuthManager';

const manager = new AuthManager();

const LocalStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password',
}, async ( email, password, done ) => {
    try {
        const user = await manager.getUser(email, password);

        done(null, user);
    } catch(err) {
        done(err, false);
    }
});

export default LocalStrategy;