// Handles the gathering of github  releases details.

$(document).ready(function(){
    
    // API URL for fetching releases from a specific Github repo
    var api = "https://api.github.com/repos/devicetree-org/devicetree-specification/releases";
    
    // Month Names for Displaying textual version of month.
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    // Setup a Latest Release Span to append to the latest release.
    var latest_release_span = "<span class='latest-release'>Latest Release</span>";
    
    // Setup a prerelease span to append to any pre-releases
    var prerelease_span = "<span class='pre-release'>Pre-release</span>";

    // GET the api response
    $.get(api, function (data) {
       // Loop each object in the data json array
       $.each(data, function (idx, obj) {
          
           // Get the release published_at date.
           var release_date = new Date(obj.published_at);
           
           // Create a release format string to output
           var formatted_release_date = release_date.getDate() + " " + monthNames[release_date.getMonth()] + " " + release_date.getFullYear();
           
           // Check to see if it is the latest release
           if (idx == 0){
               
                   // Set the current release
                   $("#current_release").append("<p class='devicetree_release'><a href='" + obj.html_url + "'>DeviceTree Specification Release " + obj.tag_name + "</a> - Released " + formatted_release_date  + " " + latest_release_span + "</p>");
               
                   // Check to see if obj is a pre-release
                   if(obj.prerelease == true){
                       $("#devicetree_releases").append("<p class='devicetree_release'><a href='" + obj.html_url + "'>" + obj.tag_name + "</a> - Released " + formatted_release_date + " " + prerelease_span + " " + latest_release_span + "</p>");
                   }
                   
                   else{
                       $("#devicetree_releases").append("<p class='devicetree_release'><a href='" + obj.html_url + "'>" + obj.tag_name + "</a> - Released " + formatted_release_date + " " + latest_release_span + "</p>");

                   }               
           }
           else
           {
               
               // Append to previous releases

               // Check to see if obj is a pre-release
               if(obj.prerelease == true){
                   $("#devicetree_releases").append("<p class='devicetree_release'><a href='" + obj.html_url + "'>" + obj.tag_name + "</a> - Released " + formatted_release_date + " " + prerelease_span +  "</p>");
               }
               else{
                   $("#previous_releases").append("<p class='devicetree_release'><a href='" + obj.html_url + "'>DeviceTree Specification Release " + obj.tag_name + "</a> - Released " + formatted_release_date + " </p>");
                   $("#devicetree_releases").append("<p class='devicetree_release'><a href='" + obj.html_url + "'>" + obj.tag_name + "</a> - Released " + formatted_release_date + "</p>");
               }  
            }     
          

       });
   });
    
});
