import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {LINKS} from '../Links/Links';
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
                    <Route path={'/'} element={<Navigate to={LINKS.MondayExam}/>}/>
                    <Route path={LINKS.MondayExam} element={<MondayExamCounter/>}/>
                    <Route path={LINKS.TuesdayHomework.part1} element={<TuesdayHWCounter/>}/>
                    <Route path={LINKS.TuesdayHomework.part2} element={<TuesdayHWCounter2/>}/>
                    <Route path={LINKS.WednesdayHomework.part1} element={<WednesdayHWCounter/>}/>
                    <Route path={LINKS.WednesdayHomework.part2} element={<WednesdayHWCounter2/>}/>
                    <Route path={'/*'} element={<Error404/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Content;