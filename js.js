let browser;

switch (browser) {
    case "Edge":
        alert("You've got the Edge");
        break;
    case "Chrome":
    case "Firefox":
    case "Safari":
        alert('Okay we support these Browser too');
        break;
    default :
        alert('We hope that this page looks ok!')
}