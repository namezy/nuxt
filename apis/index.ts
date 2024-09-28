export const getIndexInfo = () => getApi("/pc/index")
export const getGroupList= (params) => getApi("/pc/group/list",params)
export const getSearchList= (params) => getApi("/pc/search",params)
