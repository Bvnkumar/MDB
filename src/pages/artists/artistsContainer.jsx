import { connect } from "react-redux";
import Artists from "./artistsComponent";

const mapStateToProps = (state) => {
    const {
        artists: { artistsData },
    } = state;
    return {
        artistsData,
    };
};

const mapDispatchToProps = () => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Artists);
