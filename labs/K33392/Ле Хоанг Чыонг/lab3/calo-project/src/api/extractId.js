
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export function extractId(endpoint) {
    if (!endpoint) {
        return null;
    }
    const regex = /recipe_([a-fA-F0-9]+)/;
    const match = endpoint.match(regex);

    return match ? match[1] : null;
}
