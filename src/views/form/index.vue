<template>
    <div class='pages-form'>
        <div class='form-1'>
        <el-form ref='form' :model='form' label-width='80px'>
            <el-form-item label='活动名称'>
            <el-input v-model='form.name'></el-input>
            </el-form-item>
            <el-form-item label='活动区域'>
            <el-select v-model='form.region' placeholder='请选择活动区域'>
                <el-option label='区域一' value='shanghai'></el-option>
                <el-option label='区域二' value='beijing'></el-option>
            </el-select>
            </el-form-item>
            <el-form-item label='活动时间'>
            <el-col :span='11'>
                <el-date-picker type='date' placeholder='选择日期' v-model='form.date1' style='width: 100%;'></el-date-picker>
            </el-col>
            <el-col class='line' :span='2'>-</el-col>
            <el-col :span='11'>
                <el-time-picker placeholder='选择时间' v-model='form.date2' style='width: 100%;'></el-time-picker>
            </el-col>
            </el-form-item>
            <el-form-item label='即时配送'>
            <el-switch v-model='form.delivery'></el-switch>
            </el-form-item>
            <el-form-item label='活动性质'>
            <el-checkbox-group v-model='form.type'>
                <el-checkbox label='美食/餐厅线上活动' name='type'></el-checkbox>
                <el-checkbox label='地推活动' name='type'></el-checkbox>
                <el-checkbox label='线下主题活动' name='type'></el-checkbox>
                <el-checkbox label='单纯品牌曝光' name='type'></el-checkbox>
            </el-checkbox-group>
            </el-form-item>
            <el-form-item label='特殊资源'>
            <el-radio-group v-model='form.resource'>
                <el-radio label='线上品牌商赞助'></el-radio>
                <el-radio label='线下场地免费'></el-radio>
            </el-radio-group>
            </el-form-item>
            <el-form-item label='活动形式'>
            <el-input type='textarea' v-model='form.desc'></el-input>
            </el-form-item>
            <el-form-item>
            <el-button type='primary' @click='onSubmit'>立即创建</el-button>
            <el-button>取消</el-button>
            </el-form-item>
        </el-form>
        </div>
        <div class='form-1'>
            <el-form :model='ruleForm' :rules='rules' ref='ruleForm' label-width='100px' class='demo-ruleForm' status-icon>
                <el-form-item label='活动名称' prop='name'>
                    <el-input v-model='ruleForm.name'></el-input>
                </el-form-item>
                <el-form-item label='活动区域' prop='region'>
                    <el-select v-model='ruleForm.region' placeholder='请选择活动区域'>
                        <el-option label='区域一' value='shanghai'></el-option>
                        <el-option label='区域二' value='beijing'></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label='活动时间' required>
                    <el-col :span='11'>
                        <el-form-item prop='date1'>
                            <el-date-picker type='date' placeholder='选择日期' v-model='ruleForm.date1' style='width: 100%;'></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col class='line' :span='2'>-</el-col>
                    <el-col :span='11'>
                        <el-form-item prop='date2'>
                            <el-time-picker placeholder='选择时间' v-model='ruleForm.date2' style='width: 100%;'></el-time-picker>
                        </el-form-item>
                    </el-col>
                </el-form-item>
                <el-form-item label='即时配送' prop='delivery'>
                    <el-switch v-model='ruleForm.delivery'></el-switch>
                </el-form-item>
                <el-form-item label='年龄' prop='age'>
                    <el-input v-model.number='ruleForm.age'></el-input>
                </el-form-item>
                <el-form-item label='活动性质' prop='type'>
                    <el-checkbox-group v-model='ruleForm.type'>
                        <el-checkbox label='美食/餐厅线上活动' name='type'></el-checkbox>
                        <el-checkbox label='地推活动' name='type'></el-checkbox>
                        <el-checkbox label='线下主题活动' name='type'></el-checkbox>
                        <el-checkbox label='单纯品牌曝光' name='type'></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label='特殊资源' prop='resource'>
                    <el-radio-group v-model='ruleForm.resource'>
                        <el-radio label='线上品牌商赞助'></el-radio>
                        <el-radio label='线下场地免费'></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label='活动形式' prop='desc'>
                    <el-input type='textarea' v-model='ruleForm.desc'></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type='primary' @click='submitForm("ruleForm")'>立即创建</el-button>
                    <el-button @click='resetForm("ruleForm")'>重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Forms",
    data() {
        var checkAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("年龄不能为空"));
            }
            setTimeout(() => {
                if (!Number.isInteger(value)) {
                    callback(new Error("请输入数字值"));
                } else {
                    if (value < 18) {
                        callback(new Error("必须年满18岁"));
                    } else {
                        callback();
                    }
                }
            }, 1000);
        };
        return {
            form: {
                name: "",
                region: "",
                date1: "",
                date2: "",
                delivery: false,
                type: [],
                resource: "",
                desc: ""
            },
            ruleForm: {
                name: "",
                region: "",
                date1: "",
                date2: "",
                delivery: false,
                type: [],
                resource: "",
                desc: ""
            },
            rules: {
                name: [
                    { required: true, message: "请输入活动名称", trigger: "blur" },
                    { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
                ],
                region: [
                    { required: true, message: "请选择活动区域", trigger: "change" }
                ],
                date1: [
                    { type: "date", required: true, message: "请选择日期", trigger: "change" }
                ],
                date2: [
                    { type: "date", required: true, message: "请选择时间", trigger: "change" }
                ],
                type: [
                    { type: "array", required: true, message: "请至少选择一个活动性质", trigger: "change" }
                ],
                resource: [
                    { required: true, message: "请选择活动资源", trigger: "change" }
                ],
                desc: [
                    { required: true, message: "请填写活动形式", trigger: "blur" }
                ],
                age: [
                    { validator: checkAge, trigger: "blur" }
                ]
            }
        };
    },
    methods: {
        onSubmit() {
            console.log("submit!");
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>

<style lang='scss' scoped>
.pages-form {
  padding: 20px;
  text-align: left;
  .form-1{
    display: inline-block;
    width: 500px;
    vertical-align: text-top;
  }
}
</style>