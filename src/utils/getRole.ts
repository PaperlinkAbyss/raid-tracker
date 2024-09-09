import { JOBS, type Jobs, type Roles } from "../constants"
export default function getRole(role: Jobs) {
  for (const [key, value] of Object.entries(JOBS)) {
    if (value.includes(role)) return key as Roles
  }
  throw "No role found"
}
