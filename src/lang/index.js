import Vue from "vue";
import VueI18n from "vue-i18n";
import store from "@/store";
import elementEnLocale from "element-ui/lib/locale/lang/en";
import elementZhLocale from "element-ui/lib/locale/lang/zh-CN";
import zhLocale from "./zh";
import enLocale from "./en";

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: store.getters.language,
    messages: {
        zh: {
            ...zhLocale,
            ...elementZhLocale
        },
        en: {
            ...enLocale,
            ...elementEnLocale
        }
    }
});

export default i18n;