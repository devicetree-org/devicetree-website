// Handles the gathering of github  releases details.

$(document).ready(function(){
    var api = "https://api.github.com/repos/devicetree-org/devicetree-specification/releases";
    
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    var latest_release_span = "<span class='latest-release'>Latest Release</span>";
    var prerelease_span = "<span class='pre-release'>Pre-release</span>";


    $.get(api, function (data) {
       $.each(data, function (idx, obj) {
          
           var release_date = new Date(obj.published_at);
           console.log(idx);
           var formatted_release_date = release_date.getDate() + " " + monthNames[release_date.getMonth()] + " " + release_date.getFullYear();
           
           // Check to see if it is the latest release
           if (idx == 0){
               // Check to see if the tag name exists
                   if(obj.prerelease == true){
                       $("#devicetree_releases").append("<p class='devicetree_release'><a href='" + obj.html_url + "'>" + obj.tag_name + "</a> - Released " + formatted_release_date + " " + prerelease_span + " " + latest_release_span + "</p>");
                   }
                   else{
                       $("#devicetree_releases").append("<p class='devicetree_release'><a href='" + obj.html_url + "'>" + obj.tag_name + "</a> - Released " + formatted_release_date + " " + latest_release_span + "</p>");

                   }               
           }
           else
           {
               if(obj.prerelease == true){
                   $("#devicetree_releases").append("<p class='devicetree_release'><a href='" + obj.html_url + "'>" + obj.tag_name + "</a> - Released " + formatted_release_date + " " + prerelease_span +  "</p>");
               }
               else{
                   $("#devicetree_releases").append("<p class='devicetree_release'><a href='" + obj.html_url + "'>" + obj.tag_name + "</a> - Released " + formatted_release_date + "</p>");
               }  
            }     
          

       });
   });
    
});




