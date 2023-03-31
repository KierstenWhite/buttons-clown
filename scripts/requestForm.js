import { sendRequest } from "./dataAccess.js"

export const ServiceForm = () => {
    let html = `
        <div class="mb-3">
            <label for="parentName" class="form-label">Parent Name</label>
            <input type="text" name="parentName" class="form-control" placeholder="Jane Doe">
        </div>
        <div class="mb-3">
            <label for="childName" class="form-label">Child Name</label>
            <input type="text" name="childName" class="form-control" placeholder="Jimmy Doe">
        </div>
        <div class="mb-3">
            <label for="attendance" class="form-label">Attendance</label>
            <input type="number" name="attendance" class="form-control" placeholder="10">
        </div>
        <div class="mb-3">
            <label for="address" class="form-label">Physical Location of Party</label>
            <input type="text" name="address" class="form-control" placeholder="123 Circus Way">
        </div>
        <div class="mb-3">
            <label for="partyTimeLength" class="form-label">Length of Party (in hours)</label>
            <input type="number" name="partyTimeLength" class="form-control" placeholder="2">
        </div>
        <div class="mb-3">
            <label for="partyDate" class="form-label">Date of Party</label>
            <input type="date" name="partyDate" class="form-control">
        </div>

        <button class="button" id="submitRequest">Submit Party Request</button>
    `
    return html
}

const mainContainer = document.querySelector("#mainContainer")

// listens for button click on form, takes the data, and sends a request to store in the API
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        
        const parentName = document.querySelector("input[name='parentName']").value
        const childName = document.querySelector("input[name='childName']").value
        const attendance = document.querySelector("input[name='attendance']").value
        const address = document.querySelector("input[name='address']").value
        const partyTimeLength = document.querySelector("input[name='partyTimeLength']").value
        const partyDate = document.querySelector("input[name='partyDate']").value

        const dataToSendToAPI = {
            parentName: parentName,
            childName: childName,
            attendance: attendance,
            address: address,
            partyTimeLength: partyTimeLength,
            partyDate: partyDate
        }

        sendRequest(dataToSendToAPI)

    }
})