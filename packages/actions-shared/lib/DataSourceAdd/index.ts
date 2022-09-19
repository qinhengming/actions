import { EActionType, IActionRes } from "@common"
import { IDataSourceAddOptions } from "./IOptions"
import { shortGuid, _getExpressValue } from "@common/utils"
import { EAppType } from "@common/enums/EAppType"
import { IActionRuntime } from "@common/interfaces/IActionRuntime"
import { EDataMark, EInsertPosition, IActionRender } from "@onein/shared"
import { useActionRes } from "../useActionRes"

/**
 * 新增数据
 */
export class DataSourceAdd implements IActionRender, IActionRuntime {
    typeName: EActionType = EActionType.DataSourceAdd

    isAsync: boolean = true
    id: string = ""
    label: string = ""
    marks: string = ""
    props: IDataSourceAddOptions = {
        dataSourceId: "",
        insertPosition: EInsertPosition.Start,
    }
    constructor(id?: string) {
        this.id = id || shortGuid()
    }

    /**
     * 动作传参
     */
    init(options) {
        Object.assign(this.props, options)
        return this
    }
    /**
     * 获取数据源字段map
     */
    _getFieldMap(list, params) {
        const fieldsMap = new Map()
        list?.forEach((field) => {
            let expressRes = _getExpressValue(params, field.expression)
            let fieldName = field.fieldValue
            if (fieldName) {
                fieldsMap.set(fieldName, expressRes)
            }
        })
        return fieldsMap
    }
    /**
     * 动作执行
     */
    async execute(params): Promise<IActionRes> {
        let res = useActionRes()
        let { ctx, appType } = params
        if (appType === EAppType.Pc) {
            const runtime = ctx.useDataContext()
            if (!this.props.dataSourceId) {
                console.error("未设置数据源！")
                res.isSuccess = false
                return res
            }
            const handleAddData = async () => {
                const fieldsMap = this._getFieldMap(this.props.assign, params)
                await runtime.setDataContextFieldValue(this.props.dataSourceId, 0, EDataMark.Add, fieldsMap, this.props.insertPosition)
            }
            await handleAddData()
            return res
        } else {
            return res
        }
    }
}
