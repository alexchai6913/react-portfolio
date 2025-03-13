const AnimatedButton = ({ icon_before = null, icon_after = null }) => {
  return (
    <button className="AnimatedButton">
      {icon_before && <span className="icon icon-before">{icon_before}</span>}
      <span className="button-text">Let's Connect</span>
      {icon_after && <span className="icon icon-after">{icon_after}</span>}
    </button>
  );
};

export default AnimatedButton;