(function() {
	var Realmac = Realmac || {};

	Realmac.meta = {
		
		// Set the browser title
		//
		// @var String text
		setTitle: function(text) {
			return document.title = text;
		},
		
		// Set the content attribute of a meta tag
		//
		// @var String name
		// @var String content
		setTagContent: function(tag, content){
			// If the tag being set is title
			// return the result of setTitle
			if ( tag === 'title' )
			{
				return this.setTitle(content);
			}
			
			// Otherwise try and find the meta tag
			var tag = this.getTag(tag);
			
			// If we have a tag, set the content
			if ( tag !== false )
			{
				return tag.setAttribute('content', content);
			}
			
			return false;
		},
		
		// Find a meta tag
		//
		// @var String name
		getTag: function(name) {
			var meta = document.querySelectorAll('meta');
			
			for ( var i=0; i<meta.length; i++ )
			{
				if (meta[i].name == name){
					return meta[i];
				}
			}
			
			var tag = document.createElement('meta');
			tag.name = name;
			document.getElementsByTagName('head')[0].appendChild(tag);
			
			return tag;
		}
	};
 
	// Object containing all website meta info
	var websiteMeta = {"er-browser-adds-support-for-opendyslexic.html":"￼","new-app-overlays.html":"￼It started as an app I wrote for myself. I shared an older Windows version some time back, but I’ve updated it, and added a MacOS version now to. Rea","open-dyslexic-mentions-and-uses.html":"OpenDyslexic has been around for less than a year, downloaded over 12,500 times, and it has already found many uses:\n\nWordSmith: An ex<a href=\"http:\/\/","removing-the-title-bar-from-gnome3-on-maximize.html":"Gnome 3 has a wonderful UI, but one glaring fault. The top system bar serves as a \"title bar\" for your current application, telling you what app you h","the-new-testament-in-OpenDyslexic.html":"￼It was originally going to just be just a gift for my wife, but so many wanted one, I worked on making a version I was comfortable selling: a thinner","archive-2012.html":"Archives for 2012","make-windows-fonts-readable-with-gdi.html":"An excellent <a href=\"http:\/\/www.grc.com\/ct\/ctwhat.htm\">research paper by Steve Gibson<\/a> explains better than I can some very good reasons to despis","archive-2013.html":"Archives for 2013","increasing-support-for-opendyslexic.html":"Wow! It's been an amazing few weeks! Right after Instapaper added support for OpenDyslexic, emails and comments poured in. Interview requests filled m","announcing-distress-signal-community-run-emergency-notifications.html":"<iframe frameborder=\"0\" height=\"410px\" src=\"http:\/\/www.kickstarter.com\/projects\/abbie\/distress-signal-community-centered-emergency-notif\/widget\/video.","archive-2011.html":"Archives for 2011","archive-2009.html":"Archives for 2009","customizing-the-command-menu-fader-in-ares.html":"I just spent the better part of the morning searching Google, trying to figure out how to get a black fader in the Command Menu using Ares. I searched","archive-2015.html":"Archives for 2015"};
 
	// pageId must match the key in websiteMeta object
	var url = window.location.pathname;
	var pageId = url.substring(url.lastIndexOf('/')+1);
	if (!pageId || pageId.length == 0){
		pageId = 'index.html';
	}
	pageMeta = websiteMeta[pageId];
 
	// If we have meta for this page
	if (pageMeta){
		Realmac.meta.setTagContent('description', pageMeta);
	}
 
 })();