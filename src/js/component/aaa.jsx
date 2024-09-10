

const SecondsCounter = (props) => {
  const [seconds, setSeconds] = useState(props.seconds || 0);
  const [isPaused, setIsPaused] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Inicia el temporizador
  const startTimer = () => {
    if (intervalId) return; // Evita iniciar múltiples intervalos
    const id = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    setIntervalId(id);
  };

  // Pausa el temporizador
  const pauseTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setIsPaused(true);
  };

  // Reanuda el temporizador
  const continueTimer = () => {
    startTimer();
    setIsPaused(false);
  };

  // Detiene el temporizador
  const stopTimer = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setSeconds(0);
    setIsPaused(false);
  };

  // Inicia el temporizador al montar el componente
  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div>
      <div className='counterGeneral'>
        <div className='calendar'><FcClock /></div>
        <div className='hours'><p>{Math.floor(seconds / 3600)}</p></div>
        <div className='separator'>:</div>
        <div className='minutes'>{Math.floor((seconds % 3600) / 60)}</div>
        <div className='separator'>:</div>
        <div className='seconds'>{seconds % 60}</div>
      </div>
      <button className='myButton' onClick={stopTimer}>Stop</button>
      {isPaused ? (
        <button className='myButton' onClick={continueTimer}>Continue</button>
      ) : (
        <button className='myButton' onClick={pauseTimer}>Pause</button>
      )}
    </div>
  );
};

