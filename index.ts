import {Authorization} from "./src/pages/authorization/authorization";
import {Registration} from "./src/pages/registration/registration";
import {Profile} from "./src/pages/profile/profile";
import {EditProfile} from "./src/pages/edit-profile/edit-profile";
import {ChangePassword} from "./src/pages/change-password/change-password";
import {ChatList} from "./src/pages/chat-list/chat-list";
import {NotFound} from "./src/pages/not-found";
import {Unavailable} from "./src/pages/unavailable";
import './src/shared/styles/auth-reg.scss'
import './src/shared/styles/profile.scss'
import './src/pages/chat-list/chat-list.scss'
import './style.scss'
import {Block} from "./src/shared/utils/block";

// @ts-ignore
const ROUTES: Record<string, Block> = {
    '/': new Authorization(),
    '/authorization': new Authorization(),
    '/registration': new Registration(),
    '/profile': new Profile(),
    '/profile/edit': new EditProfile(),
    '/change-password': new ChangePassword(),
    '/chat': new ChatList(),
    '/not-found': new NotFound(),
    '/unavailable': new Unavailable()
}


window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app');
    const component = ROUTES[window.location.pathname];
    if (root) {
        root.append(component.element!);
        component.eventBus().emit(Block.EVENTS.FLOW_CDM);
        component.dispatchComponentDidMount()
    }
})

