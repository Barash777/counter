import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Links} from '../Navigation/Navigation';
import MondayExamCounter from '../MondayExamCounter/MondayExamCounter';
import TuesdayHWCounter from '../TuesdayHWCounter/TuesdayHWCounter';
import TuesdayHWCounter2 from '../TuesdayHWCounter/TuesdayHWCounter2';
import Error404 from '../Error404/Error404';
import css from './Content.module.css'
import WednesdayHWCounter from '../WednesdayHWCounter/WednesdayHWCounter';
import WednesdayHWCounter2 from '../WednesdayHWCounter/WednesdayHWCounter2';


const Content = () => {
    return (
        <div className={css.parent}>
            <div className={css.child}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={Links.MondayExam}/>}/>
                    <Route path={Links.MondayExam} element={<MondayExamCounter/>}/>
                    <Route path={Links.TuesdayHomework.part1} element={<TuesdayHWCounter/>}/>
                    <Route path={Links.TuesdayHomework.part2} element={<TuesdayHWCounter2/>}/>
                    <Route path={Links.WednesdayHomework.part1} element={<WednesdayHWCounter/>}/>
                    <Route path={Links.WednesdayHomework.part2} element={<WednesdayHWCounter2/>}/>
                    <Route path={'/*'} element={<Error404/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Content;