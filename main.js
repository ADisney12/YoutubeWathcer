$(document).ready(function(){
    watch_id = 0;

    $("form").submit(function(event){
        event.preventDefault()

        let key = "AIzaSyDYtIKaGzFczw7u5-ZN3L2hQbAF-UJJpJs"

        let video =''

        var search = $("#search").val()
        videoSearch(key,search,10,video)
    })
    function videoSearch(key,search,maxresults,video){
        $("#vids").empty()
        
        $.get("https://www.googleapis.com/youtube/v3/search?key="+ key + 
        "&type=video&part=snippet&maxResults=" + maxresults + "&q=" + search, (data) => {
            console.log(data)

            data.items.forEach(element => {
                video = '<iframe width = "420" height = "315"  src="http://www.youtube.com/embed/${item.id.videoId}" frameborder = "0" allowfullscreen></iframe>'
                let id = element.id.videoId;
                let date_published = JSON.stringify(element.snippet.publishedAt, undefined, 2);
                let title = JSON.stringify(element.snippet.title, undefined, 2);
                let thumbnsil = element.snippet.thumbnails.default.url;
                let pic = document.createElement('img');
                pic.src = thumbnsil;
                pic.height = 200;
                pic.width = 300;

                

                let vid_holder = document.createElement('div');
                vid_holder.innerHTML = "";
                vid_holder.append(pic);

                vid_holder.append(document.createElement('br'));

                vid_holder.append(title);
        
                vid_holder.append(document.createElement('br'));
                let watch = document.createElement('button');
              
                watch.textContent = 'watch';

                watch.id = "watch";
               
                watch.className = "btn btn-danger";
            
                watch.onclick =  () => {
                    // let contain = document.getElementById('contain');
                    // contain.innerHTML = '';
                    // let frame = document.createElement('iframe');
                    // frame.id = "frame";
                    // frame.src = 'http://www.youtube.com/embed/' + id;
                    // frame.width = 1000;
                    // frame.height = 800                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ;
                    // contain.append(frame)
                    location.href = 'http://www.youtube.com/embed/' + id;
                
                };

                
                vid_holder.append(watch);

                
                 
                $("#vids").append(vid_holder)
                let br = document.createElement('br');
                $("#vids").append(br)


            });

    

                                                     
        })

    }
})