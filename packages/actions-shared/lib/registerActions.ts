import { EActionType } from "./common"
import { DataSourceAdd } from "./DataSourceAdd"
import { DataSourceAssign } from "./DataSourceAssign"
import { DataSourceClearSelected } from "./DataSourceClearSelected"
import { DataSourceDelete } from "./DataSourceDelete"
import { DataSourceEdit } from "./DataSourceEdit"

export function getInstanceByName(typename: string) {
    switch (typename) {
        case EActionType.DataSourceAdd:
            return new DataSourceAdd()
        case EActionType.DataSourceAssign:
            return new DataSourceAssign()
        case EActionType.DataSourceClearSelected:
            return new DataSourceClearSelected()
        case EActionType.DataSourceDelete:
            return new DataSourceDelete()
        case EActionType.DataSourceEdit:
            return new DataSourceEdit()
    }
}
