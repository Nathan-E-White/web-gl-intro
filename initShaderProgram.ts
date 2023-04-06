import loadShader from "./loadShader";

/**
 *
 */
interface InitShaderProgramParams {
    gl: WebGLRenderingContext;
    vsSource: File | string;
    fsSource: File | string;
}

// noinspection JSUnusedGlobalSymbols
/**
 * @param {WebGLRenderingContext} gl
 * @param {File | string} vertexShaderSource
 * @returns {WebGLProgram}
 * @throws {Error}
 * @description Initialize a shader program
 * @author Nathan E White
 * @date 2022-07-14
 * @version 1.0.0
 * @license MIT
 * @copyright (c) 2020 Nathan E White
 * @see Check {@link https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context} for the walk through
 * @see Check {@link https://github.com/mdn/dom-examples/tree/master/webgl-examples/tutorial/sample2} for the source code
 * @noinspection JSUnusedGlobalSymbols
 */
const initShaderProgram = ({gl, vsSource, fsSource}: InitShaderProgramParams): WebGLProgram {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, "./vertex-shader.glsl");
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, "./fragment-shader.glsl");
    const shaderProgram = gl.createProgram();
}
