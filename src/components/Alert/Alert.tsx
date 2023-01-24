import "./Alert.css";

interface AlertProps {
  message: string;
  isOpen: boolean;
  handleClose: Function;
}

function Alert({ message, isOpen, handleClose }: AlertProps) {
  return (
    <div className="alert">
      <p className="message">Congratulations player "X", you won!</p>
    </div>
  );
}

export default Alert;
