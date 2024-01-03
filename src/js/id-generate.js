// const shortid = require('shortid');
import shortid from "shortid";
import showMessage from "./show-message";

export function createProfile(user){
    const userProfile = {
        userName: user,
        userId: shortid.generate(),
    }
    return userProfile
}

export function showUser () {
    const user = createProfile("Oleh");
    return showMessage(user);
}

// export {createProfile, showUser};
