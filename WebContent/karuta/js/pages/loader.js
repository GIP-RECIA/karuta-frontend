//==============================
function loadCSS(url)
//==============================
{
	document.write("<link rel='stylesheet' type='text/css' href='"+url+"'></link>");
};

//==============================
function loadLESS(url)
//==============================
{
	document.write("<link rel='stylesheet/less' type='text/css' href='"+url+"'></link>");
};

//==============================
function loadJS(url)
//==============================
{
	document.write("<script src='"+url+"'></script>");
};

//==============================
function loadKarutaPage(url)
//==============================
{
	//--------------------------------------------------------------
	loadCSS(url+"/other/bootstrap/css/bootstrap.min.css");
	loadCSS(url+"/other/css/jquery-ui.css");
	loadCSS(url+"/other/css/font-awesome/css/font-awesome.min.css");
	loadCSS(url+"/other/colorpicker/css/evol.colorpicker.min.css");
	//--------------------------------------------------------------
	var karuta_config = "../../../"+appliname+"/application/css/color.less";
	less = {
		    globalVars: {
		    	'KARUTA-CONFIG': "'"+karuta_config+"'"
		    }
		  };
	loadLESS(url+"/karuta/css/karuta.less");
	loadJS(url+"/other/js/less.min.js")
	//--------------------------------------------------------------
	loadJS(url+"/karuta/js/karuta.js");
	loadJS(url+"/karuta/js/UICom.js");
	loadJS(url+"/karuta/js/report.js");
	loadJS(url+"/karuta/js/batch.js");
	//--------------------------------------------------------------
	loadJS(url+"/karuta/js/pages/karuta-page.js");
	loadJS(url+"/karuta/js/pages/list.js");
	loadJS(url+"/karuta/js/pages/main.js");
	loadJS(url+"/karuta/js/pages/users.js");
	//--------------------------------------------------------------
	loadJS(url+"/karuta/js/pages/usersgroups.js");
	loadJS(url+"/karuta/js/pages/portfoliosgroups.js");
	loadJS(url+"/karuta/js/pages/execbatch.js");
	loadJS(url+"/karuta/js/pages/execreport.js");
	//--------------------------------------------------------------
	loadJS(url+"/karuta/js/resources/Type_Calendar.js");
	loadJS(url+"/karuta/js/resources/Type_Comments.js");
	loadJS(url+"/karuta/js/resources/Type_Document.js");
	loadJS(url+"/karuta/js/resources/Type_DocumentBlock.js");
	loadJS(url+"/karuta/js/resources/Type_Proxy.js");
	loadJS(url+"/karuta/js/resources/Type_ProxyBlock.js");
	loadJS(url+"/karuta/js/resources/Type_Get_Proxy.js");
	loadJS(url+"/karuta/js/resources/Type_TextField.js");
	loadJS(url+"/karuta/js/resources/Type_Field.js");
	loadJS(url+"/karuta/js/resources/Type_Image.js");
	loadJS(url+"/karuta/js/resources/Type_ImageBlock.js");
	loadJS(url+"/karuta/js/resources/Type_Get_Resource.js");
	loadJS(url+"/karuta/js/resources/Type_Get_Double_Resource.js");
	loadJS(url+"/karuta/js/resources/Type_Get_Get_Resource.js");
	loadJS(url+"/karuta/js/resources/Type_URL.js");
	loadJS(url+"/karuta/js/resources/Type_URLBlock.js");
	loadJS(url+"/karuta/js/resources/Type_Item.js");
	loadJS(url+"/karuta/js/resources/Type_Video.js");
	loadJS(url+"/karuta/js/resources/Type_CompetencyEvaluation.js");
	loadJS(url+"/karuta/js/resources/Type_Oembed.js");
	loadJS(url+"/karuta/js/resources/Type_Audio.js");
	loadJS(url+"/karuta/js/resources/Type_SendEmail.js");
	loadJS(url+"/karuta/js/resources/Type_URL2Unit.js");
	loadJS(url+"/karuta/js/resources/Type_Dashboard.js");
	loadJS(url+"/karuta/js/resources/Type_Color.js");
	loadJS(url+"/karuta/js/resources/Type_Bubble.js");
	loadJS(url+"/karuta/js/resources/Type_Action.js");
	loadJS(url+"/karuta/js/resources/Type_EuropassL.js");
	//--------------------------------------------------------------
	loadJS(url+"/other/js/jquery-1.10.2.min.js");
	loadJS(url+"/other/js/jquery-ui-1.10.3.custom.min.js");
	loadJS(url+"/other/bootstrap/js/bootstrap.min.js");
	loadJS(url+"/other/js/jquery.ui.touch-punch.min.js");
	//--------------------------------------------------------------
	loadJS(url+"/other/js/spin.js");
	loadJS(url+"/other/js/jquery.spin.js");
	//--------------------------------------------------------------
	loadCSS(url+"/other/wysihtml5/bootstrap3-wysihtml5.min.css");
	loadJS(url+"/other/wysihtml5/bootstrap3-wysihtml5.all.min.js");
	//--------------------------------------------------------------
	loadJS(url+"/other/js/jquery_hotkeys.js");
	loadJS(url+"/other/js/JQueryRC4.js");
	//--------------------------------------------------------------
	loadJS(url+"/other/colorpicker/js/evol.colorpicker.min.js");
	//--------------------------------------------------------------
	loadJS(url+"/karuta/js/model/Type_Portfolio.js");
	loadJS(url+"/karuta/js/model/Type_Node.js");
	loadJS(url+"/karuta/js/model/Type_User.js");
	loadJS(url+"/karuta/js/model/Type_UsersGroup.js");
	loadJS(url+"/karuta/js/model/Type_PortfoliosGroup.js");
	//--------------------------------------------------------------
//	loadCSS(url+"/other/lightbox/css/lightbox.css");
//	loadJS(url+"/other/lightbox/js/lightbox-2.6.min.js");
	//--------------------------------------------------------------
	loadCSS(url+"/other/jplayer/jplayer.blue.monday.css");
	loadJS(url+"/other/jplayer/jquery.jplayer.min.js");
	//--------------------------------------------------------------
	loadJS(url+"/other/js/jquery.ui.widget.js");
	loadJS(url+"/other/js/jquery.iframe-transport.js");
	loadJS(url+"/other/js/jquery.fileupload.js");
	//--------------------------------------------------------------
	loadCSS(url+"/other/oembed/jquery.oembed.css");
	loadJS(url+"/other/oembed/jquery.oembed.js");
	//--------------------------------------------------------------
	loadJS(url+"/other/bootstrap-datepicker/bootstrap-datepicker.js");
	loadJS(url+"/other/bootstrap-datepicker/bootstrap-datepicker.fr.js");
	loadCSS(url+"/other/bootstrap-datepicker/datepicker.css");
	//--------------------------------------------------------------
	if (elgg_installed) {
		loadCSS(url+"/socialnetwork-elgg/css/elgg.css");
		loadCSS(url+"/socialnetwork-elgg/css/socialnetwork.css");
		loadJS(url+"/socialnetwork-elgg/js/socialnetwork.js");
		loadJS(url+"/socialnetwork-elgg/js/moment-with-locales.min.js");
	}
	//--------------------------------------------------------------
	loadJS(url+"/other/js/js.cookie.js");
	loadJS(url+"/other/js/jquery.sortElements.js");
	//--------------------------------------------------------------
	loadJS(url+"/karuta/js/version.js");
	//--------------------------------------------------------------
	loadJS(url+"/karuta/js/dashboards/matrix_2dims/matrix_2dim.js");
	//--------------------------------------------------------------
}