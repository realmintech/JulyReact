const Button = (props) => {
  const handleSubmit = () => {
    alert("You have successfully added this product to cart.")
  }
  return (
    <>
      <button
        style={{
          backgroundColor: "navy",
          color: "white",
          padding: "8px",
          border: "none",
          borderRadius: "6px",
        }}
        onClick={handleSubmit}
      >
        {props.title}
      </button>
    </>
  );
}

export default Button