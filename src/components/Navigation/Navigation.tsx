import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './Navigation.module.css'

export const Links = {
    MondayExam: '/monday-exam',
    TuesdayHomework: {
        part1: '/tuesday-hw/1',
        part2: '/tuesday-hw/2'
    },
    WednesdayHomework: {
        part1: '/wednesday-hw/1',
        part2: '/wednesday-hw/2'
    }

}

const Navigation = () => {

    const activeClassName = css.activeLink
    const usualClassName = css.usualLink

    const activeOrNot = ((props: { isActive: boolean }) => props.isActive ? activeClassName : usualClassName)

    return (
        <div>

            <ul>
                <li>
                    <span>
                        <NavLink className={activeOrNot}
                                 to={Links.MondayExam}>Monday exam</NavLink>
                    </span>
                </li>
                <li className={css.dropdown}>
                    <span className={css.dropBtn}>Tuesday ...</span>
                    <div className={css.dropdownContent}>
                        <span>
                            <NavLink className={activeOrNot}
                                     to={Links.TuesdayHomework.part1}>Tuesday HW1</NavLink>
                        </span>
                        <span>
                            <NavLink className={activeOrNot}
                                     to={Links.TuesdayHomework.part2}>Tuesday HW2</NavLink></span>
                    </div>
                </li>

                <li className={css.dropdown}>
                    <span className={css.dropBtn}>Wednesday ...</span>
                    <div className={css.dropdownContent}>
                        <span>
                            <NavLink className={activeOrNot}
                                     to={Links.WednesdayHomework.part1}>Wednesday HW1</NavLink>
                        </span>
                        <span>
                            <NavLink className={activeOrNot}
                                     to={Links.WednesdayHomework.part2}>Wednesday HW2</NavLink>
                        </span>
                    </div>
                </li>

            </ul>
        </div>
    );
};

export default Navigation;