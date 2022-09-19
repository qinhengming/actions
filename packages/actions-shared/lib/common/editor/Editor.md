# 动作属性面板字段
>动作属性类型归纳，通过对应的函数创建默认属性结构

| 序号 | 名称             | 字段类型             | 函数方法                     | 备注                   |
| ---- | ---------------- | -------------------- | ---------------------------- | ---------------------- |
| 1    | 输入框           | input                | createInputProp              |                        |
| 2    | 计算单元         | computedUnit         | createComputedUnitProp       |                        |
| 3    | 下拉框           | select               | createSelectProp             |                        |
| 4    | 开关             | switch               | createSwitchProp             |                        |
| 5    | 数据源选择       | dataSource           | createDataSourceProp         |                        |
| 6    | 结果输出         | resultOutput         | createResultOutputProp       |                        |
| 7    | 变量赋值         | variableAssignment   | createVariableAssignmentProp |                        |
| 8    | 弹窗位置         | dialogPosition       | createDialogPositionProp     |                        |
| 9    | 条件节点条件设置 | unitCondition        | createUnitConditionProp      | 例子：多条件节点       |
| 10   | 过滤条件设置     | dataSourceFilter     | createDataSourceFilterProp   | 例子：查询设置节点     |
| 11   | 数据源赋值设置   | dataSourceAssignment | createDataSourceAssignProp   | 例子：新增数据节点     |
| 12   | 控件选择         | Widget               | createWidgetProp             | 例子：显示加载节点 |
| 13   | 图标选择         | Icon                 | createIconProp               | 例子：显示加载节点 |
| 14   | 输入参数         | inputParams          | createinputParamsProp        | 例子：调用数据流节点   |
| 15   | 排序设置         | sort                 | createSortProp               | 例子：查询设置节点     |
| 16   | 筛选设置         | filter               | createFilterProp             | 例子：数据源赋值节点   |
| 17   | 单选             | radio                | createRadioProp              | 例子：资源赋值         |
| 18   | 锚点             | anchor               | createAnchorProp             | 例子：页面跳转         |
| 19   | 导入模板设置     | TempSet              | createTempSetProp            |                        |
| 20   | 配置组标题       | Title                | createTitleProp              |                        |
| 21   | 配置组分割线     | Line                 | createLineProp               |                        |


>动作属性结构EditorProps字段

| 序号 | 参数           | 说明                                   | 备注 | 类型            | 默认值              |
| ---- | -------------- | -------------------------------------- | ---- | --------------- | ------------------- |
| 1    | type           | 类型                                   |      |                 |                     |
| 2    | label          | 标签                                   |      | string          |                     |
| 3    | tips           | 提示说明                               |      | string          |                     |
| 4    | description    | 描述                                   |      | string          |                     |
| 5    | defaultValue   | 默认值                                 |      | any             |                     |
| 6    | groupName      | 分组名称                               |      | string          |                     |
| 7    | title          | 标题                                   |      | string          |                     |
| 8    | options        | 选项                                   |      |                 |                     |
| 9    | isBatch        | 批量                                   |      | boolean         | false               |
| 10   | isTextArea     | 多行文本                               |      | boolean         | false               |
| 11   | isExpression   | 是否表达式                             |      | boolean         | false               |
| 12   | multiple       | 多选                                   |      | boolean         | false               |
| 13   | isAdd          | 可新增                                 |      | boolean         | true                |
| 14   | isEdit         | 可编辑                                 |      | boolean         | true                |
| 15   | isRequired     | 是否必填                               |      | boolean         | false               |
| 16   | isHidden       | 隐藏                                   |      | boolean         | false               |
| 17   | placeholder    | 占位符                                 |      | string          |                     |
| 18   | fields         | 当isBatch为true时用来保存数据          |      | object          | {label:'',value:''} |
| 19   | filterable     | 下拉框是否可搜索                       |      | boolean         | false               |
| 20   | hasTab         | 筛选模块是否有模式切换（快速，自定义） |      | boolean         | false               |
| 21   | hasIcon        | 筛选模块是否显示图标                   |      | boolean         | false               |
| 22   | preFilter      | 筛选模块是否有前置条件                 |      | boolean         | false               |
| 23   | styleType      | 样式类型                               |      | string          |                     |
| 24   | additionalOpts | 附加属性配置                           |      | object          |                     |
| 25   | isShow         | 是否显示                               |      | boolean         | true                |
| 26   | dataSourceType | 数据源类型                             |      | EDataSourceType |                     |