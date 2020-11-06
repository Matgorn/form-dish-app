const Loading = () => {
  return (
    <div className="ui card container" >
      <div className="ui active inverted dimmer">
        <div className="ui medium text loader">Fetching data</div>
      </div>
    </div>
  );
} 

export default Loading;