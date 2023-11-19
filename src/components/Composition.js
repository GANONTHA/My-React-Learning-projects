import "../App.css";

const Button = ({ children, backgroundColor }) => {
  return <button style={{ backgroundColor }}>{children}</button>;
};

const Alert = ({ children }) => {
  return (
    <>
      <div className="Overlay" />
      <div className="Alert">{children}</div>
    </>
  );
};
const DeleteButton = () => {
  return <Button backgroundColor="red">Delete</Button>;
};
function Composition() {
  return (
    <div>
      <header>Little Lemon Restaurant</header>
      <Alert>
        <h4>Delete account</h4>
        <p>Are you sure?</p>
        <DeleteButton />
      </Alert>
    </div>
  );
}

export default Composition;
