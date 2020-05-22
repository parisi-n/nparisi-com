/*!
 * jquery.instagramFeed
 *
 * @version 1.2.6
 *
 * @author Javier Sanahuja Liebana <bannss1@gmail.com>
 * @contributor csanahuja <csanahuja@gmail.com>
 *
 * https://github.com/jsanahuja/jquery.instagramFeed
 *
 */
(function($){
    var defaults = {
        'host': "https://www.instagram.com/",
        'username': '',
        'tag': '',
        'container': '',
        'display_profile': true,
        'display_biography': true,
        'display_gallery': true,
        'display_igtv': false,
        'get_data': false,
        'callback': null,
        'styling': true,
        'items': 8,
        'items_per_row': 4,
        'margin': 0.5,
        'image_size': 640
    };
    var image_sizes = {
        "150": 0,
        "240": 1,
        "320": 2,
        "480": 3,
        "640": 4
    };
    var escape_map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
    };
    function escape_string(str){
        return str.replace(/[&<>"'`=\/]/g, function (char) {
            return escape_map[char];
        });
    }

    $.instagramFeed = function(opts){
        var options = $.fn.extend({}, defaults, opts);
        if(options.username == "" && options.tag == ""){
            console.error("Instagram Feed: Error, no username or tag found.");
            return false;
        }
        if(typeof options.get_raw_json !== "undefined"){
            console.warn("Instagram Feed: get_raw_json is deprecated. See use get_data instead");
            options.get_data = options.get_raw_json;
        }
        if(!options.get_data && options.container == ""){
            console.error("Instagram Feed: Error, no container found.");
            return false;
        }
        if(options.get_data && options.callback == null){
            console.error("Instagram Feed: Error, no callback defined to get the raw json");
            return false;
        }

        var is_tag = options.username == "",
            url = is_tag ? options.host + "explore/tags/"+ options.tag + "/" : options.host + options.username + "/";

        $.get(url, function(data){
            try{
                data = data.split("window._sharedData = ")[1].split("<\/script>")[0];
            }catch(e){
                console.error("Instagram Feed: It looks like the profile you are trying to fetch is age restricted. See https://github.com/jsanahuja/InstagramFeed/issues/26");
                return;
            }

            data = JSON.parse(data.substr(0, data.length - 1));
            data = data.entry_data.ProfilePage || data.entry_data.TagPage;
            if(typeof data === "undefined"){
                console.error("Instagram Feed: It looks like YOUR network has been temporary banned because of too many requests. See https://github.com/jsanahuja/jquery.instagramFeed/issues/25");
                return;
            }
            data = data[0].graphql.user || data[0].graphql.hashtag;
            
            if(options.get_data){
                options.callback(data);
                return;
            }   
            
//                 var width = (100 - options.margin * 2 * options.items_per_row)/options.items_per_row;
        
                
//                styles.gallery_image = " margin:"+options.margin+"% "+options.margin+"%;width:"+width+"%;";

            var html = "";

            //image size
            var image_index = typeof image_sizes[options.image_size] !== "undefined" ? image_sizes[options.image_size] : image_sizes[640];

            if(options.display_gallery){
                if(typeof data.is_private !== "undefined" && data.is_private === true){
                    html += "<p class='instagram_private'><strong>This profile is private</strong></p>";
                }else{
                    var imgs = (data.edge_owner_to_timeline_media || data.edge_hashtag_to_media).edges;
                        max = (imgs.length > options.items) ? options.items : imgs.length;
                    
                    html += "<div class='instagram_gallery'>";
                    for(var i = 0; i < max; i++){
                        var url = "https://www.instagram.com/p/" + imgs[i].node.shortcode,
                            image, type_resource, caption, sovraimg;

                        switch(imgs[i].node.__typename){
                            case "GraphSidecar":
                                type_resource = "sidecar"
                                image = imgs[i].node.thumbnail_resources[image_index].src;
                                sovraimg = '<svg class="instagram-carosello" aria-hidden="true" aria-label="Carosello" data-fa-proƒcessed="" data-prefix="far" data-icon="clone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 0H144c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h320c26.51 0 48-21.49 48-48v-48h48c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM362 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h42v224c0 26.51 21.49 48 48 48h224v42a6 6 0 0 1-6 6zm96-96H150a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h308a6 6 0 0 1 6 6v308a6 6 0 0 1-6 6z"></path></svg>';
                                break;
                            case "GraphVideo":
                                type_resource = "video";
                                image = imgs[i].node.thumbnail_src
                                sovraimg = '<svg class="instagram-video" aria-label="Play" aria-hidden="true" data-fa-processed="" data-prefix="fa" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>';
                                break;
                            default:
                                type_resource = "image";
                                sovraimg = '';
                                image = imgs[i].node.thumbnail_resources[image_index].src;
                        }
                        
                        if(
                            typeof imgs[i].node.edge_media_to_caption.edges[0] !== "undefined" && 
                            typeof imgs[i].node.edge_media_to_caption.edges[0].node !== "undefined" && 
                            typeof imgs[i].node.edge_media_to_caption.edges[0].node.text !== "undefined" && 
                            imgs[i].node.edge_media_to_caption.edges[0].node.text !== null
                        ){
                            caption = imgs[i].node.edge_media_to_caption.edges[0].node.text;
                        }else if(
                            typeof imgs[i].node.accessibility_caption !== "undefined" && 
                            imgs[i].node.accessibility_caption !== null
                        ){
                            caption = imgs[i].node.accessibility_caption;
                        }else{
                            caption = (is_tag ? data.name : data.username) + " image " + i;
                        }

                        html += "<a href='" + url +"' target='_blank' rel='noreferrer noopener' class='" + ( ( i%2 == 0 ) ? 'padding-right' : 'padding-left' ) +  "'>";
                        html += "<img class='instagram-pic' src='" + image + "' alt='" + escape_string(caption) + "' title='" + escape_string(caption) + "' "
                             +  "onerror=\"this.src='/images/image-not-found.svg'; this.onerror='';\" />";
                        html += sovraimg
                        html += "</a>"

                    }
                    html += "</div>";
                }
            }
            $(options.container).html(html);
        }).fail(function(e){
            console.error("Instagram Feed: Unable to fetch the given user/tag. Instagram responded with the status code: ", e.status);
        });

        return true;
    };
    
})(jQuery);