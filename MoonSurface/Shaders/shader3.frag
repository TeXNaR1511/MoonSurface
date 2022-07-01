#version 330

out vec4 outputColor;

in float height;

void main()
{
    outputColor = vec4(0,height/255,0,1);
}