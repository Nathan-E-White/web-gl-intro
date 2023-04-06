
attribute vec4 aVPosition;
uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;

void main() {
    gl_Position = uPMatrix * uMVMatrix * aVPosition;
}
