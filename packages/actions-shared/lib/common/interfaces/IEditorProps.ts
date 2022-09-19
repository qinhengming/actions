import { EditorSelectOptions } from '@/common/editor/ActionEditor'
import { EDialogPosition } from '@common'
import { EDataSourceType } from '@onein/shared'

type TDsValue = string | boolean | { label: string; value: string }[] | string[]

export type TAllProps =
  | EditorAnchorProps
  | EditorComputedUnitProps
  | EditorDataSourceProps
  | EditorDialogPositionProps
  | EditorDsAssignProps
  | EditorDsFilterProps
  | EditorIconProps
  | EditorInputProps
  | EditorRadioProps
  | EditorResultOutputProps
  | EditorSelectProps
  | EditorSortProps
  | EditorSwitchProps
  | EditorVariableAssignmentProps
  | EditorWidgetProps
  | EditorTempSetProps
  | EditorTitleProps
  | EditorAbstractProps

export interface CommProps {
  isShow?: boolean
}
export interface EditorDialogPositionProps {
  label: string
  defaultValue?: EDialogPosition
}

export interface EditorDsFilterProps extends CommProps {
  label: string
  hasTab?: boolean
  hasIcon?: boolean
  preFilter?: boolean
  quickCustom?: boolean
  defaultValue?: EDialogPosition
  quickCustomOptions?: EditorSelectOptions
}

export interface EditorDsAssignProps {
  label: string
  defaultValue?: EDialogPosition
  isBatch?: boolean
  isEdit?: boolean
}

export interface EditorResultOutputProps extends CommProps {
  label: string
  defaultValue?: { left: string; right: string }[]
  isEdit?: boolean
  isBatch?: boolean
  groupName?: string
  isDataField?: boolean
  isPageVar?: boolean
}

export interface EditorVariableAssignmentProps {
  label: string
  defaultValue?: []
  isBatch?: boolean
  isAdd?: boolean
  isEdit?: boolean
}

export interface EditorDataSourceProps {
  label?: string
  defaultValue?: TDsValue
  dataSourceType?: EDataSourceType
  multiple?: boolean
  isBatch?: boolean
  isEdit?: boolean
  hasTab?: boolean
  filter?: string | string[]
}

export interface EditorSortProps {
  label: string
  defaultValue?: TDsValue
  isEdit?: boolean
}

export interface EditorSwitchProps {
  label: string
  defaultValue?: boolean
  group?: string
  additionalOpts?: {}
}
export interface EditorRadioProps extends CommProps {
  label?: string
  styleType?: string
  defaultValue?: boolean
  options?: EditorSelectOptions
}

export interface EditorSelectProps extends CommProps {
  label: string
  group?: string
  options?: EditorSelectOptions
  defaultValue?: TDsValue
  multiple?: boolean
  filterable?: boolean
  isRequired?: boolean
  isAdd?: boolean
  isDisabled?: boolean
  additionalOpts?: {}
}

export interface EditorComputedUnitProps {
  label: string
  groupName?: string
  tips?: string
  defaultValue?: TDsValue
  isAdd?: boolean
  isEdit?: boolean
  isRequired?: boolean
  isBatch?: boolean
}

export interface EditorInputProps {
  label: string
  defaultValue?: string
  isTextArea?: boolean
  isExpression?: boolean
}

export interface EditorIconProps {
  label: string
  defaultValue?: string
}

export interface EditorWidgetProps {
  label: string
  defaultValue?: string
  multiple?: boolean
}

export interface EditorAnchorProps {
  label: string
  hasTab: boolean
  defaultValue?: string
}
export interface EditorTempSetProps {
  label: string
  options?: EditorSelectOptions
  defaultValue?: string
  action?: string
}
export interface EditorTitleProps extends CommProps {
  label: string
  defaultValue?: string
}

export interface EditorAbstractProps {
  label: string
  isAdd?: boolean
  isEdit?: boolean
  item: { key: string; props: TAllProps }[]
}

export interface EditorDatePickerProps {
  label: string
  defaultValue?: string
}

export interface EditorTimeInputProps {
  label: string
  defaultValue?: string
}

export interface EditorEventCenterProps {
  label: string
  defaultValue?: string
}
