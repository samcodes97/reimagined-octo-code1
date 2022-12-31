    
    const secondshandle = document.getElementById('seconds');
    const minuteshandle = document.getElementById('minutes');
    const hourhandle = document.getElementById('hour');

    function startClock()
{
  const now = new Date();

  const sec = now.getSeconds();
  const secDegrees = ((sec / 60) * 360) + 90;
  secondshandle.style.transform = `rotate(${secDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((sec/60)*6) + 90;
  minuteshandle.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourhandle.style.transform =  `rotate(${hourDegrees}deg)`;
}

setInterval(startClock, 1000);