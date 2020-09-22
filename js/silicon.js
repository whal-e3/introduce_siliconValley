var fileName = location.href.split('/').slice(-1);
console.log(fileName);
if (fileName == 'index.html') {
    document.getElementById('home').style.backgroundColor = '#F4B400';
} else if (fileName == 'about.html') {
    document.getElementById('about').style.backgroundColor = '#F4B400';
} else if (fileName == 'map.html') {
    document.getElementById('map').style.backgroundColor = '#F4B400';
} else if (fileName == 'video.html') {
    document.getElementById('video').style.backgroundColor = '#F4B400';
} else if (fileName == 'company.html') {
    document.getElementById('company').style.backgroundColor = '#F4B400';
} 



function siliconMap() {
    var siliconValley = {lat: 37.419857, lng: -122.078827};
    var map = new google.maps.Map(  
        document.getElementById("googleMap"), {zoom: 14, center: siliconValley});
    var marker = new google.maps.Marker({
        position: siliconValley, map: map,
    });
}