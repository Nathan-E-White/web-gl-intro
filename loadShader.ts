
const loadShader = (gl: WebGLRenderingContext, type: number, source: string): WebGLShader => {
    const shader: WebGLShader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    const success: boolean = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
        return shader;
    }
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    throw new Error("Shader compile error");
}

export default loadShader;