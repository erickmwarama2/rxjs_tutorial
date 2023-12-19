import { fromEvent } from "rxjs";

const triggerButton = document.getElementById("trigger");

if (triggerButton) {
    fromEvent(triggerButton, 'click').subscribe(
        event => console.log(event)
    )
}
