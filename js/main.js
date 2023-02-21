// SETTING VUE JS

settingVue = Vue.createApp({
    data() {
        return {
            // navbar nell'head
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
            },

            // footer
            foot: {

                // index 0
                colFoot: [
                    "502 New Design Str,",
                    "Melbourne, San Francisco,",
                    "CA 94110, United States Of",
                    "America Australia",
                    "T:1 123-435-789",
                    "Email:demo@example.com",
                ],

                // index 1
                colFoot: [
                    "Product Support",
                    "Checkout",
                    "Report Abuse",
                    "Readeem Voucher",
                    "Order Status",
                ],

                // index 2
                colFoot: [
                    "Policies & Rules",
                    "Privacy Policy",
                    "License Policy",
                    "My Account",
                    "Locality",
                ],
                copyright: "@2023 All Rigths Reserved Developed By TemplateMela"

            }

        }
    },
})
settingVue.mount("#app")