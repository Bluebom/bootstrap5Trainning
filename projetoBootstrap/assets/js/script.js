$(document).ready(function(){
  // Progress bar
  let containerA = document.querySelector(".circleA");
  let circleA = new ProgressBar.Circle(containerA, {
    color: '#64DAF9',
    strokeWidth: 8,
    duration: 1400,
    from: {color: '#AAA'},
    to: {color: '#64DAF9'},
    step: function(state, circle){
      circle.path.setAttribute('stroke', state.color);
      let value = Math.round(circle.value()*254);
      circle.setText(value);
    }

  });
   // Progress bar
   let containerB = document.querySelector(".circleB");
   let circleB = new ProgressBar.Circle(containerB, {
     color: '#64DAF9',
     strokeWidth: 8,
     duration: 1600,
     from: {color: '#AAA'},
     to: {color: '#64DAF9'},
     step: function(state, circle){
       circle.path.setAttribute('stroke', state.color);
       let value = Math.round(circle.value()*254);
       circle.setText(value);
     }
 
   });
    // Progress bar
  let containerC = document.querySelector(".circleC");
  let circleC = new ProgressBar.Circle(containerC, {
    color: '#64DAF9',
    strokeWidth: 8,
    duration: 2000,
    from: {color: '#AAA'},
    to: {color: '#64DAF9'},
    step: function(state, circle){
      circle.path.setAttribute('stroke', state.color);
      let value = Math.round(circle.value()*14);
      circle.setText(value);
    }
  });

  let containerD = document.querySelector(".circleD");
  let circleD = new ProgressBar.Circle(containerD, {
    color: '#64DAF9',
    strokeWidth: 8,
    duration: 2400,
    from: {color: '#AAA'},
    to: {color: '#64DAF9'},
    step: function(state, circle){
      circle.path.setAttribute('stroke', state.color);
      let value = Math.round(circle.value()*500);
      circle.setText(value);
    }

  });

  // iniciando o loader quando o user chegar no elemento
  let stop = 0;
  let dataAreaOffset = document.querySelector('#data-area').offsetTop;


  $('body').scroll((e) => {
    let offsetY = document.querySelector('body').scrollTop;
    console.log(offsetY)
    console.log(dataAreaOffset -700)
    if((offsetY >= (dataAreaOffset - 700)) && stop == 0){
      circleA.animate(1.0)
      circleB.animate(1.0)
      circleC.animate(1.0)
      circleD.animate(1.0)
      stop = 1
    }
    
  });
  // parallax
  setTimeout(()=>{
    $("#data-area").parallax({imageSrc: 'http://localhost/dashboard/bootstrap5Trainning/projetoBootstrap/assets/img/cidadeparallax.png'})
  }, 250)

});
