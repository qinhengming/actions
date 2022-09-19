import { EdgeRef, NodeRef } from "@common/types/TAction";

export interface IEdge {
    /**
     * id
     */
    readonly id: EdgeRef
    /**
     * 连线类型
     */
    type: string
    /**
     * 起始动作节点id
     */
    source: NodeRef
    /**
     * 结束动作节点id
     */
    target: NodeRef
}