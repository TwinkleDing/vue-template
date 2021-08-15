<template>
    <div>
        <div class="item progress2">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="一致性 Consistency" name="1">
                    <div>
                        与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                    </div>
                    <div>
                        在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
                    </div>
                </el-collapse-item>
                <el-collapse-item title="反馈 Feedback" name="2">
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
                <el-collapse-item title="效率 Efficiency" name="3">
                    <div>简化流程：设计简洁直观的操作流程；</div>
                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                    <div>
                        帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
                    </div>
                </el-collapse-item>
                <el-collapse-item title="可控 Controllability" name="4">
                    <div>
                        用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
                    </div>
                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="item">
            <div class="radio">
                排序：
                <el-radio-group v-model="reverse">
                    <el-radio :label="true">倒序</el-radio>
                    <el-radio :label="false">正序</el-radio>
                </el-radio-group>
            </div>

            <el-timeline :reverse="reverse">
                <el-timeline-item
                    v-for="(activity, index) in activities"
                    :key="index"
                    :timestamp="activity.timestamp"
                >
                    {{ activity.content }}
                </el-timeline-item>
            </el-timeline>
        </div>
        <div class="item">
            <span>头上一片晴天，心中一个想念</span>
            <el-divider content-position="left">少年包青天</el-divider>
            <span>饿了别叫妈, 叫饿了么</span>
            <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
            <span>为了无法计算的价值</span>
            <el-divider content-position="right">阿里云</el-divider>
        </div>
    </div>
</template>

<script>
export default {
    name: "tabFour",
    data() {
        return {
            activeNames: ["1"],
            reverse: true,
            activities: [
                {
                    content: "活动按期开始",
                    timestamp: "2018-04-15",
                },
                {
                    content: "通过审核",
                    timestamp: "2018-04-13",
                },
                {
                    content: "创建成功",
                    timestamp: "2018-04-11",
                },
            ],
        };
    },
    methods: {
        handleChange(val) {
            console.log(val);
        },
    },
};
</script>

<style lang="scss"></style>
