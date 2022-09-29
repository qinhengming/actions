import {
  EditorAnchorProps,
  EditorComputedUnitProps,
  EditorDataSourceProps,
  EditorDialogPositionProps,
  EditorDsAssignProps,
  EditorDsFilterProps,
  EditorIconProps,
  EditorInputProps,
  EditorRadioProps,
  EditorResultOutputProps,
  EditorSelectProps,
  EditorSortProps,
  EditorSwitchProps,
  EditorVariableAssignmentProps,
  EditorWidgetProps,
  EditorTempSetProps,
  EditorTitleProps,
  EditorAbstractProps,
  TAllProps,
  EditorDatePickerProps,
  EditorTimeInputProps,
  EditorEventCenterProps
} from '@common/interfaces/IEditorProps'
import { EDataSourceType } from '@onein/shared'

export enum EditorPropsType {
  /**
   * 输入框
   */
  Input = 'inputProp',
  /**
   * 计算单元
   */
  ComputedUnit = 'computedUnit',
  /**
   * 下拉框
   */
  Select = 'selectProp',
  /**
   * 开关
   */
  Switch = 'switchProp',
  /**
   * 数据源选择
   */
  DataSource = 'dataSource',
  /**
   * 结果输出
   */
  ResultOutput = 'resultOutput',
  /**
   * 变量赋值
   */
  VariableAssignment = 'variableAssignment',
  /**
   * 弹窗位置
   */
  DialogPosition = 'dialogPosition',
  /**
   * 数据源筛选设置
   */
  DataSourceFilter = 'dataSourceFilter',
  /**
   * 数据源赋值设置
   */
  DataSourceAssignment = 'dataSourceAssignment',
  /**
   * 控件选择
   */
  Widget = 'widget',
  /**
   * 图标选择
   */
  Icon = 'icon',
  /**
   * 单选
   */
  Radio = 'radio',
  /**
   * 排序设置
   */
  Sort = 'sort',
  /**
   * 锚点
   */
  Anchor = 'anchor',
  /**
   * 导入模板设置
   */
  TempSet = 'tempSet',
  /**
   * title文本
   */
  Title = 'title',
  /**
   * 线
   */
  Line = 'line',
  /**
   * 摘要
   */
  Abstract = 'abstract',
  /**
   * 时间选择
   */
  DatePicker = 'datePicker',
  /**
   * 时间输入框
   */
  TimeInput = 'timeInput',
  /**
   * 事件中心
   */
  EventCenter = 'eventCenter'
}

export type EditorSelectOptions = {
  label: string
  value: string | number | boolean | object
  [props: string]: any
}[]

export type EditorProps = {
  type: EditorPropsType
  /**
   * 标签名称
   */
  label?: string
  /**
   * 提示说明
   */
  tips?: string
  /**
   * 默认值
   */
  defaultValue?: any
} & {
  /**
   * 标题
   */
  title?: string
  /**
   * 是否多行文本
   */
  isTextArea?: boolean
  /**
   * 是否表达式
   */
  isExpression?: boolean
  /**
   * 可选项
   */
  options?: EditorSelectOptions
  /**
   * 是否批量
   */
  isBatch?: boolean
  /**
   * 批量分组名称
   */
  groupName?: string
  /**
   * 是否可以多选
   */
  multiple?: boolean
  /**
   * 是否可以新增
   */
  isAdd?: boolean
  /**
   * 是否可以编辑
   */
  isEdit?: boolean
  /**
   * 是否必填
   */
  isRequired?: boolean
  /**
   * 下拉框是否可搜索
   */
  filterable?: boolean
  /**
   * 筛选模块是否有模式切换（快速，自定义）
   */
  hasTab?: boolean
  /**
   * 筛选模块是否显示图标
   */
  hasIcon?: boolean
  /**
   * 筛选模块是否有前置条件
   */
  preFilter?: boolean
  /**
   * 样式类型
   */
  styleType?: string
  /**
   * 附加属性配置
   */
  additionalOpts?: {}
  /**
   * 是否显示
   */
  isShow?: boolean
  /**
   * 数据源类型
   */
  dataSourceType?: EDataSourceType
  /**
   * 可选数据源类型
   */
  ableDsTypes?: EDataSourceType[]
  /**
   * 所属组
   */
  group?: string
  /**
   * 所属动作
   */
  action?: string
  /**
   * 是否快速筛选自定义
   */
  quickCustom?: boolean
  /**
   * 快速筛选自定义选项
   */
  quickCustomOptions?: EditorSelectOptions
  /**
   * 数据源选择弹框过滤后需留下的实体名称schemaName
   */
  filter?: string | string[]
  /**
   * output左侧下拉框是否是数据源字段选择
   */
  isDataField?: boolean
  /**
   * output左侧下拉框是否是页面变量选择
   */
  isPageVar?: boolean
  /**
   * 子类型
   */
  item?: { key: string; props: TAllProps }[]
  /**
   * 是否可用
   */
  isDisabled?: boolean
}

export function createTitleProp({ isShow = true, label, defaultValue }: EditorTitleProps): EditorProps {
  return {
    type: EditorPropsType.Title,
    label,
    defaultValue,
    isShow
  }
}
export function createLineProp({ isShow = true }): EditorProps {
  return {
    type: EditorPropsType.Line,
    isShow
  }
}
export function createInputProp({
  label,
  defaultValue = '',
  isTextArea = false,
  isExpression = false
}: EditorInputProps): EditorProps {
  return {
    type: EditorPropsType.Input,
    label,
    defaultValue,
    isTextArea,
    isExpression
  }
}

export function createComputedUnitProp({
  label,
  defaultValue = '',
  groupName = '',
  tips = '',
  isAdd = false,
  isEdit = true,
  isBatch = false,
  isRequired = false
}: EditorComputedUnitProps): EditorProps {
  return {
    type: EditorPropsType.ComputedUnit,
    label,
    isBatch,
    isAdd,
    isEdit,
    isRequired,
    defaultValue,
    groupName,
    tips
  }
}

export function createSelectProp({
  label,
  options,
  defaultValue,
  filterable = false,
  multiple = false,
  isRequired = false,
  isAdd = false,
  isShow = true,
  isDisabled = false,
  additionalOpts,
  group
}: EditorSelectProps): EditorProps {
  return {
    type: EditorPropsType.Select,
    label,
    options,
    multiple,
    filterable,
    defaultValue,
    isRequired,
    isAdd,
    isShow,
    isDisabled,
    additionalOpts,
    group
  }
}

export function createSwitchProp({
  label,
  additionalOpts,
  group = '',
  defaultValue = false
}: EditorSwitchProps): EditorProps {
  return {
    type: EditorPropsType.Switch,
    label,
    defaultValue,
    group,
    additionalOpts
  }
}

export function createRadioProp({
  label,
  defaultValue = false,
  styleType = 'button',
  isShow = true,
  options = []
}: EditorRadioProps): EditorProps {
  return {
    type: EditorPropsType.Radio,
    label,
    defaultValue,
    styleType,
    isShow,
    options
  }
}

export function createDataSourceProp({
  label,
  defaultValue = '',
  dataSourceType = EDataSourceType.SchemaDs,
  ableDsTypes = [],
  multiple = false,
  isBatch = false,
  isEdit = true,
  hasTab = false,
  filter
}: EditorDataSourceProps): EditorProps {
  return {
    type: EditorPropsType.DataSource,
    label,
    defaultValue,
    dataSourceType,
    ableDsTypes,
    multiple,
    isBatch,
    isEdit,
    hasTab,
    filter
  }
}

export function createSortProp({ label, defaultValue = [], isEdit = true }: EditorSortProps): EditorProps {
  return {
    type: EditorPropsType.Sort,
    label,
    defaultValue,
    isEdit
  }
}

export function createVariableAssignmentProp({
  label,
  defaultValue = [],
  isBatch = true,
  isAdd = true,
  isEdit = true
}: EditorVariableAssignmentProps): EditorProps {
  return {
    type: EditorPropsType.VariableAssignment,
    defaultValue,
    label,
    isBatch,
    isEdit,
    isAdd
  }
}

export function createResultOutputProp({
  label,
  groupName = '',
  defaultValue,
  isBatch = true,
  isEdit = true,
  isShow = true,
  isDataField,
  isPageVar = true
}: EditorResultOutputProps): EditorProps {
  return {
    type: EditorPropsType.ResultOutput,
    label,
    isBatch,
    defaultValue,
    groupName,
    isEdit,
    isShow,
    isDataField,
    isPageVar
  }
}

export function createDialogPositionProp({ label, defaultValue }: EditorDialogPositionProps): EditorProps {
  return {
    type: EditorPropsType.DialogPosition,
    label,
    defaultValue
  }
}

export function createDataSourceFilterProp({
  label,
  defaultValue,
  hasIcon = false,
  hasTab = true,
  isShow = true,
  preFilter = false,
  quickCustom = false,
  quickCustomOptions = []
}: EditorDsFilterProps): EditorProps {
  return {
    type: EditorPropsType.DataSourceFilter,
    label,
    hasTab,
    hasIcon,
    preFilter,
    quickCustom,
    defaultValue,
    quickCustomOptions,
    isShow
  }
}

export function createDataSourceAssignProp({
  label,
  defaultValue,
  isBatch = true,
  isEdit = false
}: EditorDsAssignProps): EditorProps {
  return {
    type: EditorPropsType.DataSourceAssignment,
    label,
    defaultValue,
    isBatch,
    isEdit
  }
}

export function createIconProp({ label, defaultValue }: EditorIconProps): EditorProps {
  return {
    type: EditorPropsType.Icon,
    label,
    defaultValue
  }
}

export function createWidgetProp({ label, defaultValue , multiple = false}: EditorWidgetProps): EditorProps {
  return {
    type: EditorPropsType.Widget,
    label,
    defaultValue,
    multiple
  }
}

export function createAnchorProp({ label, hasTab = false, defaultValue }: EditorAnchorProps): EditorProps {
  return {
    type: EditorPropsType.Anchor,
    label,
    hasTab,
    defaultValue
  }
}

export function createTempSetProp({ label, options = [], action, defaultValue }: EditorTempSetProps): EditorProps {
  return {
    type: EditorPropsType.TempSet,
    label,
    options,
    defaultValue,
    action
  }
}

export function createAbstractProp({ label, item, isAdd = true, isEdit = true }: EditorAbstractProps): EditorProps {
  return {
    type: EditorPropsType.Abstract,
    label,
    isAdd,
    isEdit,
    item
  }
}

export function createDatePickerProp({ label, defaultValue = '' }: EditorDatePickerProps): EditorProps {
  return {
    type: EditorPropsType.DatePicker,
    defaultValue,
    label
  }
}

export function createTimeInputProp({ label, defaultValue = '' }: EditorTimeInputProps): EditorProps {
  return {
    type: EditorPropsType.TimeInput,
    defaultValue,
    label
  }
}

export function createEventCenterProp({ label, defaultValue = '' }: EditorEventCenterProps): EditorProps {
  return {
    type: EditorPropsType.EventCenter,
    defaultValue,
    label
  }
}
