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
	var websiteMeta = {"archive-aug-2015.html":"Archives for Aug 2015","archive-sep-2012.html":"Archives for Sep 2012","0006be93ea4c06950c7f1d1602b69aeb-4.html":"OpenDyslexic has been around for less than a year, downloaded over 12,500 times, and it has already found many uses:\n\nWordSmith: An ex<a href=\"http:\/\/","archive-jan-2013.html":"Archives for Jan 2013","eab2f425d3cc908d9d7d630d1885946e-3.html":"Wow! It's been an amazing few weeks! Right after Instapaper added support for OpenDyslexic, emails and comments poured in. Interview requests filled m","783b6eeea3cf7dcdc1578bf6b901431b-2.html":"￼It was originally going to just be just a gift for my wife, but so many wanted one, I worked on making a version I was comfortable selling: a thinner","507305293b00808b5ba389847408b968-1.html":"￼","b317f065f061a039e163024370296b79-0.html":"￼It started as an app I wrote for myself. I shared an older Windows version some time back, but I’ve updated it, and added a MacOS version now to. Rea","archive-oct-2012.html":"Archives for Oct 2012"};
 
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