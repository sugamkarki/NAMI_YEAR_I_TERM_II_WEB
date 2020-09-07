var a="abcdefghijklmnopqrstuvwxyz"
var b="abcdefghijklmnopqrstuvwxyza"
console.log(unique(a))
console.log(unique(b))
function unique(str)
{
    var u=true;
    let length=str.length;
    for(i=0;i<length;i++)
    {
        for(let j=i+1;j<length;j++)
        {
            if(str[j]==str[i])
            {
                u=false;
                break;
            }
        }
    }
    if(u==true)
    {
        return "unique";
    }
    else
    {
        return "not unique"
    }
}