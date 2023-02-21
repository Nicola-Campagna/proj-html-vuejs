// SETTING VUE JS

settingVue = Vue.createApp({
    data() {
        return {
            navbar: {
                logo: "./img/Logo.png",
                link: [
                    "HOME",
                    "BLOG",
                    "EVENTS",
                    "GALLERY",
                    "ABOUT US",
                    "CONTACT US",
                    "SHOP",
                ],

            }
        }
    },
})
settingVue.mount("#app")