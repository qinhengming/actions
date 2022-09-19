import { IVariableSetting } from '@onein/shared'

export interface IPageConfig {
  pageGuid: string
  pageTitle: string
  pageType: string
  pageUrl: string
  pageParameters: IVariableSetting[]
}
