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
	var websiteMeta = {"category-windows.php":"A list of posts in category &ldquo;Windows&rdquo;","category-macos.php":"A list of posts in category &ldquo;MacOS&rdquo;","category-ios.php":"A list of posts in category &ldquo;iOS&rdquo;","dafd72c7a2f9c95f1485dee885c8f320-5.php":"￼","a7bd9d4ec40600027cbb282abb62bb67-0.php":"￼","67b8d9a993bca9910e1630828bdd0276-2.php":"<a data-flickr-embed=\"true\" data-header=\"true\" data-footer=\"false\" data-context=\"false\"  href=\"https:\/\/www.flickr.com\/photos\/jesuspower\/albums\/7215765","9fbd1bfc2740fe15a98d33e438d79a77-3.php":"￼","e1c5c16034cd4e9ebc5b64858a1ebdee-4.php":"￼","7c5691593858cf57148d63ea6c895566-1.php":"￼","category-web-app.php":"A list of posts in category &ldquo;Web App&rdquo;","category-android.php":"A list of posts in category &ldquo;Android&rdquo;","category-webos.php":"A list of posts in category &ldquo;webOS&rdquo;"};
 
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