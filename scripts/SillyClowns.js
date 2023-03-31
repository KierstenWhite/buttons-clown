import { ServiceForm } from "./requestForm.js";
import { Requests } from "./requests.js";

export const SillyClowns = () => {
    return `
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <img src="https://i.imgur.com/TglQeN2.png" alt="Logo" width="125" height="75" class="d-inline-block align-text-top">
                </a>
            </div>
        </nav>
        
        <section class="requestForm">
            <h2>Party & Clown Request Form</h2>
            ${ServiceForm()}
        </section>

        <section class="partyRequests">
            <h2>Party Requests</h2>
            ${Requests()}
        </section>
        `
}