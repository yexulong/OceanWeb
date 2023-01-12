import { defHttp } from '/@/utils/http/axios'
import { getMenuListResultModel } from './model/menuModel'

enum Api {
  GetMenuList = '/api/v1/permissions/menus/',
}

/**
 * @description: Get user menu based on id
 */

export const getMenuList = () => {
  return defHttp.get<getMenuListResultModel>({ url: Api.GetMenuList })
}
