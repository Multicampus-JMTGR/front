import Popup from "reactjs-popup";
import CircularProgress from "@material-ui/core/CircularProgress";

const PopUpLoading = ({ isLoading }) => {
  return (
    <Popup
      contentStyle={{
        width: "auto",
      }}
      open={isLoading}
      position="bottom center"
    >
      <CircularProgress />
    </Popup>
  );
};
export default PopUpLoading;
