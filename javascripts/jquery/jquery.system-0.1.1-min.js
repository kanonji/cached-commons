/*
 * jQuery System plugin 0.1.1
 *
 * Copyright (c) 2010 Lance Pollard
 *
 * Licensed under the MIT:
 *   http://www.opensource.org/licenses/mit-license.php
 */
(function(a){a.system={browser:{safari:false,firefox:false,ie:false,opera:false,chrome:false,netscape:false,other:false},os:{windows:false,mac:false,linux:false,iphone:false,ipod:false,android:false,ipad:false,blackberry:false,motorola:false,nokia:false,other:false},searchString:function(e){for(var b=0;b<e.length;b++){var c=e[b].string;var d=e[b].prop;this.versionSearchString=e[b].versionSearch||e[b].identity;if(c){if(c.indexOf(e[b].subString)!=-1){return e[b].identity}}else{if(d){return e[b].identity}}}},searchVersion:function(c){var b=c.indexOf(this.versionSearchString);if(b==-1){return}return parseFloat(c.substring(b+this.versionSearchString.length+1))},searchPlatform:function(e,f,g){for(var d=0;d<f.length;d++){var c=f[d].string;var b=f[d][g];if(e.match(new RegExp(c))){return b}}},searchDate:function(d,b,f){for(var e=0;e<f.length;e++){if(f[e].browser==d){f[e].versions=f[e].versions.reverse();for(var c=0;c<f[e].versions.length;c++){var g=f[e].versions[c].version;if(g==b){return f[e].versions[c].date}else{if(Math.floor(g)==Math.floor(b)){return f[e].versions[c].date}}}}}},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Internet Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataBrowserDate:[{browser:"Internet Explorer",versions:[{version:1,date:1995},{version:2,date:1995},{version:3,date:1996},{version:4,date:1997},{version:5,date:1999},{version:6,date:2001},{version:7,date:2006},{version:8,date:2009}]},{browser:"Safari",versions:[{version:1,date:"June 23, 2003"},{version:1.03,date:"August 13, 2004"},{version:2,date:"April 29, 2005"},{version:2.02,date:"October 31, 2005"},{version:2.04,date:"January 10, 2006"},{version:3,date:"June 11, 2007"},{version:3.2,date:"November 13, 2008"},{version:3.23,date:"May 12, 2009"},{version:4,date:"June 8, 2009"},{version:4.04,date:"November 11, 2009"}]},{browser:"Opera",versions:[{version:4,date:"June, 2000"},{version:5,date:"December, 2000"},{version:6,date:"November, 2001"},{version:7,date:"January, 2003"},{version:7.5,date:"May, 2004"},{version:8,date:"April, 2005"},{version:8.5,date:"Sepember, 2005"},{version:9,date:"June, 2006"},{version:10,date:"September, 2009"},{version:10.5,date:"March, 2010"}]},{browser:"Chrome",versions:[{version:1,date:"December 11, 2008"},{version:2,date:"May 24, 2009"},{version:3,date:"October 10, 2009"},{version:4,date:"January 25, 2010"},{version:5,date:"April 09, 2010"}]}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPad",identity:"iPad"},{string:navigator.userAgent,subString:"iPod",identity:"iPod"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone"},{string:navigator.userAgent,subString:"Android",identity:"Android"},{string:navigator.userAgent,subString:"BlackBerry",identity:"BlackBerry"},{string:navigator.userAgent,subString:"Motorola",identity:"Motorola"},{string:navigator.userAgent,subString:"Nokia",identity:"Nokia"},{string:navigator.platform,subString:"Linux",identity:"Linux"}],dataPlatform:[{string:"Windows NT 6.0",name:"Windows Vista",key:"vista"},{string:"Windows NT 5.2",name:"Windows Server 2003; Windows XP x64 Edition",key:"2003"},{string:"Windows NT 5.1",name:"Windows XP",key:"xp"},{string:"Windows NT 5.01",name:"Windows 2000, Service Pack 1 (SP1)",key:"sp1"},{string:"Windows NT 5.0",name:"Windows 2000",key:"2000"},{string:"Windows NT 4.0",name:"Microsoft Windows NT 4.0",key:"nt"},{string:"Windows 98; Win 9x 4.90",name:"Windows Me",key:"me"},{string:"Windows 98",name:"Windows 98",key:"98"},{string:"Windows 95",name:"Windows 95",key:"95"},{string:"Windows CE",name:"Windows CE",key:"ce"},{string:"Mac_PowerPC",name:"Mac OSX PPC",key:"ppc"},{string:"Intel Mac OS X 10[_|.]3",name:"Mac OSX Intel Panther",key:"panther"},{string:"Intel Mac OS X 10[_|.]4",name:"Mac OSX Intel Tiger",key:"tiger"},{string:"Intel Mac OS X 10[_|.]5",name:"Mac OSX Intel Leopard",key:"leopard"},{string:"Intel Mac OS X 10[_|.]6",name:"Mac OSX Intel Snow Leopard",key:"snow_leopard"}]};a.system.browser.name=a.system.searchString(a.system.dataBrowser)||"An unknown browser";a.system.browser.version=a.system.searchVersion(navigator.userAgent)||a.system.searchVersion(navigator.appVersion)||"an unknown version";a.system.browser.date=a.system.searchDate(a.system.browser.name,a.system.browser.version,a.system.dataBrowserDate);name=a.system.browser.name.toLowerCase();if(name=="internet explorer"){name="ie"}if(name in a.system.browser){a.system.browser[name]=true}a.system.os.name=a.system.searchString(a.system.dataOS)||"an unknown OS";a.system.os.platform=a.system.searchPlatform(navigator.userAgent,a.system.dataPlatform,"name");a.system.os.key=a.system.searchPlatform(navigator.userAgent,a.system.dataPlatform,"key");name=a.system.os.name.toLowerCase();if(name in a.system.os){a.system.os[name]=true}})(jQuery);