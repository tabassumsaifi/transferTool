const ProgressBar = (props) => {
  const { bgcolor, completed, migrationStatus } = props;

  const containerStyles = {
    height: 25,
    maxWidth: "490px",
    backgroundColor: "#D2D3E0",
    borderRadius: 30,
    margin: "35px auto",
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    //   backgroundImage: 'linear-gradient(to right, #3300FF, #50E8FD)',
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#1e5799+0,2989d8+50,207cca+51,7db9e8+100;Blue+Gloss+Default */
    background: "#3300FF",
    background:
      " -moz-linear-gradient(270deg, #3300FF -109.33%, #50E8FD 90.79%)",
    background:
      "-webkit-linear-gradient(270deg, #3300FF -109.33%, #50E8FD 90.79%)",
    background: "linear-gradient(270deg, #3300FF -109.33%, #50E8FD 90.79%)",
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  const labelStyles = {
    paddingRight: 10,
    color: "white",
    lineHeight: "25px",
    fontSize: "12px",
    fontWeight: "600",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>
          {/* {`${completed}%`}  */}
          {migrationStatus === true ? "completed" : `${Math.round(completed)}%`}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
