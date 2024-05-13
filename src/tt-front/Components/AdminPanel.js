

class AdminPanel {

    constructor(container, core) {
        this.container = container
        this.core = core
        this.createAdminPanel()
    }

    createAdminPanel() {
        
        const adminContainer = new this.core.Component(
            this.container,
            this.core,
            {
                classList: [ "admin-container" ],
                styles: {
                    "width": "100%",
                    "height": "60px",
                    "background": "yellow"
                },
                id: "adminPanel"
            }
        )

        this.core.components.push(adminContainer)

    }

}

export {
    AdminPanel
}