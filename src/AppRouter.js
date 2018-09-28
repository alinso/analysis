import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CellAnalyzer from './page/CellAnalyzer';
import TargetAnalyzer from './page/TargetAnalyzer';

const AppRouter = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/targetAnalyzer">Hedef Analiz</Link>
                </li>
                <li>
                    <Link to="/cellAnalyzer">Alan Analiz</Link>
                </li>
            </ul>

            <hr/>

            <Route exact path="/targetAnalyzer" component={TargetAnalyzer} />
            <Route path="/cellAnalyzer" component={CellAnalyzer} />
        </div>
    </Router>
);


export default AppRouter;