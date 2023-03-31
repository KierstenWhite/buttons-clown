const applicationState = {
    employees: [],
    requests: [],
    completions: []
}

const mainContainer = document.querySelector("#mainContainer")
const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (partyRequests) => {
                applicationState.requests = partyRequests
            }
        )
}


export const getRequests = () => {
    return applicationState.requests.map(fetchRequest => ({...fetchRequest}))
}


export const sendRequest = (clownPartyRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(clownPartyRequest)
    }

    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const fetchEmployees = () => {
    return fetch(`${API}/employees`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.employees = data
            }
        )
}

export const getEmployees = () => {
    return applicationState.employees.map(employee => ({...employee}))
}

// Initiates the fetch request to Delete submitted service requests
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}


export const saveCompletion = (serviceCompleted) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(serviceCompleted)
    }


    return fetch(`${API}/completions`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

        })
}

export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (completedRequests) => {
                // Store the external state in application state
                applicationState.completions = completedRequests
            }
        )
}
