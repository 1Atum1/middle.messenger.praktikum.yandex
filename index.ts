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
const ROUTES: Record<string, string> = {
    '/': new Authorization(),
    '/authorization': new Authorization(),
    '/registration': new Registration(),
    '/profile': new Profile(),
    '/profile/edit': new EditProfile(),
    '/change-password': new ChangePassword(),
    '/chat': new ChatList(),
    '/not-found': NotFound()({}),
    '/unavailable': Unavailable()({})
}

// @ts-ignore
window.addEventListener('DOMContentLoaded', () => {
    // @ts-ignore
    const root = document.getElementById('app');
    // @ts-ignore
    const component = ROUTES[window.location.pathname];
    root.append(component.element!);
    component.eventBus().emit(Block.EVENTS.FLOW_CDM);
    component.dispatchComponentDidMount()
})

