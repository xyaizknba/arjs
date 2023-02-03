var iCtrlNum=0,iNumCtrl=0,aMesEs=Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var siCboDias="            <option value=\"0\"></option>\n", sCboMes = "            <option value=\"-1\"></option>\n";
for(var d=1;d<=31;d++){siCboDias+="            <option value=\""+d+"\">"+d+"</option>\n";}
for(var i=0;i<aMesEs.length;i++){sCboMes += "            <option value=\""+i+"\">"+aMesEs[i]+"</option>\n";}


var sIniHtm ="<html>\n<head>\n <meta name=\"author\" content=\"Armando Ramos M.\" />\n <meta name=\"description\" content=\"Atributos HTM - Armando Ramos M.\" />\n <link rel=\"stylesheet\" href=\"https://xyaizknba.github.io/arjs/formulario.css\" >\n <title></title>\n</head>\n<body>\n  <form name=\"frm\" method=\"post\" autocomplete=\"off\">\n    <table border=\"1\">\n";
var sFinHtm ="      <tr align=\"center\">\n        <td>\n          <input type=\"checkbox\" data-kung-lao=\"cmdBorrar_F\" data-kung-lao-1=\"0\" id=\"chkBorrar\" data-ar-cls-momov=\"bFrClMm\" data-ar-cls-moout=\"bFrClMo\">\n          <span data-ar-blink=\"3\" data-ar-blink-vel=\"1\" class=\"arm\">&lt;- Activar para Borrar</span><br>\n          <input type=\"button\" value=\"Borrar\" id=\"cmdBorrar_F\">\n        </td>\n        <td><input type=\"button\" value=\"Aceptar\" id=\"cmdAceptar\"></td>\n      </tr>\n    </table>\n  </form>\n    <span id=\"prgAR\" class=\"Oculto\">Armando Ramos M.</span>\n  <scr"+"ipt src=\"https://xyaizknba.github.io/arjs/ar.js\"></scr"+"ipt>\n  <sc"+"ript>\n  function cmdAceptar_onClick(){\n  }\n  function LimpMsgErrFrm(){\n  }\n  function IntvanPernzcvr(){\n  }\n </scr"+"ipt>\n</body></html>\n";
function cmdLimIdCtrl(){for(var i=1;i<=iNumCtrl;i++){if(Ar506(("NomCtrl"+i))){Ar200(("NomCtrl"+i),"");}}}
function cmdNomSerial(){for(var i=1;i<=iNumCtrl;i++){if(Ar506(("NomCtrl"+i))){Ar200(("NomCtrl"+i),("Ctrl"+i));}}}
function cmdLimEtiCtrl(){for(var i=1;i<=iNumCtrl;i++){if(Ar506(("txtLblCamp"+i))){Ar200(("txtLblCamp"+i),"");}}}
function wCarga(){iNumCtrl=document.getElementById("tNumCtrlFrm").value;}
function cmdGenerar(){
 var sCodigo="",iCrtNom=0,iLblCtrl=0;
 iNumCtrl=document.getElementById("tNumCtrlFrm").value;
 for(var i=1;i<=iNumCtrl;i++){
   if(document.getElementById(("NomCtrl"+i)).value.length>0){
     iCrtNom++;
   }
   if(document.getElementById(("txtLblCamp"+i)).value.length>0){
     iLblCtrl++;
     }
   }
 if((iCrtNom == iLblCtrl) && (iNumCtrl == iLblCtrl)){
  for(var i=1;i<=iNumCtrl;i++){
    switch(Number(document.getElementById(("TipCtrl"+i)).value)){
      case 1:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <input type=\"text\" id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" "+(document.getElementById(("req"+i)).value === "1" ? " required" : "")+" size=\"50\" maxlength=\""+document.getElementById(("LenCtrl"+i)).value+"\" placeholder=\""+document.getElementById(("txtLblCamp"+i)).value+"\" data-Intvan-1=\"11\" data-Intvan-2=\"0\" data-Intvan-3=\"txtFoc\" data-Intvan-4=\"txtBlu\" data-Intvan-5=\"m_err"+i+"\""+(document.getElementById(("req"+i)).value === "1" ? " data-Intvan-7=\"Campo Requerido\"" : "")+">\n          <span id=\"m_err"+i+"\" class=\"sNotErr\"></span>\n        </td>\n      </tr>\n";
      }break;
      case 2:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <input type=\"text\" id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" "+(document.getElementById(("req"+i)).value === "1" ? " required" : "")+" size=\"50\" maxlength=\""+document.getElementById(("LenCtrl"+i)).value+"\" placeholder=\""+document.getElementById(("txtLblCamp"+i)).value+"\" data-Intvan-1=\"18\" data-Intvan-2=\"0\" data-Intvan-3=\"txtFocMay\" data-Intvan-4=\"txtBluMay\" data-Intvan-5=\"m_err"+i+"\""+(document.getElementById(("req"+i)).value === "1" ? " data-Intvan-7=\"Campo Requerido\"" : "")+">\n          <span id=\"m_err"+i+"\" class=\"sNotErr\"></span>\n        </td>\n      </tr>\n";
      }break;
      case 3:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <input type=\"text\" id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" "+(document.getElementById(("req"+i)).value === "1" ? " required" : "")+" size=\"50\" maxlength=\""+document.getElementById(("LenCtrl"+i)).value+"\" placeholder=\""+document.getElementById(("txtLblCamp"+i)).value+"\" data-Intvan-1=\"19\" data-Intvan-2=\"0\" data-Intvan-3=\"txtFocMin\" data-Intvan-4=\"txtBluMin\" data-Intvan-5=\"m_err"+i+"\""+(document.getElementById(("req"+i)).value === "1" ? " data-Intvan-7=\"Campo Requerido\"" : "")+">\n          <span id=\"m_err"+i+"\" class=\"sNotErr\"></span>\n        </td>\n      </tr>\n";
      }break;      
      case 4:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <input type=\"password\" id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" "+(document.getElementById(("req"+i)).value === "1" ? " required" : "")+" size=\"50\" maxlength=\""+document.getElementById(("LenCtrl"+i)).value+"\" placeholder=\""+document.getElementById(("txtLblCamp"+i)).value+"\" data-Intvan-1=\"11\" data-Intvan-2=\"0\" data-Intvan-3=\"txtFoc\" data-Intvan-4=\"txtBlu\" data-Intvan-5=\"m_err"+i+"\""+(document.getElementById(("req"+i)).value === "1" ? " data-Intvan-7=\"Campo Requerido\"" : "")+">\n          <span id=\"m_err"+i+"\" class=\"sNotErr\"></span>\n        </td>\n      </tr>\n";
      }break;  
      case 5:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <input type=\"number\" id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" "+(document.getElementById(("req"+i)).value === "1" ? " required" : "")+" size=\"50\" maxlength=\""+document.getElementById(("LenCtrl"+i)).value+"\" placeholder=\""+document.getElementById(("txtLblCamp"+i)).value+"\" data-Intvan-1=\"20\" data-Intvan-2=\"0\" data-Intvan-3=\"txtFoc\" data-Intvan-4=\"txtBlu\" data-Intvan-5=\"m_err"+i+"\""+(document.getElementById(("req"+i)).value === "1" ? " data-Intvan-7=\"Campo Requerido\"" : "")+">\n          <span id=\"m_err"+i+"\" class=\"sNotErr\"></span>\n        </td>\n      </tr>\n";           
      }break;      
      case 6:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <input type=\"text\" id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" maxlength=\"5\" data-terminator-1=\"m_err"+i+"\" data-terminator-2=\"Ingresa exactamente 5 Caracteres\" data-chingon-f=\"txtFoc\" data-chingon-b=\"txtBlu\">\n          <span id=\"m_err"+i+"\" class=\"sNotErr\"></span>\n        </td>\n      </tr>\n";           
      }break;      
      case 7:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <input type=\"number\" id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" placeholder=\""+document.getElementById(("txtLblCamp"+i)).value+"\" data-chingon91=\""+document.getElementById(("txtAttMin"+i)).value+"\" data-chingon92=\""+document.getElementById(("txtAttMax"+i)).value+"\" data-chingon93=\"m_err"+i+"\" data-chingon94=\"Valor Fuera del Limite\" data-chingon95=\"Dato Obligatorio\" data-chingon96=\"1\" data-chingon-f=\"txtFoc\" data-chingon-b=\"txtBlu\" ><br>\n          <span id=\"m_err"+i+"\" class=\"sNotErr\"></span>\n        </td>\n      </tr>\n";           
      }break; 
      case 8:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <input type=\"text\" id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" placeholder=\""+document.getElementById(("txtLblCamp"+i)).value+"\" size=\"50\" maxlength=\""+document.getElementById(("LenCtrl"+i)).value+"\" data-kitana=\"Ingresa una Direccion de Email Correcta\" data-kitana-i=\"z_ree"+i+"\" data-chingon-f=\"txtFoc\" data-chingon-b=\"txtBlu\"><br>\n          <span id=\"m_err"+i+"\" class=\"sNotErr\"></span>\n        </td>\n      </tr>\n";           
      }break;      
      case 9:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <input type=\"number\" id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" placeholder=\""+document.getElementById(("txtLblCamp"+i)).value+"\" size=\"50\" maxlength=\""+document.getElementById(("LenCtrl"+i)).value+"\" data-Intvan-1=\"22\" data-Intvan-2=\"9\" data-Intvan-3=\"txtFoc\" data-Intvan-4=\"txtBlu\" data-Intvan-5=\"m_err"+i+"\" data-Intvan-7=\"Campo Requerido\">\n          <span id=\"m_err"+i+"\" class=\"sNotErr\"></span>\n        </td>\n      </tr>\n";           
      }break;      
      case 10:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <input type=\"color\" id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" placeholder=\""+document.getElementById(("txtLblCamp"+i)).value+"\" size=\"50\" maxlength=\""+document.getElementById(("LenCtrl"+i)).value+"\" data-Intvan-1=\"11\" data-Intvan-2=\"0\" data-Intvan-3=\"txtFoc\" data-Intvan-4=\"txtBlu\" data-Intvan-5=\"m_err"+i+"\" data-Intvan-7=\"Campo Requerido\">\n          <span id=\"m_err"+i+"\" class=\"sNotErr\"></span>\n        </td>\n      </tr>\n";           
      }break;   
      case 11:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">Comentario</label></td>\n        <td>\n          <textarea id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" placeholder=\""+document.getElementById(("txtLblCamp"+i)).value+"\" data-kenshi=\"3\" cols=\"40\" rows=\"10\" data-chingon-f=\"txtFoc\" data-chingon-b=\"txtBlu\"></textarea>\n        </td>\n      </tr>\n";           
      }break;      
      case 12:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\"txtDia"+i+"_t\">Fecha</label></td>\n        <td>\n          <input type=\"text\" name=\"txtDia"+i+"_t\" id=\"txtDia"+i+"_t\" size=\"2\" maxlength=\"2\" data-mazinger-z=\"txtDia"+i+"_t,txtMes"+i+"_t,txtAnio"+i+"_t\" data-mazinger-z-1=\"m_err"+i+"\" data-mazinger-z-2=\"Fecha Incorrecta\" data-mazinger-z-3=\""+document.getElementById(("NomCtrl"+i)).value+"\" data-chingon-f=\"txtFoc\" data-chingon-b=\"txtBlu\">\n          -<input type=\"text\" name=\"txtMes"+i+"_t\" id=\"txtMes"+i+"_t\"  size=\"2\" maxlength=\"2\">\n          -<input type=\"text\" name=\"txtAnio"+i+"_t\" id=\"txtAnio"+i+"_t\"  size=\"4\" maxlength=\"4\">\n          <input type=\"text\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" id=\""+document.getElementById(("NomCtrl"+i)).value+"\" readonly size=\"10\" maxlength=\"10\"> (Dia-Mes-Año) &lt;-- Cambia Este Control text por Hidden --&gt;<br>\n          <span id=\"m_err"+i+"\" class=\"sNotErr FntZ8\"></span>\n        </td>\n      </tr>\n";           
      }break;      
      case 13:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\"cbo"+document.getElementById(("NomCtrl"+i)).value+"Anio\">Fecha Contratacion:</label></td>\n        <td>\n          <select id=\"cbo"+document.getElementById(("NomCtrl"+i)).value+"Anio\" name=\"cbo"+document.getElementById(("NomCtrl"+i)).value+"Anio\" data-chingon11=\""+document.getElementById(("NomCtrl"+i)).value+"\" data-chingon12=\"Tonto Ingresa una Fecha Correcta\" data-chingon13=\"m_err"+i+"\">\n            <option value=\"0\"></option>\n";           
        var iAnioIni = document.getElementById(("txtAttMin"+i)).value.length > 0 ? Number(document.getElementById(("txtAttMin"+i)).value) : 2000; 
        var iAnioFin = document.getElementById(("txtAttMax"+i)).value.length > 0 ? Number(document.getElementById(("txtAttMax"+i)).value) : 2050;
        for(var XX=iAnioIni;XX<=iAnioFin;XX++){
          sCodigo+="            <option value=\""+XX+"\">"+XX+"</option>\n";
        }
        sCodigo+="          </select>\n          <select id=\"cbo"+document.getElementById(("NomCtrl"+i)).value+"Mes\" name=\"cbo"+document.getElementById(("NomCtrl"+i)).value+"Mes\">\n";
        sCodigo+=sCboMes;
        sCodigo+="          </select>\n";
        sCodigo+="          <select id=\"cbo"+document.getElementById(("NomCtrl"+i)).value+"Dia\" name=\"cbo"+document.getElementById(("NomCtrl"+i)).value+"Dia\">\n";           
        sCodigo+=siCboDias;
        sCodigo+="          </select><br>\n          <span id=\"m_err"+i+"\" class=\"sNotErr\"></span>\n        </td>\n      </tr>\n";           
      }break;      
      case 14:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\"txtValCorreo"+i+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <input type=\"email\" id=\"txtValCorreo"+i+"\" name=\"txtValCorreo"+i+"\" size=\"150\" maxlength=\"150\" placeholder=\""+document.getElementById(("txtLblCamp"+i)).value+"\">\n        </td>\n      </tr>\n      <tr>\n        <td><label for=\"txtValCorreoConf"+i+"\">Confirmar "+document.getElementById(("txtLblCamp"+i)).value+":</label></td>\n        <td>\n          <input type=\"text\" id=\"txtValCorreoConf"+i+"\" name=\"txtValCorreoConf"+i+"\"  size=\"150\" maxlength=\"150\" placeholder=\"Confirmar "+document.getElementById(("txtLblCamp"+i)).value+"\"><br>\n          <span id=\"m_err"+i+"\" data-chingon01=\"gkgInyPbeerb"+i+"\" data-chingon02=\"gkgInyPbeerbPbas"+i+"\" data-chingon03=\"\" data-chingon-f=\"txtFoc\" data-chingon-b=\"txtBlu\" class=\"sNotErr\"></span>\n        </td>\n      </tr>\n";           
      }break;      
      case 15:{
        sCodigo+="      <tr>\n        <td>"+document.getElementById(("txtLblCamp"+i)).value+"</td>\n        <td>\n          "+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"_1\">XXXX </label><input type=\"radio\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" id=\""+document.getElementById(("NomCtrl"+i)).value+"_1\" value=\"0\"><br>\n          <label for=\""+document.getElementById(("NomCtrl"+i)).value+"_2\">yyyyy </label><input type=\"radio\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" id=\""+document.getElementById(("NomCtrl"+i)).value+"_2\" value=\"1\">\n        </td>\n      </tr>\n";           
      }break;      

      case 16:{
        sCodigo+="      <tr>\n        <td>"+document.getElementById(("txtLblCamp"+i)).value+"</td>\n        <td>\n          "+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"_1\">XXXX </label><input type=\"radio\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" id=\""+document.getElementById(("NomCtrl"+i)).value+"_1\" value=\"0\">&nbsp;&nbsp;\n          <label for=\""+document.getElementById(("NomCtrl"+i)).value+"_2\">yyyyy </label><input type=\"radio\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" id=\""+document.getElementById(("NomCtrl"+i)).value+"_2\" value=\"1\">\n        </td>\n      </tr>\n";           
      }break;      

      case 17:{
        sCodigo+="      <tr>\n        <td>"+document.getElementById(("txtLblCamp"+i)).value+"</td>\n        <td>\n";     
        var iCboIni = document.getElementById(("txtAttMin"+i)).value.length > 0 ? Number(document.getElementById(("txtAttMin"+i)).value) : 1; 
        var iCboFin = document.getElementById(("txtAttMax"+i)).value.length > 0 ? Number(document.getElementById(("txtAttMax"+i)).value) : 10;
        for(var XX=iCboIni;XX<=iCboFin;XX++){
           sCodigo+="          "+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"_"+XX+"\">Opcion "+XX+"</label> <input type=\"radio\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" id=\""+document.getElementById(("NomCtrl"+i)).value+"_"+XX+"\" value=\""+XX+"\"><br>\n";     
        }        
        sCodigo+="        </td>\n      </tr>\n";
      }break;      
      case 18:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <select id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\">\n            <option value=\"0\"></option>\n            <option value=\"1\">Opcion 1</option>\n            <option value=\"2\">Opcion 2</option>\n          </select>\n        </td>\n      </tr>\n";           
      }break;      
      case 19:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <select id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\">\n            <option value=\"0\"></option>\n";           
        var iCboIni = document.getElementById(("txtAttMin"+i)).value.length > 0 ? Number(document.getElementById(("txtAttMin"+i)).value) : 1; 
        var iCboFin = document.getElementById(("txtAttMax"+i)).value.length > 0 ? Number(document.getElementById(("txtAttMax"+i)).value) : 10;
        for(var XX=iCboIni;XX<=iCboFin;XX++){
          sCodigo+="            <option value=\""+XX+"\">Opcion "+XX+"</option>\n";
        }        
        sCodigo+="          </select>\n        </td>\n      </tr>\n";
      }break;      
      case 20:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <input type=\"checkbox\" id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\">\n        </td>\n      </tr>\n";           
      }break; 
      case 21:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <input type=\"date\" id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" "+(document.getElementById(("req"+i)).value === "1" ? " required" : "")+" size=\"50\" maxlength=\""+document.getElementById(("LenCtrl"+i)).value+"\" placeholder=\""+document.getElementById(("txtLblCamp"+i)).value+"\" data-Intvan-1=\"11\" data-Intvan-2=\"0\" data-Intvan-3=\"txtFoc\" data-Intvan-4=\"txtBlu\" data-Intvan-5=\"m_err"+i+"\""+(document.getElementById(("req"+i)).value === "1" ? " data-Intvan-7=\"Campo Requerido\"" : "")+">\n          <span id=\"m_err"+i+"\" class=\"sNotErr\"></span>\n        </td>\n      </tr>\n";
      }break;      
      case 22:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <input type=\"datetime-local\" id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" "+(document.getElementById(("req"+i)).value === "1" ? " required" : "")+" size=\"50\" maxlength=\""+document.getElementById(("LenCtrl"+i)).value+"\" placeholder=\""+document.getElementById(("txtLblCamp"+i)).value+"\" data-Intvan-1=\"11\" data-Intvan-2=\"0\" data-Intvan-3=\"txtFoc\" data-Intvan-4=\"txtBlu\" data-Intvan-5=\"m_err"+i+"\""+(document.getElementById(("req"+i)).value === "1" ? " data-Intvan-7=\"Campo Requerido\"" : "")+">\n          <span id=\"m_err"+i+"\" class=\"sNotErr\"></span>\n        </td>\n      </tr>\n";
      }break;      
      case 23:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <input type=\"month\" id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" "+(document.getElementById(("req"+i)).value === "1" ? " required" : "")+" size=\"50\" maxlength=\""+document.getElementById(("LenCtrl"+i)).value+"\" placeholder=\""+document.getElementById(("txtLblCamp"+i)).value+"\" data-Intvan-1=\"11\" data-Intvan-2=\"0\" data-Intvan-3=\"txtFoc\" data-Intvan-4=\"txtBlu\" data-Intvan-5=\"m_err"+i+"\""+(document.getElementById(("req"+i)).value === "1" ? " data-Intvan-7=\"Campo Requerido\"" : "")+">\n          <span id=\"m_err"+i+"\" class=\"sNotErr\"></span>\n        </td>\n      </tr>\n";
      }break;      
      case 24:{
        var iRangeMin = document.getElementById(("txtAttMin"+i)).value.length > 0 ? Number(document.getElementById(("txtAttMin"+i)).value) : 1; 
        var iRangeMax = document.getElementById(("txtAttMax"+i)).value.length > 0 ? Number(document.getElementById(("txtAttMax"+i)).value) : 10;
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <input type=\"range\" id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" "+(document.getElementById(("req"+i)).value === "1" ? " required" : "")+" min=\""+iRangeMin+"\" max=\""+iRangeMax+"\">\n        </td>\n      </tr>\n";
      }break;      
      case 25:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <input type=\"tel\" id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" "+(document.getElementById(("req"+i)).value === "1" ? " required" : "")+" size=\"50\" maxlength=\""+document.getElementById(("LenCtrl"+i)).value+"\" placeholder=\""+document.getElementById(("txtLblCamp"+i)).value+"\" data-Intvan-1=\"11\" data-Intvan-2=\"0\" data-Intvan-3=\"txtFoc\" data-Intvan-4=\"txtBlu\" data-Intvan-5=\"m_err"+i+"\""+(document.getElementById(("req"+i)).value === "1" ? " data-Intvan-7=\"Campo Requerido\"" : "")+">\n          <span id=\"m_err"+i+"\" class=\"sNotErr\"></span>\n        </td>\n      </tr>\n";
      }break;      
      case 26:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <input type=\"time\" id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" "+(document.getElementById(("req"+i)).value === "1" ? " required" : "")+" size=\"50\" maxlength=\""+document.getElementById(("LenCtrl"+i)).value+"\" placeholder=\""+document.getElementById(("txtLblCamp"+i)).value+"\" data-Intvan-1=\"11\" data-Intvan-2=\"0\" data-Intvan-3=\"txtFoc\" data-Intvan-4=\"txtBlu\" data-Intvan-5=\"m_err"+i+"\""+(document.getElementById(("req"+i)).value === "1" ? " data-Intvan-7=\"Campo Requerido\"" : "")+">\n          <span id=\"m_err"+i+"\" class=\"sNotErr\"></span>\n        </td>\n      </tr>\n";
      }break;      
      case 27:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <input type=\"url\" id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" "+(document.getElementById(("req"+i)).value === "1" ? " required" : "")+" size=\"50\" maxlength=\""+document.getElementById(("LenCtrl"+i)).value+"\" placeholder=\""+document.getElementById(("txtLblCamp"+i)).value+"\" data-Intvan-1=\"11\" data-Intvan-2=\"0\" data-Intvan-3=\"txtFoc\" data-Intvan-4=\"txtBlu\" data-Intvan-5=\"m_err"+i+"\""+(document.getElementById(("req"+i)).value === "1" ? " data-Intvan-7=\"Campo Requerido\"" : "")+">\n          <span id=\"m_err"+i+"\" class=\"sNotErr\"></span>\n        </td>\n      </tr>\n";
      }break;      
      case 28:{
        sCodigo+="      <tr>\n        <td>"+(document.getElementById(("req"+i)).value === "1" ? "<span>*</span> " : "")+"<label for=\""+document.getElementById(("NomCtrl"+i)).value+"\">"+document.getElementById(("txtLblCamp"+i)).value+"</label></td>\n        <td>\n          <input type=\"week\" id=\""+document.getElementById(("NomCtrl"+i)).value+"\" name=\""+document.getElementById(("NomCtrl"+i)).value+"\" "+(document.getElementById(("req"+i)).value === "1" ? " required" : "")+" size=\"50\" maxlength=\""+document.getElementById(("LenCtrl"+i)).value+"\" placeholder=\""+document.getElementById(("txtLblCamp"+i)).value+"\" data-Intvan-1=\"11\" data-Intvan-2=\"0\" data-Intvan-3=\"txtFoc\" data-Intvan-4=\"txtBlu\" data-Intvan-5=\"m_err"+i+"\""+(document.getElementById(("req"+i)).value === "1" ? " data-Intvan-7=\"Campo Requerido\"" : "")+">\n          <span id=\"m_err"+i+"\" class=\"sNotErr\"></span>\n        </td>\n      </tr>\n";
      }break;      
      
    }
  }
  document.getElementById("txtCodigo").value= sIniHtm+sCodigo+sFinHtm;
  Ar460("txtCodigo");
 }else{alert("Ingresa los Nombres de Todos los Controles");}
}
function Ar200(i,v){if(i.length>0 && document.getElementById(i)!==null){document.getElementById(i).value=v;}}function Ar201(i,v){if(i.length>0 && document.getElementById(i)!==null){document.getElementById(i).innerHTML=v;}}
function Ar460(I){if(document.getElementById(I)!==null && document.getElementById(I).value.length>0){document.getElementById(I).select();document.execCommand("copy");}}
function Ar506(A){var b=false;if(A.length>0&&document.getElementById(A)!==null){b=true;}return b;}
