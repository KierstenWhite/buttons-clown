import { getRequests, getEmployees, saveCompletion, deleteRequest } from "./dataAccess.js";

const mainContainer = document.querySelector("#mainContainer")

//for Delete Button, when there is a click, you click the request associated with that id?
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "employees") {
            const [requestId, employeeId] = event.target.value.split("--")
            const completion = { 
                requestId: parseInt(requestId),
                employeeId: parseInt(employeeId),
                date_created: new Date().toISOString()

            }
            saveCompletion(completion)

        }
    }
)

export const Requests = () => {
    const requests = getRequests()
    const employees = getEmployees()

    const convertRequestToListElement = (requestObject) => {
        return `<li> ${requestObject.address}
            <select class="employees" id="employees">
            <option value="">Choose</option>
        
        ${employees.map(
                employee => {
                    return `
                        <option value="${requestObject.id}--${employee.id}">${employee.clownName}</option>`
                }
            ).join("")
        }
        </select>
        <button class="request_denied" id="request--${requestObject.id}"> Deny </button> </li>`
    }
    
        let html = `
            <ul>
                ${
                    //going through each request object, finding the description, and then joining them together
                    requests.map(convertRequestToListElement).join("")
                }
            </ul>
        `
        return html
    }

    // <option value="${requestObject.id}--${employee.id}">${employee.clownName}</option>