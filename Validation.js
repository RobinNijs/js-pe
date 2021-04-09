function validform() {
    var a = document.forms["my-form"]["Voornaam"].value;
    var b = document.forms["my-form"]["Naam"].value;
    var c = document.forms["my-form"]["Gebruikersnaam"].value;

    if (Voornaam==null || a=="")
    {
        alert("Vul dit veld in");
        return true;}

    if (Naam==null || a=="")
    {
        alert("Vul dit veld in");
        return true;}
    if (Gebruikersnaam==null || a=="")
    {
        alert("Vul dit veld in");
        return true;}

}