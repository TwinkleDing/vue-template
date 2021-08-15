<template>
    <div>
        <slot name='userName'></slot>
        <slot name='account' :account='account'></slot>
        <slot name='password' :password='password'></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            account: "account",
            password: "qweqweqwe"
        };
    }
};
</script>

<style lang='scss' scoped>
</style>