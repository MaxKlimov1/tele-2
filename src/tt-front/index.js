import { core } from "./Core/Core.js";
import { Header } from "./Components/ui/Header.js";
import { AdminPanel } from "./Components/AdminPanel.js";
import { Login } from "./Components/login.js";
import { TitleSection } from "./Components/ui/titleSection.js";
import { Rooms } from "./Components/Rooms.js";
import { Events } from "./Components/Events.js";
import { UserProfile } from "./Components/userProfile.js";
import { Footer } from "./Components/ui/footer.js";
import { Chat } from "./Components/chat.js";

class InitialClass {
    constructor(core) {
        this.core = core
    }

    async createMainBlock() {

        new Header("div", this.core.header, this.core)
        // new TitleSection(this.core.main, this.core)
        // new Login(this.core.main, this.core, 1)
        // new Rooms(this.core.main, this.core)
        // new Events(this.core.main, this.core)
        // new UserProfile(this.core.main, this.core)
        // new AdminPanel(this.core.main, this.core)
        new Chat(this.core.main, this.core)

        new Footer(this.core.footer, this.core)

    }
}

const initialClass = new InitialClass(core)
initialClass.createMainBlock()