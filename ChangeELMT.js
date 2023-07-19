let arr=["https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"];
/*function change()
{
    document.body.style.backgroundColor="red";
    document.getElementById("h").style.backgroundColor="white";
    document.getElementById("photo").src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHRtbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    
}*/
let pos=0;
document.getElementById("photo").src=arr[pos];
function prev()
{
    if(pos>0)
    {
        pos--;
        document.getElementById("photo").src=arr[pos]; 
    } 
    else
        alert("Null");   
    return pos;
}
function next()
{
    
    
    if(pos+1<arr.length)
    {
        pos++;
        document.getElementById("photo").src=arr[pos];   
    }
    else
        alert("ArrayIndex OutofBound!");
    return pos;    
}

document.getElementsByTagName("button").addEventListener("click",change);

