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
	var websiteMeta = {"category-php.html":"A list of posts in category &ldquo;PHP&rdquo;","category-android.html":"A list of posts in category &ldquo;Android&rdquo;","category-cms.html":"A list of posts in category &ldquo;CMS&rdquo;","category-macos.html":"A list of posts in category &ldquo;MacOS&rdquo;","sculptcms.html":"￼\n\nSculptCMS is a free, flat-file CMS designed for straight-forward usage. There is no special markup, and no extra steps. Simply drop your markdown f","category-web-app.html":"A list of posts in category &ldquo;Web App&rdquo;","category-windows.html":"A list of posts in category &ldquo;Windows&rdquo;","junk-silver-wallet.html":"￼","category-ios.html":"A list of posts in category &ldquo;iOS&rdquo;","category-opensource.html":"A list of posts in category &ldquo;OpenSource&rdquo;","rrbi-silver-wallet.html":"￼","openweb.html":"￼","isword.html":"<a data-flickr-embed=\"true\" data-header=\"true\" data-footer=\"false\" data-context=\"false\"  href=\"https:\/\/www.flickr.com\/photos\/jesuspower\/albums\/7215765","category-webos.html":"A list of posts in category &ldquo;webOS&rdquo;","overlays.html":"￼","junk-silver.html":"￼"};
 
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