particlesJS("particles-js", {"particles":{"number":{"value":147,"density":
{"enable":true,"value_area":1420.4657549380909}},"color":{"value":"#ffffff"},"shape":
{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":
{"nb_sides":7},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":
{"value":0.95486864637505,"random":true,"anim":
{"enable":false,"speed":0.24362316369040377,"opacity_min":0.5114885114885115,"sync":false}},"size":
{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":
{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":
{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":
{"enable":false,"rotateX":0,"rotateY":80.17060304327606}}},"interactivity":{"detect_on":"canvas","events":{"onhover":
{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":
{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":
{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
var count_particles, stats, update;
 stats = new stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
   stats.domElement.style.left = '0px'; 
   stats.domElement.style.top = '0px';
   stats.domElement.style.display ='none' 
   
   document.body.appendChild(stats.domElement); count_particles = 
   document.querySelector('.js-count-particles'); update = 
   function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array)
     { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; }
      requestAnimationFrame(update); };
       requestAnimationFrame(update);;
