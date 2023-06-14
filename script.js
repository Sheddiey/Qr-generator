
function showIt () {
    var text = document.getElementById("myOption").value;
    var image = document.getElementById("myImage");
    if(text == 'Sheddiey'){
        image.src = "https://pbs.twimg.com/profile_images/1668224238925258754/yJfuNK9q_400x400.jpg"
    }
    else if(text =="Google"){
        image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
    }
    else if (text == "Facebook"){
        image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Facebook.svg/2560px-Facebook.svg.png"
    }
    else if (text == "Bing"){
        image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Bing_logo_%282016%29.svg/1200px-Bing_logo_%282016%29.svg.png"
    }
    else{
        alert("No Picture Available");
    };
};