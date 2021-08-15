<template>
    <div>
        <el-dropdown @command='handleCommand'>
            <el-button type='primary' size='small'>
                {{$t('common.language')}}
                <i class='el-icon-arrow-down el-icon--right'></i>
            </el-button>
            <el-dropdown-menu>
                <el-dropdown-item :key='index' v-for='(item, index) in list' :command='item.language'>
                <div :style='item.language === language ? `color:${themeColor}` : ""'>
                    {{item.name}}
                </div>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            list: [
                {
                    language: "zh",
                    name: "简体中文"
                },
                {
                    language: "en",
                    name: "English"
                },
            ]
        };
    },
    computed: {
        ...mapGetters(["language", "themeColor"]),
    },
    methods: {
        handleCommand(lang) {
            this.$i18n.locale = lang;
            this.$store.commit("SET_LANGUAGE", lang);
        }
    }
};
</script>

<style lang='scss' scoped>
</style>