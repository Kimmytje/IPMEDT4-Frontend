import { useHistory } from "react-router-dom";

const Back = () => {
    let history = useHistory();

    return ( 
        <button className="btn-back" onClick={() => history.goBack()}>
            <span className="material-icons"> arrow_back_ios_new </span>
        </button>
     );
}
 
export default Back;