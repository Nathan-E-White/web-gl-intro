//
// Start here
//
function main() {

    // Note that the selector is #glCanvas NOT glCanvas, because it is an id.
    const canvas = document.querySelector('#glCanvas');

    // WebGL Context must be initialized before anything else
    // gl: WebGLRenderingContext
    const gl = canvas.getContext('webgl');

    // Bail out if WebGL is not available
    if (!gl) {
        console.error('Unable to initialize WebGL. Your browser or machine may not support it.');
        alert('ERROR: Unable to initialize WebGL. Your browser or machine may not support it.');
        return;
    }

    // Initialize the scene
    // Set the clear color to black, fully opaque
    const black = { r: 0, g: 0, b: 0, a: 1 };
    gl.clearColor(black.r, black.g, black.b, black.a);

    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;