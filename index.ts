import {Authorization} from "./src/pages/authorization/authorization";
import {Registration} from "./src/pages/registration/registration";
import {Profile} from "./src/pages/profile/profile";
import {EditProfile} from "./src/pages/edit-profile/edit-profile";
import {ChangePassword} from "./src/pages/change-password/change-password";
import {NotFound} from "./src/pages/not-found";
import {Unavailable} from "./src/pages/unavailable";
import './src/shared/styles/auth-reg.scss'
import './src/shared/styles/profile.scss'
import './style.scss'

import {editProfileDataForm, profileDataForm} from "./src/shared/constants/profile-data-form";

const ROUTES: Record<string, string> = {
    '/': Authorization()({}),
    '/authorization': Authorization()({}),
    '/registration': Registration()({}),
    '/profile': Profile()({profileDataForm}),
    '/profile/edit': EditProfile()({editProfileDataForm}),
    '/change-password': ChangePassword()({}),
    '/not-found': NotFound()({}),
    '/unavailable': Unavailable()({})
}

window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app');

    if (root) {
        root.innerHTML = ROUTES[window.location.pathname];
    }
})
