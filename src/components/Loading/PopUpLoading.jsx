import Popup from "reactjs-popup";
import CircularProgress from "@material-ui/core/CircularProgress";

const PopUpLoading = ({ isLoading }) => {
  return (
    <Popup
      contentStyle={{
        width: "auto",
        background: "none",
        border: "none",
      }}
      open={isLoading}
      position="bottom center"
    >
      <CircularProgress color="secondary" />
    </Popup>
  );
};
export default PopUpLoading;
