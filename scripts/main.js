import { SillyClowns } from "./SillyClowns.js"
import { fetchRequests, fetchEmployees, fetchCompletions } from "./dataAccess.js"

const mainContainer = document.querySelector("#mainContainer")

//invokes each import and adds it to html
const render = () => {
    fetchRequests()
    .then(() => fetchEmployees())
    .then(() => fetchCompletions())
    .then (
        () => {
            mainContainer.innerHTML = SillyClowns()
        }
    )
}

render()


mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)