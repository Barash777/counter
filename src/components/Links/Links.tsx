import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './Links.module.css'

export const LINKS = {
    MondayExam: '/monday-exam',
    TuesdayHomework: {
        part1: '/tuesday-hw/1',
        part2: '/tuesday-hw/2'
    }
}

const Links = () => {

    const activeClassName = css.activeLink
    const usualClassName = css.usualLink

    return (
        <div>

            <ul>
                <li><span><NavLink className={({isActive}) =>
                    isActive ? activeClassName : usualClassName
                } to={LINKS.MondayExam}>Monday exam</NavLink></span></li>
                <li className={css.dropdown}>
                    <span className={css.dropbtn}>Dropdown ...</span>
                    <div className={css.dropdownContent}>
                        <span><NavLink className={({isActive}) =>
                            isActive ? activeClassName : usualClassName
                        } to={LINKS.TuesdayHomework.part1}>Tuesday HW1</NavLink></span>
                        <span><NavLink className={({isActive}) =>
                            isActive ? activeClassName : usualClassName
                        } to={LINKS.TuesdayHomework.part2}>Tuesday HW2</NavLink></span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Links;