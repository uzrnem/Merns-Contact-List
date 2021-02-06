import { isBoolean } from "../../../shared/helper/dataType"

export function checkPermission(user, calledModule, calledAction) {
  if (user.permissions) {
    if (user.permissions[calledModule]) {
      if (isBoolean(user.permissions[calledModule][calledAction]) && user.permissions[calledModule][calledAction] == true) {
        return true
      }
    }
  }
  return false
}

export default checkPermission;