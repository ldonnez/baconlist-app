import { createTypes, actionCreator } from "redux-action-creator"

export const types = createTypes([
  "UPGRADE",
  "UPGRADE_SUCCESS",
  "UPGRADE_FAIL"
],
"VERSION")

export const actions = {
  upgrade: actionCreator(types.UPGRADE),
  upgradeSuccess: actionCreator(types.UPGRADE_SUCCESS, "data"),
  upgradeFail: actionCreator(types.UPGRADE_FAIL, "errors")
}
