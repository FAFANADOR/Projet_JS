if (!document.hasAspect("cm:taggable"))
document.addAspect("cm:taggable");
document.addTag("2012-2013");
document.addTag("Reunion ordinaire")

//guardamos el archivo txt con el registro
logFile.content = salida;
logFile.save();
logFile.content;
