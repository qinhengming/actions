/**
 * 动态注册动作
 * @param actions 页面引用的动作类列表
 */
export class ActionFactory {
    static storage = {}
    public static RegisterActions(typeName, actionConstruct) {
        ActionFactory.storage[typeName] = new actionConstruct()
    }

    public static getInstance(typeName) {
        return ActionFactory.storage[typeName]
    }
}
