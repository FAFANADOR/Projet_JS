var node_raiz_0 = "/User Homes/Fernando/01.Préparation des dossiers du Conseil académique/01.Préparation des dossiers/";
var salida = "";
var rootSpaceName = companyhome.childByNamePath( node_raiz_0 );
var childList = rootSpaceName.children;
var count = childList.length;
// Precondiciones
if ( logFile == null )
logFile = script.parent.createFile( "Taggear_fichier.txt" );
