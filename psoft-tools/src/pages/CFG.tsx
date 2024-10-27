import Navbar from "../components/Navbar";
import CFGUI from "../components/CFGUI";
// import Menu from "../components/DesignPatternsMenu";
import { ReactFlowProvider} from '@xyflow/react';


export default function CFG() {
    return (
        <ReactFlowProvider>
            <div>
                <div className="navbar">
                    <Navbar />
                </div>
                <div className="content">
                    <CFGUI />
                </div>
            </div>
        </ReactFlowProvider>
        
    );
}
