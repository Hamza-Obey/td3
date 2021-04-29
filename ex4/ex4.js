
function validate()
{
    let nom=document.getElementById("nom").value;
    let prenom=document.getElementById("prenom").value;
    let email=document.getElementById("email").value;
    let num=document.getElementById("num").value;
    if (nom.length==0||prenom.length==0 || email.length==0||num.length==0)
    {
        alert("all fildes are required");
        return false
    }
    else
    {window.alert("successful")} ;
    return true
}